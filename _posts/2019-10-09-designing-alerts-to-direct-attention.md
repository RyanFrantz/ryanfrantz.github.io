---
layout: post
title: Designing Alerts to Direct Attention
tags: alerts, cognitive systems engineering, design, learning, systems
type: post
status: publish
published: true
---

## Joint Cognitive Systems

Many of the alerts our monitoring systems send us are primitive capture events.
They lack useful context that can help quickly and accurately orient and direct
the attention of on-call engineers. The poor quality of these alerts exacerbates
the sense that we are increasingly overwhelmed by the complexity of our systems,
unable to effectively respond to events.

Complexity in our systems is a natural outcome of generative processes throughout
the life of the software we write and use. It emerges as our systems grow.
Instinctually, we seek to simplify their operations and maintenance but, there
is a better strategy: **embracing the reality that complexity is normal and
developing solutions to help engineers cope with it**.

Since the earliest computing devices, we have been driven to create systems that
aid us in our work; to make tasks easier or faster to accomplish. This is good
and reasonable but if we limit ourselves to this a goal we miss opportunities
in our designs that can take us further. It is not enough to view computers as
tools that help us get work done. We must imagine them as teammates actively
participating, with us, to achieve our goals. In cognitive systems engineering,
this relationship is referred to as a **joint cognitive system**, "a whole
comprising people and technology acting together." (Hollnagel)

Traditional attempts to describe our systems decompose them into discrete
elements with distinct boundaries in order to reason about them. Those boundaries
are arbitrary and negotiable. They are negotiable because each of us has
differences in our mental models of the systems shaped by our experiences
interacting with them. Those experiences impact the decsions we make about how
we develop software and those decisions, in turn, both reflect and influence the
shape of the system. In other words, our work is performed within joint
cognitive systems where humans and computers cooperate with each other.

Therefore, we can, and should, design our alerts so that when computers generate
them, the experience is more cooperative and helps direct our attention in
meaningful ways.

## Attention and Executive Functions

It would be useful to have a shared definition for "attention" before proceeding,
but a basic search yields a number of them:

<blockquote class="quote">
The act or state of applying the mind to something - Merriam-Webster
</blockquote>

<blockquote class="quote">
The concentration of awareness on some phenomenon to the exclusion of other
stimuli - Encyclopedia Britannica
</blockquote>

<blockquote class="quote">
The behavioral and cognitive process of selectively concentrating on a discrete
aspect of information... while ignoring other perceivable information. - Wikipedia
</blockquote>

One can find many references to different types of attention as well, such as
"divided", "sustained", "selective", "executive", and "alternating". Further,
attention may be defined by the lack of it or it being available in a
diminished capacity, such as in ADHD diagnoses. The point, here, is there does
not seem to be a clear, agreed upon definition of attention. In fact, its
definition has been in flux for the last several centuries.

To facilitate this topic, though, let's agree to the definition of **directed
attention** offered by Woods in "The Alarm Problem and Directed Attention in
Dynamic Fault Management":

<blockquote class="quote">
...a cognitive function that inherently involves the coordination of multiple
agents through the use of external media.
</blockquote>

In researching attention, executive functions show up as important components of
cognition. Executive functions "are a set of processes that all have to do with
managing oneself and one’s resources in order to achieve a goal. It is an
umbrella term for the neurologically-based skills involving mental control and
self-regulation." (Joyce Cooper-Kahn, Ph.D and Laurie Dietzel, Ph. D)

Eight executive functions have been identified:

* Inhibition
* Shift
* Emotional Control
* Initiation
* Working Memory
* Planning/Organization
* Organization of Materials
* Self-Monitoring

Each function has a clear definition -- contrary to attention -- that feels
tangible. It is this accessibility and the knowledge that they combine to aid
mental control that makes understanding them important for achieving our goal in
designing alerts: **directing attention**. Crucially, applying this knowledge
empowers us to develop coherent **joint cognitive systems** where computers
are viewed as "'equal' partners" (Hollnagel) working toward a shared outcome.

When we write alerts, we often do not account for _whether_ it makes sense to
take attention in the first place; it's implicit that we will. Given that, it's
imperative that we begin to consider _how_ we should direct that attention once
we have it. For this consideration we'll focus on four of these functions:
shift, initiation, working memory, and planning/organization.

### Shift

<blockquote class="quote">
The ability to move freely from one situation to another and to think flexibly
in order to respond appropriately to the situation.
</blockquote>

When you receive an alert, where is your focus? What are you attending to?
Writing code? Thinking through an architecture design? Sleep? **You certainly
aren’t waiting for the alert.**

If an alert requires your attention, it should include information -- text,
visuals, audio (if appropriate) -- that helps you mentally move from what you
were doing to addressing the alert. Just as important, though less often
described, that information may also help you determine that you do **not** need
to give an alert your attention or, perhaps, that action can be delayed.

This context supports a joint cognitive system property called **preattentive
reference** that "includes partial information on what the attention directing
signal is referring to, so that the observer can pick up **whether the interrupt
signal warrants a shift in attention**." (Woods; emphasis mine)

### Initiation

<blockquote class="quote">
The ability to begin a task or activity and to independently generate ideas,
responses, or problem-solving strategies.
</blockquote>

It can be difficult to get started, especially when you are moving in another
direction or standing still. When you get woken up at 3AM you need all the help
you can get to initiate a response. Clear, direct information about what has
happened and **why it matters** will jumpstart the process to address an alert.
A lack of information delays the response, or worse, leaves open so many
possible avenues that time is wasted on ineffective action.

### Working Memory

<blockquote class="quote">
The capacity to hold information in mind for the purpose of completing a task.
</blockquote>

Humans are not computers but we do have a similar mechanism for storing
information: working memory. The information available at hand when an alert
interrupts you either supports your response or is irrelevant. The context of an
alert must provide an engineer with enough information to address the interrupt.
The little bit of detail available in most alerts will push aside part of a
responder's working memory; if we're going to flush that cache, we need to make
that process as efficient as possible by including relevant information.

### Planning/Organization

<blockquote class="quote">
The ability to manage current and future-oriented task demands.
</blockquote>

"[O]perators must build and maintain a coherent situation assessment in
a changing environment." (Woods) A single alert provides a limited view of the
system and its operations. Engineers will want to step up and out of that view
as part of the process of planning which actions to take to address an alert.
They will need to organize their thoughts by looking around at the encompassing
environment.

The more familiar an engineer is with a given alert, the more likely they have a
prepared plan. Information in the alert may help adjust that plan. For others,
especially engineers new to a team or on-call rotation, aiding planning and
organization is even more critical.

## Alert Design

Hollnagel - "CSE maintains the view of design is 'telling stories about the future'".
One of the strengths of software is that it is forever malleable! We can make
updates at any time! Discuss Meadows and feedback here.

Meadows on systems (stocks, flows, feedback); how we're dissastisfied with our
monitoring systems because they do not have feedback and are, by definition,
incomplete systems. Feedback is part of the design process. Design is never
complete in software, just like the software itself is never "done".

Runbooks; next steps to consider (working memory)

Links to dashboards, graphs used in alert; other tools like Honeycomb, user forums!
(Planning/org)

## Don't Forget

Hollnagel - "...the hallmark of a well-designed system is that it improves the
ability to maintain control of a situation, which required a complex measure.
