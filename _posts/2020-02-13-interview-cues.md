---
layout: post
title: Interview Cues
tags: accidents, analysis, discovery, incidents, investigations
type: post
status: publish
published: true
---

Effective accident investigators and incident analysts must objectively report
facts as they are observed. How can these facts be discovered, especially when
they do not always obviously present themselves? Through practice, an
investigator will pick up several cues during interviews that lend themselves to
deeper probing.

## Root Cause 

You've read Dekker and the canonical blog posts, watched a few presentations
where folks proselytize that There Is No Root Cause (TM). You feel this deeply
and wish that others would as well. An interview isn't the time to spread the
word; it's a time to actively listen. And when you hear an interviewee describe
or declare the root cause, seize on this as an opportunity to ask better
questions, especially to **learn about their perspective**.

Just as we know that a "root cause" is not the end of an investigation, but a
a potential starting point, so it is in an interview. This is a chance to ask
the interviewee questions like the following:

> How did you come to understand that this is the root cause of the incident?

> What factors did you see that may have contributed to, or existed in parallel,
  to this root cause?

> Of those factors, describe which, if any, may have been sufficient to cause
  the incident on their own?

You know that any number of contributing factors are each necessary but only
jointly sufficient to create the conditions in which an incident occurred, but
your interviewee may not. When you hear "root cause", reflect that language in
better questions that can help them yield new insights.

Internally, you may chafe at that language; channel that energy into a
productive set of questions.

## Human Error

> Tim was hasty in pushing that revert out to production.

> Aki was overconfident in her actions.

It's easy, given the power of hindsight, to pass judgment about what made sense
to a person in the moments leading up to or during an incident. [Knowledge and
error flow from the same mental sources; only success can tell one from the
other](/posts/failure-is-familiar-safety-is-surprising.html). When you hear
statements like those above, you may be able to extract **tacit knowledge** from
the interviewee:

> What is a normal, or expected, cadence for pushing code into production?

> How is code typically deployed?

> How does one develop confidence around the given task?

Statements that seek to blame a person for their actions are ripe with "if it
had been me"-type connotations. Probe for content you can use to contrast the
interviewee's expectations with the events that unfolded. That context will
yield interesting insights and, likely, more good follow up questions.

A useful tool is to re-frame these questions in terms of success:

> What would a successful operation look like in this situation?

Note that success is often possible **despite** conflicting or unclear
information, instruction, and goals. Getting your interviewee to describe these
obstacles and how **they** work through those constraints provides another
valuable source of tacit knowledge. Use that information to better understand
the perspectives of those that participated in an incident.

## Counterfactuals

> Under normal conditions, that traffic wouldn't have made it through the
  firewall.

> Gavin should have known better than to deploy that package.

As an investigator, you want to avoid using or writing counterfactuals. They
only serve to describe an idealized reality fueled (and justified) by hindsight.
Still, when you hear an interviewee confidently state a counterfactual, it is an
opening to explore their mental model of the environment and conditions during
an incident:

> How would they describe "normal conditions"?

> How were the conditions during the event different?

> How did conditions during the incident lend themselves to traffic moving
  through the firewall?

> How would you have deployed that package?

Questions like these can help the interviewee provide their perspective, how
they "see" things in the course of their work. The answers can provide additional
avenues to discover more.

## Opinions

Similar to counterfactuals, opinions shed light on a person's mental model. Keep
an ear out for statements like the following:

> I don't think we're using this tool correctly.

> We're not taking full advantage of that service.

> Their process is a waste of time.

Perhaps the interviewee has extensive experience with a tool or service. Ask
questions to bring out their expertise. Once you get someone talking about
something they know, they may not stop! You'll uncover many interesting threads
to pull on.
