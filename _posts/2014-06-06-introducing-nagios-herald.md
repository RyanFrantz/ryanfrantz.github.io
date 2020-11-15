---
layout: post
title: Introducing nagios-herald
tags:
- Alert Design
status: publish
type: post
published: true
---

## aka Rub Some Context On It

I wrote about [alert design](/posts/alert-design/) a few weeks back and I hinted at a forthcoming project that would
be useful in adding context to Nagios alerts. I'm really excited (and a bit nervous) to introduce
**nagios-herald**!

**nagios-herald** is available at [https://github.com/etsy/nagios-herald](https://github.com/etsy/nagios-herald).

**nagios-herald** was created from a desire to supplement an on-call engineer's awareness of conditions surrounding
a notifying event. In other words, if a computer is going to page me at 3AM, I expect it to do some work for me to
help me understand what's failing. I can't emphasize this enough: **computers can, and should, do as much work as
possible for us before they have to wake us up**.

## Formatters

At its core, **nagios-herald** is a Nagios notification script. The power, however, lies in its ability to add
context to Nagios alerts via [formatters](https://github.com/etsy/nagios-herald/blob/master/docs/formatters.md).
**nagios-herald** includes a few built-in formatters, but I want **you** to write custom formatters that fulfill
**your** needs. If you think others can benefit from them, by all means, contribute to the project.

## Getting Started

Clone the [nagios-herald repo](https://github.com/etsy/nagios-herald), write your own custom
[formatters](https://github.com/etsy/nagios-herald/blob/master/docs/formatters.md), and
[configure](https://github.com/etsy/nagios-herald/blob/master/docs/config.md#notable-configuration-values)
**nagios-herald** to load them.

## Todo

There's still plenty of work to do with this project, including making it usable as a Ruby gem, improving
documentation, writing tests, and [more](https://github.com/etsy/nagios-herald/issues?state=open).

I look forward to feedback from the community and pull requests!

## Special Thanks

I'd like to thank my co-workers, plain and simple. Some of them wrote code, some helped with ideas.
Others helped by acting as sounding boards while I worked out problems. This project is possible because I work
on an amazing team with great people.
