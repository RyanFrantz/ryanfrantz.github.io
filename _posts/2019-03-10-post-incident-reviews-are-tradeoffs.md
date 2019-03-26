---
layout: post
title: How Facilitating Post-Incident Reviews Shapes the Story
tags: engineering, facilitation, human factors, learning, safety, systems
type: post
status: publish
published: true
---

<blockquote class="quote">
There were incidents and accidents,<br>

There were hints and allegations.<br><br>

Paul Simon, "You Can Call Me Al"
</blockquote>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Consider this: If you find your post-incident reviews are neither compelling nor helping your organization learn, it&#39;s very likely those reviews simply assemble facts rather than tell stories.<br><br>We learn best from, and are engaged more by, stories.</p>&mdash; Ryan Frantz (@Ryan_Frantz) <a href="https://twitter.com/Ryan_Frantz/status/1103293847113744389?ref_src=twsrc%5Etfw">March 6, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

NOTE: I think what I really want to discuss, in general, is how the reviews we
perform should be about finding the stories of an event and telling a larger
story that stitches them all together to form a narrative. I want this post to
discuss a number of plot devices, if you will, that should be avoided as they
detract from the stories we can tell and prevent deeper learning.

Future posts on facilitation as a means to developing expertise...

20190319
Facilitation is about finding the stories, writing them; Eliciting knowledge from experts. It's a form of cognitive task analysis. The stories help us learn more about our systems and how experts perceive and confront design/outages. We don't want outages to recur but preventing them isn't the sole goal. Learning how to adapt and design and teaching those skills leads to better systems. Form of resilience? Note that I am not certain we can quantify or correlate that this work leads to fewer outages, but that may be my ignorance. Knowing what I know now, I suspect trying to do so is the result of asking mis-guided questions. We should be searching for sources of expertise that help us adapt.

Blame - outage events can be overwhelming, uncomfortable, bewildering, distressing, chaotic. It's possible that people fell shame for choices they made before or during an event (i.e. in the heat of the moment). It's important not to let that stress guide us when trying to understand what happened. Walking into as facilitation event one can feel angry, anxious, nervous, depressed. Blaming people's action (or inaction) stunts any learning.

Root cause analysis: assumes a terminus (bring back analogy of searching for source of water for oceans?); local rationality

20190318
Surfacing expertise: how did we detect/resolve? What past decisions guided the current design?

Facilitation is an opportunity to write a story!

Add remediation section

I believe I understand why we latch on to remediation items: the experience if the outage is still so fresh and we want to avoid that pain in the future so it feels good and correct to "fix it". But the outcome will remain local unless we broadcast or socialize the events and it's factors. Remediation should continue but it is not the primary goal.

Klein's "Sources of Power" is compelling because it contains stories.

--

... move "why i facilitate" to the top

http://127.0.0.1:4000/posts/operations-is-storytelling.html

NOTE: As a facilitator you are in a unique position to help shape a story from
which others can understand an event and likely to learn new ways to cope with
similar situations in the future. I'm not saying mitigation/prevention; i'm
saying developing expertise that helps you, as part of a larger socio-technical
system, respond to events. In other words, this expertise can be viewed as a
form of resilience (Woods on Four Concepts for Resilience; graceful extensibility?)
Aids in rebound as resilience (?) as it develops capacities *before* a possible
repeat of an event.

"The surprise event challenges the model and triggers learning and model
revision..."

developing the expertise is partly about capturing the patterns seen, in aid of
RPD (Klein)

describe my goals for facilitation such as exposing/discovering expertise,
decision-making (local rationality), how this all helps us to learn.

then present the rest of the sections describing how they **inhibit** learning.

In developing a practice of post-incident review facilitation within my corner
of Bloomberg Engineering, I often spend a few minutes at the beginning of each
session to discuss some topics that are important and prime participants for what
to expect. During a review, as needed, I'll remind participants of these ideas
to help them think about events in new ways that hopefully lead to good
discoveries and valuable insights about how we design, build, and operate our
systems. In this post I explore these ideas.

Post-incident reviews are a tradeoff between efficiency and thoroughness. One of
my goals for reviews is to get better at when we trade off one for the other.
If we reflect on the expected outcomes from a review, we may be able to better
discern this trade-off and make improvements. For example, if a goal is to make
sure "this doesn't happen again", we'll tend to see a pile of remediation
tickets as progress and a root cause as a sufficient explanation for an
accident. However, if a goal is to learn from an incident, especially with the
intent to spread knowledge and awareness of the details surrounding an event,
we will uncover more context about events, better socialize beliefs,
expectations, and mores, **and** support latent learning that may manifest in
future work.

## Root Cause

Put simply, there is no root cause. For such a simple statement, I've found it's
very difficult for many to accept. A "root cause" seems to make sense, initially,
because at it's core it offers a simple solution to how we can describe how we
came to experience an event like an outage. The irony is that if we accept our
systems are complex, how can we expect to describe them, and their behavior, in
simple terms? **In order to maximize the value we can extract from a post-incident
review we must carefully consider the language we use to frame the conversations
and discussions that are part of that review.**

Why, then, do folks continue to believe in, and search for, a root cause? I
think Hollnagel helps to clarify the attraction of a root cause:

<blockquote class="quote">
The qualities of a 'good' cause are (1) that it conforms to the current norms
for explanations, (2) that it can be associated unequivocally with a known
structure, function,  or activity (involving people, components, procedures,
etc) of the system where the accident happened, so (3) that it is possible to do
something about it with an acceptable or affordable investment of time and
effort.
<br><br>
Erik Hollnagel, "The ETTO Principle"
</blockquote>

To contextualize his points I would say that the term "root cause" persists as an
explanatory tool because (1) it's how we've sought answers for quite some time, (2)
that it reinforces the belief that we completely understand our systems and
their behavior, and (3) we feel we can mitigate future issues in cheap (as in
money or time) and simple ways.

The term "triggering cause" is a softening of the idea of a root cause.
Generally, it captures the belief that all the dominoes were already set up,
waiting for a well-placed nudge to set off a collapse. It's an improvement over
the notion of a root cause, albeit a superficial one. It break down under
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

<blockquote class="quote">
Each of these [factors] is necessary to cause catastrophe but only the
combination is sufficient to permit failure."<br>
<br>
Richard I. Cook, "How Complex Systems Fail"
</blockquote>

## Blame

<blockquote class="quote">
Blame is simply the discharging of pain and discomfort.<br>
<br>
Dr. Brene Brown, "Daring Greatly"
</blockquote>

<blockquote class="quote">
Vulnerability is at the heart of the feedback process.<br>
<br>
Dr. Brene Brown, "Daring Greatly"
</blockquote>

## Hindsight

<blockquote class="quote">
Hindsight bias makes surprises vanish.<br>
<br>
Daniel Kahneman
</blockquote>

In other words, knowing the outcome gives us confidence we know how to resolve
the issue. It limits what we may learn because it presupposes all the conditions
and actions that lead up to an even occurring. Things are neat and orderly...
By constrast, when we recognize that many contributing factors are necessary for
an event to occur, we see those factors as partially flowing linearally and
partially converging, intersecting, and diverging at different points long a time
line...

Local rationality...


## Your Role as a Facilitator

I facilitate post-incident reviews for several reasons:

* To improve my practice.
* To share ideas and encourage my peers to think differently about events.
* To learn more about the environment, systems, and people around me.

<blockquote class="quote">
[M]astery has less to do with pushing leverage points than it does with
strategically, profoundly, madly, letting go and dancing with the system."
<br><br>
Donella H. Meadows, "Thinking in Systems"
</blockquote>

<blockquote class="quote">
Recognizing hazard and successfully manipulating system operations to remain
inside the tolerable performance boundaries requires intimate contact with
failure.<br><br>
Richard I. Cook, "How Complex Systems Fail"
</blockquote>

^^^ supporting quote for teaching/learning from failure when we cannot be as
close to it as we'd like to gain that critical experience.

