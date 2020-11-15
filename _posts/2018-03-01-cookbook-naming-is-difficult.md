---
layout: post
title: Cookbook Naming Is Difficult
tags:
- Systems Design
type: post
status: publish
published: true
---

**NOTE**: This post is adapted from one I wrote on an internal company blog.

## A Ghost in the Machine

A well-worn adage in computer science is that naming things is one of the most
difficult problems to solve. Very recently, this became all too evident as I
learned from debugging an odd problem that cropped up during a Chef `Policyfile`
update.

### The `nrpe` Cookbook

Once upon a time, we maintained an internal cookbook named `nrpe` that was
responsible for installing and configuring the Nagios/Icinga NRPE client.
There is also an upstream (public Chef Supermarket) `nrpe` cookbook. This wasn't
an issue for us as we could define a preferred source for our cookbook in a given
`Policyfile.rb`, like so:

```ruby
default_source :supermarket, 'https://supermarket.example.com' do |src|
  src.preferred_for 'nrpe'
end
```

During the policy compilation phase of a `chef update` run, the `nrpe` cookbook
would get sourced internally and all was well.

Fast forward to today where we have deprecated the internal `nrpe` cookbook in
favor of an external cookbook named `blp-nrpe` (we contribute to the open source
community as much as possible). The functionality available in the internal
`nrpe` cookbook had been ported. Further, we now have a simple internal cookbook
named `nrpe-client` that depends on `blp-nrpe` and whose purpose is much more
clear than the previous `nrpe` cookbook.

Some months ago, a number of engineers got on the good foot and removed all
references in their cookbooks to the original internal `nrpe` cookbook. We
allowed some time for that to settle in and give folks time to update their
policies to pick up the newer versions of cookbooks that no longer depended on
the internal `nrpe` cookbook.

### Spooky Action at a Distance

One day, a coworker was updating a policy file, adding the newer `nrpe-client`
cookbook and removing the `nrpe` reference. `chef update` complained with:

```sh
Error: Failed to generate Policyfile.lock
Reason: (ChefDK::CookbookSourceConflict) Source supermarket(https://supermarket.chef.io) and supermarket(https://supermarket.example.com) contain conflicting cookbooks:
- nrpe

You can set a preferred source to resolve this issue with code like:

default_source :supermarket, "https://supermarket.chef.io" do |s|
  s.preferred_for "nrpe"
end
```

No biggie. We decided to double-check for any version constraints that might
reference an older cookbook that had once depended on `nrpe`. We found none.
After some more digging, we chose to oblige `chef update` and added the source
preference, to see what a clean run would produce. We reviewed the cookbooks
that, in previous versions, had referenced `nrpe`; all the imported cookbooks
were for versions where *there was no reference or dependency* on the `nrpe`
cookbook!

This was odd. We checked the `solution_dependencies` and `dependencies` keys
in the policy file lock (`Policyfile.lock.json`) to find out which cookbook(s)
may have required it. We found none!

### A Zebra Can't Change Its Spots

So, if we no longer have any references to the old `nrpe` cookbook defined, why
did `chef update` insist that we define a preferred source for it? It turns out
that if you have _ever_ referenced a cookbook as a dependency in another cookbook,
it may come back to haunt you, even if you no longer use the depending cookbook!

The reason for this is that as `chef update` attempts to resolve cookbooks, their
preferred sources, and the resulting dependency graph (i.e. this cookbook depends
on that cookbook which in turn depends on the other cookbook, ad infinitum), *before
it ever considers version constraints*, it retrieves *all* versions of a given
cookbook and walks their dependencies to build up an initial list of cookbooks
it may need to consider for inclusion in a policy.

Because of this, `chef update` builds a list that includes newer cookbooks that
do not include the `nrpe` dependency as well as previous versions of those same
cookbooks that had *previously* depended on `nrpe`! [1] `chef update` then
iterates over that list, checking if each cookbook has a preferred source. If it
does not, it tests whether there may be a conflict present; that is, if the
cookbook might be found in multiple sources. [2] If it finds a conflict,
`chef update` fails with the above error.

This means that even if we no longer require the `nrpe` cookbook in newer
versions of our cookbooks, we *MUST* specify a preferred source for it to
satisfy the policy file compiler as it builds its dependency graph.

## Ghostbusting

While a long-term fix would be look into adding logic to check version constraints
at the same time a dependency graph is built, the simplest solution at the
moment is containment. Luckily, both our internal and the upstream `nrpe`
cookbooks are largely vestigial (the latter hasn't been updated since 2014, as
of this writing). We can instruct `chef update` to use our internal Supermarket
as the preferred source for the `nrpe` cookbook without issue because none of
our run lists resolve to actually include that cookbook. It's effectively a no-op.

However, future engineers may encounter this issue and it's important they have
the necessary context to address this. While this article should be useful, I'll
be updating any `Policyfile.rb` I come across with the following story:

{% highlight ruby %}
default_source :community
default_source :supermarket, 'https://supermarket.example.com' do |s|
  s.preferred_for 'nrpe-client',
                  'nrpe' # [1]
end
# [1]
# While we no longer require the 'nrpe' cookbook in newer cookbook versions,
# because the policyfile compiler pulls all cookbook versions from Supermarket to
# develop a dependency graph per cookbook [a], it means it will pick up versions
# of a cookbook where 'nrpe' may once have been required. The poliycfile compiler
# then checks if a cookbook has a preferred source to pull it from. If it does
# not, and the policyfile compiler sees that the dependent cookbook may be
# found in multiple sources (as is the case for 'nrpe'), the compiler will fail
# and notify the operator. So even though we no longer use the 'nrpe' cookbook
# as a dependency, because its name conflicts with an upstream cookbook in the
# community Supermarket, we HAVE to specify a preferred source here to avoid
# errors [b]. Hopefully this does not cause unexpected issues in the future. At a
# minimum, it looks like the upstream 'nrpe' cookbook [c] is stale/unmaintained
# just like our internal version ;)
# [a] https://github.com/chef/chef-dk/blob/aa5f0272633559ccbf61f7046eff472d92ccb6db/lib/chef-dk/policyfile_compiler.rb#L422-L435
# [b]
#  Error: Failed to generate Policyfile.lock
#  Reason: (ChefDK::CookbookSourceConflict) Source supermarket(https://supermarket.chef.io) and supermarket(https://supermarket.example.com) contain conflicting cookbooks:
#  - nrpe
#
#  You can set a preferred source to resolve this issue with code like:
#
#  default_source :supermarket, "https://supermarket.chef.io" do |s|
#    s.preferred_for "nrpe"
#  end
# [c] https://supermarket.chef.io/cookbooks/nrpe/versions/1.0.0
{% endhighlight %}

## Footnotes

[1] See the [`all_possible_dep_names`](https://github.com/chef/chef-dk/blob/aa5f0272633559ccbf61f7046eff472d92ccb6db/lib/chef-dk/policyfile_compiler.rb#L422-L435)
method for context on how `chef update` resolves cookbook dependencies.

[2] See the [`remote_artifacts_graph`](https://github.com/chef/chef-dk/blob/aa5f0272633559ccbf61f7046eff472d92ccb6db/lib/chef-dk/policyfile_compiler.rb#L285-L305)
method.
