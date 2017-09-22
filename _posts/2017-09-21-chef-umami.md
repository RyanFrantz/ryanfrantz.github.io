---
layout: post
title: chef-umami
tags:
- History
type: post
status: publish
published: true
---

For the past two months I've been building a test pipeline for my team's
projects and services. We're responsible for developing tools that help our
fellow engineers get their work done. Some of that work is done via Chef and,
to date, we've had some challenges with providing a consistent and enjoyable
testing experience. In such a large organization, it's easy for a number of
different patterns to emerge to solve the same (or similar) problem.
One of those challenges is that folks may be looking for guidance on what
appropriate tests look like or even which types of tests to write.

There are many engineers writing many cookbooks. Sitting with all of them
wouldn't scale. This problem felt like it needed a tool. Any good (software)
tool does, at least, two things well:

1. Makes it easier to do a thing.
2. Codifies a process so that performing the process is more efficient.

On the last point, I'm referring to velocity. If a process requires a lot
of overhead, it slows down engineers, keeping them from doing more valuable
work. Honestly, in those cases, I'm never surprised when I find that the
process is largely avoided. So I set out to build a tool that would make it
easy to get started testing, by writing the tests *for* engineers.

**NOTE**: This may at first seem counter-productive in that doing the work of
writing tests for engineers doesn't initially teach them how to write those
tests. Consider for a moment, however, what is was like learning that first
programming language: you didn't know where to begin or what to work on. I bet,
like most engineers, you learned by poking at others' code, changing it, and watching
what happened.

![pro programming skillz](https://pbs.twimg.com/media/Cf7eHZ1W4AEeZJA.jpg)

I wanted a tool that would allow folks to see what a base set of tests would
look like for them. They could choose one, many, all, or none of them. They
could tweak them to suit their needs. In any case, **it'd be better than starting
from scratch**. And this leads to another (likely more important) point:

It's difficult for humans to form or change habits.

There are reams of papers and studies on this fact. Whether we're starting a diet,
trying to learn a new spoken language, or how to cook, if the goal seems too
large or too far off, we quit before we even start. But give a person a headstart
(placing healthy snacks in the office, greeting each other in Spanish in the morning,
or following [Sandra's Semi-homemade](http://www.foodnetwork.com/shows/semi-homemade-cooking-with-sandra-lee)
recipes) and they're more likely to get on the good foot and stay there.

Apply this to writing tests for Chef cookbooks. There are several hurdles
people need to address when writing tests:

1. "It's like learning a second language. I don't have time."
2. Writing tests can feel a monotonous process.
3. No tests have ever been written and it's unclear where to begin.

Couple #2 and #3 you've got a doozy of a barrier to entry.

And so it is that `chef-umami` came to be! `chef-umami` exists to help make it
easy to get started with a set of tests written specifically for **your**
cookbook. Here, see it in action:

<script type="text/javascript" src="https://asciinema.org/a/138816.js" id="asciicast-138816" async></script>

In practice, `chef-umami` generated over 600 unit tests in one of our large
cookbooks! 75% of the tests passed, a lot of engineering time was saved, and
our confidence in the operation of the code increased. I reckon an hour or two
hours' worth of time would be required to fix up the remaining 25% of the
tests. That feels a lot easier to manage than writing 600 tests from scratch.

To be certain `chef-umami` needs more work and there are certain opinions
baked into the code. But I'm excited to see how it works for other folks and
what sorts of features they'd like added to it.

Head on over to [https://github.com/bloomberg/chef-umami](https://github.com/bloomberg/chef-umami),
fork it, and contribute code and feedback!
