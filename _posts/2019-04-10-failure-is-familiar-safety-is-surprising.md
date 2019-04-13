---
layout: post
title: Failure is Familiar, Safety is Surprising
tags: engineering, facilitation, human factors, learning, safety, systems
type: post
status: publish
published: true
---

<blockquote class="quote">
How did this ever work?!<br><br>

Every person that has ever attempted to read or write software.
</blockquote>

**NOTES**

Takeaway: Our systems are not decomposable as they may have been years ago
(bare metal, VMs, containers, Kubernetes; all of the above). They are complex
and always changing. Behavior is always emerging. So it is surprising that
they work at all. We've moved beyond single-server-single-purpose work
(think web servers, mail servers) to distributed systems (I'd dare say even a
Docker Compose rig could be considered an example of distsys).

More: we've been studying failure for a very long time and we've been cataloging
the ways in which systems fail; it's what allows us to build more robust systems
that navigate known issues (i.e. if a log file is missing we attempt to create it
before trying to log messages). This is what Hollnagel and others refer to as
Safety-I. Safety-II aims to surface/discover the capacity within organizations
that allows them to adapt to uncertain events and situations.

Is there a reference in here frm Woods' "Resilience is a Verb" paper?


## A Failure by Any Other Name...

Our perception of how our systems operate is often binary: they either
"just work" or they fail. And when things do fail, we are often surprised.
However, if we give it some consideration we will find that failure is very
familiar to us.

For example, we have volumes dedicated to describing the ways in which our
bodies can or do malfunction (see the the International Classification of
Diseases). Those who practice medicine are are trained to recognize ailments
based on how patients present that often indicate something is failing (such as
itchy eyes, a scratchy throat, and a runny nose). So too, software engineers
constantly experience a world filled with failure. So much, that we've erected
soft monuments to them such as the `errno.h` header in the Linux kernel code.
If I run a program on a Linux host, it can fail in one of several hundred known
and defined ways. Those definitions are assigned a unique number that may be
provided as an exit status such as those in the snippet below:

```
#define    EPERM         1    /* Operation not permitted */
#define    ENOENT        2    /* No such file or directory */
#define    ESRCH         3    /* No such process */
#define    EINTR         4    /* Interrupted system call */
#define    EIO           5    /* I/O error */
...
#define    EMFILE        24    /* Too many open files */
#define    ENOTTY        25    /* Not a typewriter */
...
#define    ENAMETOOLONG  36    /* File name too long */
#define    ENOLCK        37    /* No record locks available */
/*
 * This error code is special: arch syscall entry code will return
 * -ENOSYS if users try to call a syscall that doesn't exist.  To keep
 * failures of syscalls that really do exist distinguishable from
 * failures due to attempts to use a nonexistent syscall, syscall
 * implementations should refrain from returning -ENOSYS.
 */
#define    ENOSYS        38    /* Invalid system call number */
```

Note the fine-grained (possibly esoteric) errors like `Not a typewriter` and
cases where specifying an error, `ENOSYS`, may be invalid (an error within an
error!). Indeed, failure is familiar to us. We know its various names.

## Success Is Opaque

A single exit status defines success for a Linux program: `0`, that is, "zero".
Simply zero. There are no status codes indicating "passed with flying colors"
or "passed by the seat of its pants". Success is simply success,
regardless of what work the program performed or what obstacles it avoided. The
details of how the code works, how it was able to address potential failures,
and what contributed to its success are likely invisible to the operator.

As any developer debugging software can attest, how things work, that is, how
they function without failing, may be unknown. Many of you reading this likely
are able to drive a car and understand how it works, superficially, at least.
But I'm willing to bet, unless you're a mechanic (or in training to be one) you
likely don't know much about what makes it "go" beyond turning the ignition,
pushing the accelerator and brake pedals, turning the steering wheel, and
programming your favorite station into the radio. If you own a car, I bet it's
been more than 3 months or 3000 miles since you've had the oil changed. But if
you know more about the what makes a car run successfully, such as the fact that
oil helps lubricate parts of the engine and remove particulates, you're more
likely to keep to a regular maintenance schedule. Unfortunately, for many of us,
learning this comes through failure, when we have our vehicle towed to the
closest garage because the oil pan is dry and all the metal bits that should
not have rubbed together did.


This is what Safety-II offers us.

"A well developed understanding of an accident would therefore go well beyond
understanding how the failure occurred to more nuanced understanding of how such
failures are _normally_ prevented and what conditions or circumstances impeded
or undermined this. We called this approach to the study of work “the second
story” and it is from this that Safety II is derived." - Dr. Cook in LFI Slack
(ask for permission to quote)

Safety-II; it relates to the system’s ability to succeed under varying conditions.
from https://www.england.nhs.uk/signuptosafety/wp-content/uploads/sites/16/2015/10/safety-1-safety-2-whte-papr.pdf

"Safety-II is about all possible outcomes: involving normal, everyday, routine
performance; exceptionally good performance: and near-misses accidents and
disasters." Steven Shorrock
(http://www.safetydifferently.com/what-safety-ii-isnt/)

Safety II is not mutually exclusive with Safety-I (see Shorrock post above).
Indeed, as we endeavor to discover the numerous ways that a system works
successfully, we are bound to uncover even more failure scenarios. We will also
begin to learn why our systems exist in the first place, that is, what purpose
do they serve; what benefit do they provide. As we do so we will begin to
imagine the systems more "in the world" (6 stages to the new view of human
error; stage 4?) and begin to understand how they behave in a larger
context. What are the intended uses of these systems? How have new uses and
expectations about operation accreted over time? How does its behavior rely
on or impact that of others? This may be overwhelming at first but in time,
we will come to see that this expanded view helps to clarify more and more
about the design of our systems and their role and impact on their
environment. Only then will we be able to make better-informed decisions
about, well, stuff.

"The traditional view of safety, called Safety-I, has [] been defined by the
absence of accidents and incidents... [R]esilience engineering maintains that
‘things go wrong’ and ‘things go right’ for the same basic reasons. This
corresponds to a view of safety, called Safety-II, which defines safety as the
ability to succeed under varying conditions." - Erik Hollnagel
(https://erikhollnagel.com/ideas/safety-i%20and%20safety-ii.html)

“Knowledge and error flow from the same mental sources; only success can tell
one from the other.” - Ernst Mach

We need more Gray's Anatomy https://en.wikipedia.org/wiki/Gray%27s_Anatomy)
that describes how systems actually function. What makes them successful.

We learn about failure first because we are, by nature, experimenters. We have
an idea, we test it (say, by writing some code) and discover the idea is not
well formed for the environment in which it operates: it fails.

So we make adjustments and try again. We often categorize the failure but not
what we've done to address it. [1]

We are so familiar with failure that in software, we have so many ways to
describe it:
https://github.com/torvalds/linux/blob/master/include/uapi/asm-generic/errno.h (reference some esoteric examples)
https://github.com/torvalds/linux/blob/master/include/linux/errno.h
https://github.com/torvalds/linux/blob/6f0d349d922ba44e4348a17a78ea51b7135965b1/arch/mips/include/asm/errno.h
https://github.com/torvalds/linux/blob/6f0d349d922ba44e4348a17a78ea51b7135965b1/arch/alpha/include/uapi/asm/errno.h

But success is codified simply as '0'. The simplest definition is "it works".
But how? How do our creations manage to start, operate with a static set of
expectations, handle some degree of uncertainty, and still manage to work?!

Facilitating post-incident reviews are an opportunity to surface the
expectations we have of the environments, known constraints, and variables our
systems operate within and around. They are an opportunity to develop expertise
in pursuit of Safety-II.

** By identifying failure scenarios we are creating opportunities to develop
safety. That is, by documenting how things can break we are given the chance to
review them and implement or build solutions that can provide some level of
adaptation to keep a system running. Here, I think, Safety-I and Safety-II are
complementary.

[1] If our code expects a file to be available for logging, a first cut of the
program will likely fail with FILE NOT FOUND. We can take this opportunity to
describe and catalogue how we address this, such as attempting to create the
file ourselves (which may lead to other issues such as inadequate permissions).

