---
layout: post
title: Just Buy it Already
tags:
  - Engineering
type: post
status: publish
published: true
---

## For the Impatient

It's a classic conundrum: Do you build something you need to support your product? Or do you buy it?

In 2023, for most organizations, the better option is to buy. Nearly every time.

## What are You Building?

What is the _product_ you're building? What facets of the problem space do you believe your knowledge
and experience add the most value to? The answers to those questions inform what _you_ should build.

The rest? Buy it.

By "the rest", I'm referring to all the software and systems you need to _support_ your product. These
are the things that are certainly necessary to operate your business but aren't _directly_ the things
that embody the value of the product itself.

## Yeah, But I Only Have So Much Money

Especially for a new or early product, paying the dollar costs for supporting software, systems, and solutions
is going to be better than paying the opportunity costs that prevent you from getting your product in front
of customers.

The most valuable information you'll get is feedback from customers. If your business is delivering gourmet
dog food, neither Fido nor their human are going to care how good you are at running mailing lists or
building login pages. They're coming to you because they want whole chicken, wild-caught salmon, and
ethically-sourced vegatables in their kibble.

Also, many services offer very generous free tiers that allow you to test and validate them in low-risk,
low-cost (free!) ways. For my time and money, that's where I'd start. Every time.

## It Can't be _That_ Bad!

<blockquote class="quote">
Familiarity breeds contempt. - Aesop
</blockquote>

Listen, friend: just because you _can_ do something, does not mean that you _should_.

Personally, I have deep and even esoteric knowledge of many systems and solutions.
And if I can help it, I will never build and operate another email platform or authentication system
ever again. It takes a lot of time and effort to set those up and more to operate and maintain
them. That is time and effort that likely is better applied to work that adds value to my product.

You can still benefit from that knowledge, too. Those skills don't go too waste because you'll use them
to vet vendor solutions and capabilities. You're not simply outsourcing for its own sake; you will find and
use vendors you have confidence in, because you need to focus on your product's value.

Let's say, for the sake of argument, that you _don't_ have the skills or knowledge to build some
supporting software but you still think you need to build it. That means you need to hire for that
experience. Notwithstanding the lead times to source and interview candidates, how confident are you
in your ability to vet them for that same experience? And if you do manage to hire someone, how long
will it take to deliver that thing? Your time is a a scarce resource. It would be a better use of your
time to rely on a vendor and instead focus on the core of your product.

Finally, lest you think the nearly-always-buy position is naive, I know it's not as simple as composing
off-the-shelf parts into your product without _some_ amount of work. But I can promise you the difference between
building and buying something you can plug in (filling gaps, as needed) is significant.

If you still feel the need to build, consider this: when competing with another company building a similar
product, the one that ships first and gets customer feedback is always going to take the lead. First-mover
advantage can be squandered certainly, but they always set the stage for what matters in a product space
because they get mindshare first.

## I'm Still Not Convinced Building is a Bad Proposition

Skepticism can be healthy. So I'll enumerate some examples of _some_ of work that would be required to
operate typical parts of a product.

### Email

I've run Sendmail, Postfix. Even Exchange. Here is a non-exhaustive set of things you need to manage:

- Mailbox storage; maybe managing quotas
- Reputation management
- Spam filtering (a constant arms race)
- Running a fleet of mail servers, in concert, across multiple IPs
- Unruly blocklist admins that refuse to delist you after fradulent reports (at least 10 years ago)
- Constant attempts to crack these systems
- Mailing list management
- Email-based marketing campaigns

### Authentication

This problem space requires deep and often estoteric knowledge. And it is difficult to get right.
And it is _so_ important to the customer's on-boarding experience.

- Password-hashing (still a problem!)
- OAuth and OIDC (including deprecating weak options)
- Constant attempts to crack these systems
- Social login integrations (some follow standards; some tweak the standards to their needs)
- Supporting various clients (web, mobile) and patterns (REST APIs, AppAuth, native)
  
### Payments

You're in business to make money. But you already know that. Again, a non-exhaustive (but
eye-opening) set of responsibilities you take on if you want to build your own support.

- Invoices
- Refunds
- Chargebacks
- Managing payment gateways and processors
- Financial reporting
- Constant attempts to crack these systems
- Credit card storage/tokenization
- Access controls
- Credit card dunning
- Subscriptions
  - Plan types
  - Pausing/restarting
- Integration with CRM and ERP systems
- Regulatory compliance (PCI, SOX, SOC2, etc.)
  - Entire groups within organizations will be dedicated to managing this operation!


## Things Change

At some point, it does make sense to revisit the question of build-vs-buy. Typically it arises from some need that is
less about product value and more about the maturity of your organization. Perhaps you want to manage your overhead
better. If you're in a good spot and have the talent to address it, you might be able to bring that support
in-house and reduce your costs. Unless you're a large company, this likely isn't a problem you have. So don't try
to solve that problem today.

Solve the problems you have today. And buy what you need to get to tomorrow.
