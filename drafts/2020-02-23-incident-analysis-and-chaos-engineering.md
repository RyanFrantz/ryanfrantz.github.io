---
layout: post
title: Incident Analysis and Chaos Engineering
tags: accidents, analysis, incidents
type: post
status: publish
published: true
---

Learning from failure is extremely useful. How we choose to approach learning,
and which failures we want to focus on, may not be so clear. Two common avenues
are incident analysis and chaos engineering. I've heard folks discuss each of
these in opposition to each other; that is, believing one to be superior to the
other in elucidating the important details that organizations can apply to build
more robust solutions or improve their response activity. The reality, however,
is that incident analysis is broader in scope, in general, and may be useful in
directing and designing chaos experiments, in particular.

## Incident Analysis

High-quality incident analysis takes time.
[How much time they require is always a debate](/posts/when-does-an-investigation-end.html),
but suffice it to say that time-boxing ourselves to a few hours or constraining
investigations to filling out a template does not result in high-quality
analyses. To identify markers of quality in our analyses, it helps to define why
we perform investigations in the first place. At a high level, I've observed
three outcomes associated with incident analyses that govern their perceived
value.

### Pushing Paper

Maybe it's company policy to write an after-action review. Perhaps your
organization must produce reports as part of regulatory requirements or
fiduciary responsibility. Given this framing, incident analyses will be written
to be filed, not read. <sup>[1](#fn1)</sup> At this level, organizations may
leave a lot of useful information ungathered, favoring compliance over critical
inspection of events that are uniquely situated to teach them.

In these cases, the value of analyses is largely superficial: it's part of a
process to generate a papertrail. It's a bureaucratic CYA procedure.

### Technical Teaching

The API fell over as requests stacked up during a database transaction ID
wraparound event. Your analysis takes this opportunity to provide useful details
that fill in technical gaps in people's understanding of the architecture that
powers your product. This is a good thing. Using an incident to update relevant
documentation and procedures is appropriate; it's how we build our systems to be
robust in the face of past, known conditions.

At this level of incident analysis is an acknowledgement that we can't all
possibly know everything. The value of analyses seems tangible and immediate.
We're seeing failure as the chance to fill in some blanks, refresh ourselves,
and possibly refine our work. Still, there is even more to glean from our
incidents.

### Surfacing Surprise

At the "Technical Teaching" level of analyses, the notion of a "system" tends to
be understood as some set of discrete components that humans operate from a
distance, wholly separate from it. We believe we are
[in control](/posts/control-is-an-illusion.html) of these systems. In fact, a
common theme across incidents is that something, somewhere, was
[surprising](https://snafucatchers.github.io/#3_4_2_Surprise). Surprise is borne
from the events of an incident constrasting with the mental model of one or more
people. If we delve into those surprises, we may be able to identify where those
mental models and reality diverge. There are powerful lessons to be learned here.

> "The surprise event challenges the model and triggers learning and model
revision..."
> <br><br>
> Gary Klein, "Sources of Power"

Beyond the specific details of an incident, there are likely other interesting
surprises including tension between business goals and procedure (especially
safety procedures) and differences between
[work-as-imagined and work-as-done](https://humanisticsystems.com/2016/12/05/the-varieties-of-human-work/).
Here, organizations stand to gain from deep insights about the nature of their
work that they can use to make positive improvements such as implementing new
response tactics or enhancing procedures to take advantage of efficiencies
developed as workarounds to under-specified tasks.

## Chaos Engineering

Chaos Engineering has a lot of attention in software right now and rightly so.
As software engineering matures, it makes sense that we adopt practices from
other disciplines. To my mind, chaos engineering embodies the same ethos as
crash-testing cars. A product is designed to display specific characteristics
and behave in expected ways; we then define an experiment to confirm or falsify
those properties. If confirmed, we gain confidence in its operation. If false,
we use what we've learned to make adjustments to the product.

As far as learning from failure is concerned, chaos engineering experiments
provide a similar value as do the sorts of incident analyses that provide
[technical teachings](#technical-teaching) because the results are tangible and
immediate. Chaos experiments provide a sense of control. They are narrowly
scoped and the deliverable is clear.

In a few years, I suspect that chaos engineering will become a regular practice
in software engineering, much like writing unit tests. In other words, it will
be seen less as a hot new idea and more of a normal part of rigorous engineering.

## Incident Analysis or Chaos Engineering

In terms of deciding how to make better use of time and people as part of a
learning-from-failure mindset, it would certainly seem like focusing on chaos
engineering is more efficient than deeply analyzing incidents. And this is
understandable; incidents are big and scary, with unknown contours. Chaos
experiments include the comfort of constrained variables and the certainty of
science!

Unfortunately, framing this conversation as an either/or proposition sets up a
false dichotomy -- one that attempts to establish greater value of one over the
other. Even attempting to frame the conversation as which is more efficient in
achieving learning from failure misses the mark.

### Recouping our Investments

Experiments are not executed for their own sake. We run them because we are
looking for tangible and immediate results. How do we decide which to run?
Further, how do we prioritize one over another? From where do we get the
motivation to create them? The answer, simply, is **past incidents**.

The folks at [Adaptive Capacity Labs](https://www.adaptivecapacitylabs.com/)
have this to say about incidents:

> Incidents are unplanned investments, and ... [y]our challenge is to maximize
the ROI...

Incidents, therefore, inherently have value. Failures we have experienced direct
our attention to areas that warrant further inspection including, possibly, via
chaos experiments. A high-quality incident analysis will yield useful insights,
including pointing to areas where an organization can focus to learn more.

**If an incident is an investment, the direction and ideas for chaos experiments
derived from its analysis are one way we can recoup our costs.**

Imagine looking across a history of incidents -- what patterns might we see that
could further inform which experiments to run? The combined insights of multiple
analyses, then, would make it possible for an organization to design more
targeted exercises, thereby extracting greater value.

In other words, through incident analysis, we can develop well-targeted chaos
experiments that help us maximize the returns on our incidents-as-investments.
This is how we should assess incident analysis. It is never about a report or
correctly identifying a failing component -- it is always about surfacing useful
context that directs our attention in meaningful ways.

## A Vision for the Future

In 1995 Boeing set out to test the wing deflection of their 777 airplane. The
test subjected the wings to stresses well beyond what it was expected to
encounter in operation. The test was designed to find the wings' literal
breaking point. And they did, spectacularly, as seen in this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ai2HmvAXcU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I have a vision for the future of software engineering: **every organization
will know the value of incident analysis and that knowledge will be expressed in 
day-to-day work like it was for Boeing during this test 25 years ago**.

Certainly, Boeing did not lightly decide to build a **multi-million dollar**
vehicle simply to break it. It took much more to motivate a company as massive
as Boeing to expend the time, energy, people, and, notably, serious money to
design and build the experiment, the plane, and the test rig required to see
this through. They **deliberately chose to build a plane and snap its wings**.
That choice was driven by what they and the rest of the aviation industry has
been learning from **analyzing incidents**.

Our job now, then, as software engineers, managers, or investigators is to get
develop the skills necessary to analyze our incidents and draw out the deep
insights they expose. Sometimes those insights will lead to wing-snapping
experiments; sometimes they'll be less exciting. And they will all be extremely
valuable in pushing the state of the art forward.

## Footnotes

<a name="fn1"></a>
[1] See the "Challenges to Making Progress" section in [John Allspaw's](https://twitter.com/allspaw) presentation
[People Are The Adaptable Element of Complex Systems](https://2019.leanagile.scot/sites/2019.leanagile.scot/files/resources/LAS%202019%20Allspaw.pdf) From Lean Agile Scotland 2019.
