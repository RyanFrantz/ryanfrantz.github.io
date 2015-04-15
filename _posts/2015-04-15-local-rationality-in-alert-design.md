---
layout: post
title: Local Rationality in Alert Design
tags:
- Monitoring
status: publish
type: post
published: true
---

##Local Rationality

I recently finished [reading](/reading/2015/) Sidney Dekker's
 *[Field Guide to Understanding Human Error](http://www.amazon.com/Field-Guide-Understanding-Human-Error/dp/1472439058)*
and an important concept in the book is that of **local rationality**.
Local rationality is the idea that during the events leading up to accidents,
people are acting in a way that makes sense to them at the time. All of their
knowledge, training, experience, organizational culture, and input from the
environment combines to influence the decisions people make and the actions they take.

If you strive to understand what was locally rational to operators, you can start
to understand **why** things happened as they did. You see things from *their*
point of view. It occurred to me that the local rationality principle is not limited
to the study of human factors.

##Alert Design
In a [previous post](/posts/alert-design/) I described possible sources for
good context one can add to alerts that page operators. For example, surfacing
the reason the check exists (i.e. something failed in the past and the check
is the result of a remediation item) or what additional information the operator
can review, are good places to start. However, often left undescribed, is **why**
the alert matters in the first place. Perhaps it's common knowledge that the check's
importance is implied simply by the fact that it was configured to wake you in
the middle of the night. However, [I like my sleep](/posts/sleep-driven-development/),
so if a computer is going to wake me up, I want the alert content to be as explicit
as possible.

###Be Locally Rational

When writing monitoring checks, be conscious of those things that may seem obvious
to you, the check writer, that influence the need for, and design of, the check:

* Was there previously some spectacular outage that precipitated writing this check?
* Why does this check operate the way that it does?
* Why does it make sense to have a human address this rather than automate the response?
* Is there useful tribal knowledge around this check that new teammates aren't aware of?

I'm certain there are more questions others think of when they receive alerts, but it all
boils down to *"Why does it make sense to page me with this alert?"* Having that context
jumpstarts the response and, frankly, helps motivate the operator. I can say from my own
experience that nothing is more demotivating on call than receiving an alert with no
coherent background information to at least point me in the right direction to understand
what's happening.

Be locally rational when writing checks. Source your knowledge, training, experience,
organizational culture, and input from your environment to help influence the decisions
operators make and the actions they take.
