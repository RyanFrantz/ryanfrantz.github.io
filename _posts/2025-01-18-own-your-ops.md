---
layout: post
title: Own Your Operations
tags:
- Operations
type: post
status: publish
published: true
---

## Own It

You need to own your operations. Now.

In [Just Buy it Already](/posts/just-buy-it-already.html) I made the claim that
it nearly always makes sense for companies to buy, rather than build, solutions
that support their products. For personal projects, this can also be true. I
think that still holds, but I also stated that things change. Sometimes the
catalyst for reconsidering those purchases is a need to reduce expenses.
Sometimes it's because a company can optimize a self-hosted solution better than
a managed offering.

And sometimes, especially for personal projects,  it's simply about control.

I have a strong sense that in the coming years, those that start to own their
operations more, now, will be stronger<sup><a href="#1">1</a></sup> than if they
do not. I cannot point to any specific reasons for this<sup><a href="#2">2</a>
</sup> and I'll admit this isn't a well-formed thought, so I'll try to flesh out
the idea with some examples of what this means for me.

### Blogs

For 10 years I self-hosted this blog on a small VPS. And it was good. When I
started paying for Github Pro, I learned that I could take advantage of Github
Pages. Since this blog is powered by Jekyll it was trivial to migrate and shut
down my VPS; I saved a few extra bucks each month. This service provides me with
the benefits of Github's infrastructure (global distribution, HTTP caching,
etc.) but that likely doesn't make a dent in my site's performance given that a
good month brings me 100 visits.

Tangential to this, because Github Pages doesn't provide analytics, I've stuck
with Google Analytics (GA) for years. It was the only Javascript I used on my
static site, but two things bothered me about it: the free tier makes you wait
at least 24 hours to see any new traffic and ad blockers likely diminished its
usefulness.

I [removed](https://github.com/RyanFrantz/ryanfrantz.github.io/commit/bcdce282038ae62fdad86c5e3e6037d1ebf74cf5)
GA last month because I'm going to take back self-hosting this blog. And I'm
starting by building a simple system to count web hits.

### Email

I am loathe to run email for anyone ever again. It's a never-ending arms race
between you and viruses/spam. But for myself? Nowadays, I am seriously
considering it, because I want control of my email. I don't want to give
Google/Gmail any more information about me and my activities; I don't want to be
the product. Paid offerings from outfits like Proton are better, in that regard,
but still come with significant privacy concerns, especially for those that may
be at risk from actions by state actors.

So I will begin the process of running my own mail server. This requires a lot
of preparation and planning but it is important to me that I have complete
control over the content and transport of my messages. Also, all those domains I
bought for all those projects I'm totally gonna finish need some DNS love to
ensure they're not being used for spam.

## Caveat

I've been working in web operations for a long time now. I recognize my
experience affords me a better starting point to take ownership of my personal
operations than others; I have the knowledge and have internalized the level of
effort required to do so. This stuff ain't always easy. As I work through my own
needs I will write about them and share my solutions, in case others find them
useful.

## Footnotes

<a name="1">1.</a> I don't think this is the word I'm reaching for, but it will
suffice, for now.

<a name="2">2.</a> It's more that there are _multiple_ reasons but I need to
spend more time thinking through them.
