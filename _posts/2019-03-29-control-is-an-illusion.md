---
layout: post
title: Control is an Illusion
tags: [Engineering, "Human Factors", Learning, "Systems Thinking"]
type: post
status: publish
published: true
---

<blockquote>
There were incidents and accidents,

There were hints and allegations.

<footer>
Paul Simon, <cite>You Can Call Me Al</cite>
</footer>
</blockquote>

## Control

A fundamental aspect of humanity is that we believe we are in control of our
lives, our environment, the larger world. To a limited extent this may be
true but that truth is constrained by what we allow to be part of the story.
Certainly, I set the temperature I want to maintain in my house so I can say I
have control over the comfort of its residents. But I have no control over the
external temperature, its impact on how much work my HVAC needs to perform, what
the daily cost of power generation will be, how that affects my monthly bill,
etc.

The real truth is that control is an illusion. One of our own making.

To believe we are in complete control requires us to perceive ourselves as
existing outside our systems, with absolute ability to manipulate all inputs and
outputs. It requires omniscience and omnipotence. But, today, at least, such
control is impossible because we are neither all-knowing nor all-powerful:

<blockquote>
Information technology anomalies are frequently fundamental surprises. This is
due to the difficulty in maintaining adequate mental models of what is below
the line, understanding how this connects to what is above the line -- crossing
the line, as software systems grow in complexity and continuously change.
<footer>
The Stella Report,
<cite>
section 3.4.2, subsection <a href="https://snafucatchers.github.io/#3_4_2_Surprise">Surprise</a>
</cite>
</footer>
</blockquote>

Further, this idea of control ignores that we are, in fact
[part of these systems](https://en.wikipedia.org/wiki/Sociotechnical_system),
contributing to their inputs and outputs as often key components in their
operation.

## Agents of Control

Post-incident reviews are a wonderful opportunity to learn, to fill gaps in our
knowledge of our systems, to help others tune their mental models, and to
collectively develop expertise about their operations, both successful and
failed. It is very easy for these reviews to be performative, with the tacit
goal of simply getting to the end, to alleviate the
[anxiety](/posts/when-does-an-investigation-end.html#anxiety) of the experience.
These types of reviews are largely ineffective, providing little beyond our
ability to churn out stacks of remediation items in a misguided effort to
demonstrate that we know how to fully prevent an event's recurrence.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Consider this: If you find your post-incident reviews are neither compelling nor helping your organization learn, it&#39;s very likely those reviews simply assemble facts rather than tell stories.<br><br>We learn best from, and are engaged more by, stories.</p>&mdash; Ryan Frantz (@Ryan_Frantz) <a href="https://twitter.com/Ryan_Frantz/status/1103293847113744389?ref_src=twsrc%5Etfw">March 6, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

That anxiety is very real and is related to the discomfort we feel when the
edges of our perceived control become less crisp. It's an indicator that there
is more to learn, if we put in the effort and practice. Our reviews will be more
powerful if we admit our idea of control is illusory and work to find the
stories that create a narrative around events. Part of a facilitator's role
during post-incident reviews is to help build this narrative. To do so, we must
avoid a number of out-dated plot devices, if you will, that continue to promote
the illusion of control and prevent real learning.

We'll refer to these plot devices as agents of control because their use
actively perpetuates the notion that we are in complete control. The primary
reasons these agents of control have persisted for so long is that they offer
a simple premise: because we are in complete control any failure that occurs
must be due to a lack of control somewhere. Therefore, all we have to do is
locate where control was lost, correct it, and carry on. Never mind that this
premise contradicts the illusion that we are in complete control.

The following agents exist to maintain our belief in complete control and should
be avoided by post-incident review facilitators.

### Root Cause

Put simply, there is no root cause. For such a simple statement, I've found it's
very difficult for many to accept. A "root cause" seems to make sense, initially,
because at its core it offers a simple solution to how we can describe how we
came to experience an event like an outage. The irony is that if we accept our
systems are complex, how can we expect to describe them, and their behavior, in
simple terms? **In order to maximize the value we can extract from a post-incident
review we must carefully consider the language we use to frame the conversations
and discussions that are part of that review.**

Why, then, do folks continue to believe in, and search for, a root cause? I
think Hollnagel helps to clarify the attraction of a root cause:

<blockquote>
The qualities of a 'good' cause are (1) that it conforms to the current norms
for explanations, (2) that it can be associated unequivocally with a known
structure, function,  or activity (involving people, components, procedures,
etc) of the system where the accident happened, so (3) that it is possible to do
something about it with an acceptable or affordable investment of time and
effort.
<footer>
Erik Hollnagel, <cite>The ETTO Principle</cite>
</footer>
</blockquote>

To contextualize his points I would say that the term "root cause" persists as an
explanatory tool because (1) it's how we've sought answers for quite some time, (2)
that it reinforces the belief that we completely understand our systems and
their behavior, and (3) we feel we can mitigate future issues in cheap (as in
money or time) and simple ways.

The term "triggering cause" is a softening of the idea of a root cause.
Generally, it captures the belief that all the dominoes were already set up,
waiting for a well-placed nudge to set off a collapse. It's an improvement over
the notion of a root cause, albeit a superficial one. It breaks down under
scrutiny, however.  Taking the domino metaphor a bit further, it assumes that
our systems are set up to fail in the first place and that they are extremely
easy to destroy. Our experiences tell us this isn't true; we don't purposely
build our systems to fall apart at the slightest touch. Rather, we build in
multiple defenses to keep them running. And when our systems do fail, more often
than not an operator aids in recovery or better yet, prevents worse failure.
Importantly, implicit in the idea of a triggering cause is that we have a
complete, and shared, mental model of our systems such that we can easily
express how a failure progressed neatly from beginning to end. Reality is much
messier than that.

In truth any number of factors contribute to an event. Those factors include the
presence of the system; how it operates; how known failure conditions may occur
and are mitigated; when human expertise is needed; when human expertise is
inadequate to address an issue (or missing entirely). This is sampling of many
possible types of factors. Many more likely exist. What's important, though is
that **none of them are a root cause** and an **incident can only occur when
multiple factors occur at the same time**. In "How Complex Systems Fail"
Richard Cook states this simply as:

<blockquote>
Each of these [factors] is necessary to cause catastrophe but only the
combination is sufficient to permit failure."
<footer>
Richard I. Cook, <cite>How Complex Systems Fail</cite>
</footer>
</blockquote>

The "root cause" is probably the most persistent agent of control because it
furthers the belief that if we can just find that thing that caused us to lose
control, we can prevent it in the future.
### Blame

<blockquote>
Blame is simply the discharging of pain and discomfort.
<footer>
Dr. Brene Brown, <cite>Daring Greatly</cite>
</footer>
</blockquote>

An insidious agent of control is blame. What could be easier than pointing the
finger at an individual (or group) that was "out of control" before or during an
event? Blame is a product of the anxiety we feel at the creeping reality that
we're **not** in control. Find the bad apple, eliminate it, and your troubles
disappear. The utility of this agent is extremely limited but its use can
go on forever (at least as long as there are people around to blame).

The reality is that because we are an intrinsic part of the systems we use and
operate, the fact that we're even able to do the things we can do with and
within these systems warrants scrutiny. Was an outage influenced by an engineer
mistyping a command? Sure, partly. How was it possible that engineer was able
to perform that work? What gave that person the confidence it was the correct
action? Were there other factors (time pressure, sleep deprivation from being
on-call/having sick kids) that contributed to, or detracted from, the person's
attention? What are the ways in which our systems help people bring attention to
high-risk actions?

Our systems are complex and changing all the time; it an be overwhelming to
keep up with them. When outages occur, they can be distressing, bewildering,
chaotic. Blaming people for their actions (or lack thereof) masks an opportunity
to learn what factors contribute to an outcome because we fixate on the idea
that they should be in control. If they're not in control, they pose a risk to
our ability to maintain complete control.

An outcome of blame is that it encourages people to not discuss what they know
for fear that any level of association with an event will mark them as possible
targets of blame. This stunts our ability to learn from our experts.

### Hindsight

<blockquote>
Hindsight bias makes surprises vanish.
<footer>
Daniel Kahneman
</footer>
</blockquote>

In other words, knowing the outcome gives us confidence we know how to resolve
the issue. It limits what we may learn because it presupposes all the conditions
and actions that lead up to an event occurring. Things are neat and orderly,
naturally. By contrast, when we recognize that many contributing factors are
necessary for an event to occur, we see those factors as partially flowing
linearly (often in parallel) and partially converging, intersecting, and
diverging at different points along a timeline.

Hindsight, as an agent of control, reinforces the belief that we can know our
systems fully, especially because we exist outside of them. After all, if we
created a system, how can we not know it absolutely? The reality is that the
system changes with us moving along with it. And the experiences of the people
interacting with the system differ in large degrees often because they do not
(likely cannot) share the same mental model of it.

<blockquote>
"The surprise event challenges the model and triggers learning and model
revision..."
<footer>
Gary Klein, <cite>Sources of Power</cite>
</footer>
</blockquote>

The quote above, taken from "Sources of Power" is related to how experts make
decisions in high-consequence situations, specifically when presented with
information that runs counter to past experiences or a mental model of what is
occurring. He is describing how people adapt to the new information to make
decisions. If we allow hindsight to guide a review, we will miss asking
questions that help us elicit how decisions were made, what context they are
made within, and how they contributed to an outage and its resolution.

## Conclusion

Post-incident reviews hold a lot of promise for helping us learn from failure.
If we put in the effort to develop the practice of facilitation, we will learn
there are a number of approaches we should avoid so that we can collectively
develop our expertise. After all:

<blockquote>
Recognizing hazard and successfully manipulating system operations to remain
inside the tolerable performance boundaries requires intimate contact with
failure.
<footer>
Richard I. Cook, <cite>How Complex Systems Fail</cite>
</footer>
</blockquote>

And, more importantly, recognizing that we are an integral part of our systems
and the larger environment may yet lead us to a different ideal than control:
mastery.

<blockquote>
[M]astery has less to do with pushing leverage points than it does with
strategically, profoundly, madly, letting go and dancing with the system."
<footer>
Donella H. Meadows, <cite>Thinking in Systems</cite>
</footer>
</blockquote>
