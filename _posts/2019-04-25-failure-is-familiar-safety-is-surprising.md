---
layout: post
title: Failure is Familiar, Safety is Surprising
tags: engineering, facilitation, human factors, learning, safety, systems
type: post
status: publish
published: true
---

<blockquote class="quote">
Knowledge and error flow from the same mental sources; only success can tell
one from the other.<br>
<br>
Ernst Mach
</blockquote>

<blockquote class="quote">
How did this ever work?!<br><br>

Every person that has ever attempted to write software.
</blockquote>

The complexity of our systems means they are not easily decomposable; it is rare
that modern systems can be broken down to a single service running on a single
host, for example. Further, they are always changing and the conditions in which
they operate are dynamic. Crucially, new behavior is constantly emerging. By the
time we think we've mapped them, the terrain has updated underneath us. It is
surprising that our systems work at all. Yet they do and we take it for granted.

We've been studying failure for a very long time, cataloging the ways in which
systems break down; it's what allows us to build more robust systems that can
navigate known issues. This is what Hollnagel and others refer to as Safety-I,
defined as "the absence of accidents and incidents". We have learned to identify
numerous scenarios and to build in specific defenses to address them. The absence
of incidents can only be achieved if we have complete knowledge of all possible
failure states. If I have even a superficial grasp of the law of requisite
variety, I believe I could say that our systems do not obey it. That is, as
long as the set of failures are known and thus finite, we can count on them
being addressed (as they present themselves) and we can, therefore, claim safety
as the absence of accidents. But there are always new failures yet to be
discovered.

While failures tend to capture our imagination there is ample opportunity to
learn more about our systems by studying how "things go right" (Hollnagel).
By taking a different perspective on safety, Safety-II, defined as "the ability
to succeed under varying conditions" we may surface the capacity within
organizations that allows them to adapt to uncertain events and situations and
keep their systems running. Feebly attempting to apply the law of variety, here,
the more we understand about how people interoperate with their systems the more
we can apply that knowledge to regulate them. The presence of expertise is the
driving force behind the safety of our systems.

## A Failure by Any Other Name...

Our perception of how our systems operate is often binary: they either
"just work" or they fail. And when things do fail, we are often surprised.
However, if we give it some consideration we will find that failure is very
familiar to us.

Software engineers constantly experience a world filled with failure. So much so,
that we've erected soft monuments to them such as the `errno.h` header in the
Linux kernel code. If I run a program on a Linux host, it can fail in one of
several hundred known and defined ways. Those definitions are assigned a unique
number that may be provided as an exit status. See some examples in the snippet
below:

```
#define    EPERM         1    /* Operation not permitted */
#define    ENOENT        2    /* No such file or directory */
...
#define    EMFILE        24    /* Too many open files */
#define    ENOTTY        25    /* Not a typewriter */
...
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

Success is opaque. Another way of stating this is that _success should be
transparent_.

A single exit status defines success for a Linux program: `0`, that is, "zero".
Simply. Zero. There are no status codes indicating "passed with flying colors"
or "passed by the seat of its pants". Success is simply success,
regardless of what work the program performed or what obstacles it avoided. The
details of how the code works, how it was able to address potential failures,
and what contributed to its success are likely invisible to the operator.
As any developer debugging software can attest: how code work, that is, how
it functions without failing, can be murky.

Many of you reading this likely are able to drive a car and understand how it
works, on the surface, at least. But I'm willing to bet, unless you're a
mechanic (or in training to be one) you likely don't know much about what makes
it "go" beyond turning the ignition, pushing the accelerator and brake pedals,
turning the steering wheel, and programming your favorite station into the radio.

If you own a car, I bet it's been more than 3 months or 3000 miles since you've
had the oil changed. Unfortunately, for many of us, learning the function of oil
comes through failure, when we have our vehicle towed to the closest garage
because the oil pan is dry and all the metal bits that should not have rubbed
together, did. But if you know more about what makes a car run successfully,
such as the fact that oil helps lubricate the engine, keep it cool, and remove
particulates, you're more likely to keep to a regular maintenance schedule.

_When we make success more visible, we improve our ability to continue being
successful_. This is Safety-II in effect.

<!--
Lest I forget how clever I am, the below unicode character represents the math
symbol for a strict superset. That is, A is a superset of B but B is not equal
to A.
-->
## Safety-II &#x2283; Safety-I

<blockquote class="quote">
Safety-II is about all possible outcomes: involving normal, everyday, routine
performance; exceptionally good performance: and near-misses accidents and
disasters. Our traditional approach, Safety-I, has largely limited itself to the
latter – the accidents (actual or potential) at the tail end of the distribution.
Safety-II is about the whole distribution, and its profile.<br>
<br>
Steven Shorrock, http://www.safetydifferently.com/what-safety-ii-isnt/
</blockquote>

Safety II and Safety-I are not mutually exclusive. Indeed, as we endeavor to
discover the numerous ways that a system works successfully, we are bound to
uncover even more failure scenarios:

<blockquote class="quote">
Complex systems contain changing mixtures of failures latent within them.<br>
<br>
Dr. Richard Cook, How Complex Systems Fail
</blockquote>

We will also begin to learn why our systems exist in the first place: what
purpose they serve; what benefit they provide. As we do so we will begin to
imagine the systems more "in the world" [1] and begin to understand how
they behave in a larger context. What are the intended uses of these systems?
How have new uses and expectations about operation accreted over time? How does
its behavior rely on or impact that of others? This may be overwhelming at first
but in time, we will come to see that this expanded view helps to clarify what
normal performance is for our systems and their role within their environment.

## Conclusion

Success need not be surprising. The more we study how our systems behave, the
more safe they become. (Flesh this out).

> Have i mentioned anything about conflicting goals such as keeping the site up
versus shipping new features?

> HAVE to mention that what makes things work "right" is invisible and that this
is a double whammy (doubly true) for software because the work that goes into
creating code is a largely invisible process.

## Footnotes

[1] "[N]ew view stories... tend[] to end up in the world, in the system in which
people work[], systems which people made work in the first place."
Siegenthaler and Laursen, "Six stages to the new view of human error"
