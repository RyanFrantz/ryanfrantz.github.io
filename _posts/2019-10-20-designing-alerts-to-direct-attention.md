---
layout: post
title: Designing Alerts to Direct Attention
tags:
  - Alert Design
  - Cognitive Systems Engineering
  - Systems Design
  - Learning
  - Systems Thinking
type: post
status: publish
published: true
---

## Joint Cognitive Systems

Many of the alerts monitoring systems send us are primitive capture events.
They lack useful context that can help quickly and accurately orient and direct
the attention of on-call engineers. The poor quality of these alerts exacerbates
the sense that we are increasingly overwhelmed by the complexity of our systems,
unable to effectively respond to events.

Complexity in systems is a natural outcome of generative processes throughout
the life of the software we write and use. It emerges as our systems grow.
Instinctually, we seek to simplify their operations and maintenance but, there
is a better strategy: **embracing the reality that complexity is normal and
developing solutions to help engineers cope with it**.

Since the earliest computing devices, we have been driven to create systems that
aid us in our work; to make tasks easier or faster to accomplish. This is good
and reasonable but if we limit ourselves to this idea we miss opportunities
in designs that can take us further. It is not enough to view computers as
tools that help us get work done. We must imagine them as teammates actively
participating -- with us -- to achieve our goals. In cognitive systems engineering,
this relationship is referred to as a **joint cognitive system**, "a whole
comprising people and technology acting together." (Hollnagel)

Traditional attempts to describe systems decompose them into discrete
elements with distinct boundaries in order to reason about them. Those boundaries
are arbitrary and negotiable because each of us has differences in our mental
models of the systems shaped by our experiences interacting with them. Those
experiences impact the decsions we make about how we develop software; and those
decisions, in turn, both reflect and influence the shape of the system. In other
words, our work is performed within joint cognitive systems where humans and
computers cooperate and influence each other.

Therefore, we can, and should, design alerts so that when computers generate
them, the experience is more cooperative and helps direct our attention in
meaningful ways.

## Attention and Executive Functions

It would be useful to have a shared definition for "attention" before proceeding,
but a basic search yields several. [[1]](#attention_defs) One can find many
references to different types of attention as well, such as "divided",
"sustained", "selective", "executive", and "alternating". Further, attention may
be defined by the lack of it or it being available in a diminished capacity,
such as in ADHD diagnoses. The point, here, is there does not seem to be a
clear, agreed upon definition of attention. In fact, its definition has been in
flux for the last several centuries.

To facilitate this topic, though, let's agree to the definition of **directed
attention** offered by Woods in "The Alarm Problem and Directed Attention in
Dynamic Fault Management":

<blockquote>
[A] cognitive function that inherently involves the coordination of multiple
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
**shift, initiation, working memory, and planning/organization**.

### Shift

<blockquote>
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

<blockquote>
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

<blockquote>
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

<blockquote>
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

Several years ago I wrote and released a tool called
[nagios-herald](https://codeascraft.com/2014/06/06/introducing-nagios-herald/).
The goal of the project was to contextualize alerts based on ideas I'd developed
with colleagues and throughout my career. Chiefly, was the notion that
[computers can, and should, do as much work as possible for us before they have
to wake us up](/posts/alert-design.html). Humbly I'll submit that it was a good
starting position to work on the problem of alert design. In retrospect, however,
the premise is adversarial; I viewed the computer as **separate** from me and
considered the work it could do as a decomposed part. **Now, I understand the
problem space as finding ways to collaborate with computers**.

To start, we must design alerts in service of the executive functions that
provide humans the mental control required to perform tasks.
Conveniently, the structure and context of alerts can support many of them
at the same time.  For example, consider a disk space alert that informs you
some volume has reached 90% of its capacity. If the alert includes a graph of
the capacity over some period of time (a day, a week) the shape of the graph
may provide enough information to support shifting attention and initiating
work. That is, if the graph indicates gradual growth over the period, an
engineer may decide action can be postponed. They are able to determine the
issue does not require immediate attention and may return to the task they were
performing before the interruption. Conversely, if the graph indicates a sharp
incline over the period (especially recently) they may decide to stop what
they're doing and address the issue. They can **shift** their attention fully.
The direction and velocity of the graph indicates that capacity may be exhausted
soon so they **initiate** a response immediately. Details, such as the potential
impact on one or more services (perhaps this host is half of a redundant pair or
one of many) become part of the engineer's **working memory**. Links to graphs,
dashboards, or useful inspection tools (i.e. Honeycomb) aid the engineer's
ability to look around the environment so that they may **plan** and
 **organize** the actions required to address the problem.

"[Cognitive systems engineering] maintains the view that design is 'telling
stories about the future'". (Hollnagel) Applied design reflects our current
ideas of what we expect the system to be. Computers will dutifully provide the
context we ask of them, and for a time, it will be good. Because we live and
work in dynamic environments, eventually things will change enough that our
initial designs no longer serve us. What then?

In her book [Thinking in Systems](/posts/systems-thinking-in-practice.html), 
Donella Meadows describes systems in the abstract illustrating how they have
stocks, flows, and feedback loops. Meadows states that balancing feedback loops
help systems behave consistently. Much in the way that humans benefit from
feedback, our alert systems can as well. In fact, I would argue that a large
part of peoples' dissatisfaction with monitoring systems is due to them not
received regular feedback of the sort that can improve their operation. Because
they lack this feedback, they are, by definition, incomplete systems.

Hollnagel says that "the hallmark of a well-designed system is that it improves
the ability to maintain control of a situation." When we support humans'
executive functions we aid their mental control so that they can more readily
respond to interruptions. And when we provide our computer co-agents feedback
that improves the alerts they generate, we strengthen the joint cognitive
systems we operate within, resulting in an enhanced ability to cope with
complexity.

## Footnotes

<a name="attention_defs"></a>
[1] There are several definitions for "attention" including, at least:

<blockquote>
The act or state of applying the mind to something
<footer>
Merriam-Webster
</footer>
</blockquote>

<blockquote>
The concentration of awareness on some phenomenon to the exclusion of other
stimuli
<footer>
Encyclopedia Britannica
</footer>
</blockquote>

<blockquote>
The behavioral and cognitive process of selectively concentrating on a discrete
aspect of information... while ignoring other perceivable information.
<footer>
Wikipedia
</footer>
</blockquote>
