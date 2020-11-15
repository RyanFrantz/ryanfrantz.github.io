---
layout: post
title: Breaksmithing
tags:
- System Administration
- Chaos Engineering
status: publish
type: post
published: true
---

I am a breaksmith.

When I set out to learn a new system, I provision a little hardware, install
some software, maybe read the documentation, and configure it. But when I want
to **understand** that system and how it operates, I **break** it.

I call this **breaksmithing** and it's an invaluable skill that all system operators
should develop throughout their careers.

Smithing is a craft in which, over many years, one develops the skills to take
a raw material, such as metal, and forge it into some finished product.
Breaksmithing is a method one employs to grasp the ways in which a process or system can
fail. It's not enough to know that something works; as an experienced operator,
you know that it's only a matter of time before something fails. This is
especially true in complex systems. In fact, I posit that a system's failures
define it more than its successes. I cannot help but draw a parallel to the fact
that on all UNIX-like systems, there is only one way for programs to denote
success (0) but many more ways to denote failure (consult ``errno.h`` for some examples).

## Ordo ab chao

When systems break, it can be uncomfortable, especially when you don't know what
you don't know. But failures help to surface these unknowns and teach us.
Peers of mine, whom I look up to and respect because they have deep knowledge
of systems, have admitted they came by this knowledge through hardship:

    "The only things I know anything in depth about are things that have
    caused me problems in the past."

This is an experience I believe we all share. We remember most those events
that were the most problematic, that confused us, that pushed the limits of our
knowledge and experience at the time. The pain of that experience cemented the
lesson in our minds. And it's in that vein that I think it's important to note
that we often learn most from our negative experiences.

Perhaps this is a derivative of some latent survival instinct. Maybe its a
function of being highly motivated to remove a negative stimulus (i.e. operant
conditioning). Whatever it is, I'm comfortable saying, at least anecdotally,
that learning through failure helps to shape how we design and operate systems,
because we can learn from what happens when they break down and how that failure
presents itself.

Truth be told, we're not building systems that Just Work (tm). And we're not
building systems that never fail. Our experiences help us to know that systems
**will** fail. Therefore, it's incumbent on us to design systems so that when they
fail, we can degrade the failure, or recover from failure with
minimal loss.

On a larger scale this type of system design is referred to as **resilience
engineering**. And it's the basis of programs such as Amazon's and Etsy's GameDays
and Netflix's ChaosMonkey. The general premise is that manufactured failure helps
us test assumptions about how our systems fail, our ability to detect the failure,
how engineers respond, and what impact those failures have on the organization.
A good place to soak up some ideas around resilience engineering is an article
on the ACM Queue site named
[Resilience Engineering: Learning to Embrace Failure](http://queue.acm.org/detail.cfm?id=2371297).

## Learning without thought is labor lost; thought without learning is perilous

We must learn from our failures if we are to improve anything.
The most crucial part of breaksmithing is half absorbing the lessons learned
and half disseminating those lessons to others. In my career, teaching and
sharing ideas have helped me better internalize what I've experienced because
I'm forced to think about the content in such a way that it can be useful to
others. For example, defining the impact of the failure and its downstream
effects provides critical context that allows others to understand what occurred
and possibly develop ideas about how to better monitor and address the issue in
the future.

When breaksmithing, systems and failure are the raw materials of our trade.
Learning is the flux that purges impurities. And resilient systems are the finished
product we forge.

