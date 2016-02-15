---
layout: post
title: Systems Thinking in Practice
tags: 
type: post
status: publish
published: true
---

<a name="return_from_footnote_1"></a>
I recently finished reading Donella H. Meadows' [Thinking in Systems](http://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557). [[1]](#footnote_1)

I really enjoyed this book. While I thought that I approached my work as an
engineer holistically, Meadows' introduction to systems thinking filled in many
gaps.

After an examination of what systems are (at the basic level: stocks, flows, and
feedback loops), how they operate, and how small systems can be comprised
into larger systems, she enumerates a set of leverage points that can be used
to increase desirable behavior and decrease undesirable outcomes within
systems.

Meadows is very candid in stating that the presented list is neither authoritative
nor comprehensive. Nonetheless, she makes a strong case for them (and their
order of impact). Whenever I learn something new, I find I can internalize the
content better if I can find a way to apply it in some tangible fashion.

So it is that I found myself reflecting on Meadow's leverage points and trying
to find corollaries within my areas of expertise. What follows
is Meadows' list of leverage points outfitted with those my ideas of where or how
they can be applied to software development and web operations.

## Leverage Points

Meadows presented her leverage points in ascending order, from least impactful
to most. I will do the same.

**NOTE**: In no way is the list of ideas below either authoritative or
comprehensive.

### 12. Numbers

These are values that can be easily changed and typically produce some immediate
and short-term effect in a system. The sorts of knobs that came to mind were
**feature flags**, **Apache worker count**, **node weights in a load balancer**.

### 11. Buffers

In Meadows' book, buffers refer to "the size of stocks relative to their flows[.]"
Honestly, of all the leverage points, this one is the most immediately understood
and applied. We use some form of memory/storage to contain objects that are
frequently requested in tools such as **memcache** and **Varnish**. Our network
interfaces buffer traffic so that it can be processed in more efficient batches
rather than one-by-one. An interesting lever we have, with respect to caches,
is the **TTL**. We can persist objects in a cache for as long as we need. That,
in tandem with the available storage within a cache, controls how our buffers behave.

### 10. Stock-and-Flow Structures

Here, we are concerned with the existence and availability of the physical components
that comprise our systems. Outside of computing, Meadows' statement that
"changing [them] is rarely quick or simple" is very likely true (i.e. house
plumbing, highway infrastructure). In web operations, the high accessibiliy of computing
resources in the form of cloud services make spinning up web infrastructure near
instanteneous.

### 9. Delays

"Delays in feedback loops are critical determinants of system behavior." When I
consider what we have and use as feedback loops to operate our systems, I think
of the metric collection and display tools we use; the monitoring tools we use to
gauge system and service health. I see possible delays in the chosen polling
frequency of these tools and in the confidence we have that they are doing their jobs,
helping us build mental models of what is happening.

Top-down management came to mind as well. Such a structure doesn't move as fast,
in terms of making decisions, as does a group of engineers at the edges. Dekker
would refer to the latter group of practioners as being on the "sharp end" where
they have more immediate impact. Part of that impact is governed by the fact
that they will quickly receive and act on the consequences of the decisions they
make.

I also imagined a delay in the time it takes new technology to be introduced, to
the time it is adopted in an organization, to the point at which that organization
operates the technology with some degree of (agreed upon) confidence.

### 8. Balancing Feedback Loops

The role of the balancing feedback loop is to aid the system in self-correcting.
Self-correction can mean many different things, given the context in which such
a loop exists. Says Meadows, "[t]he strength of a balancing feedback loop is
important relative to the impact it is designed to correct." This is where we
build (sometimes discover) resilience in our systems.

For example, rather than present a user with an HTTP 404 response for a failed
request, can we instead provide a degraded experience, directing them somewhere
else in the meantime? If traffic volume is exceeding typical demand, can we
allocate additional capacity, even temporarily?

### 7. Reinforcing Feedback Loops

These feedback loops are self-reinforcing, meaning that the more they succeed,
the better able they are to continue succeeding. The "snowball effect" comes to mind.

From a technical standpoint, I considered negative feedback loops, such as when
one or more web requests contribute to resource starvation. In a finite system,
if requests take a long time to complete, increasing the number of requests means
the system as a whole takes longer to respond. As more requests come in and are not
satisfied in a timely manner, they too contribute to resource starvation. IP ports
can be tied up; database connection limits can be exhausted.

An example of a positive reinforcing loop would be one where the marketing team
starts a campaign for a product or website. As more people enjoy their experience
and talk to each other about it, others join in, talking to still more people
until the demand for a product or service is growing exponentially.

### 6. Information Flows

Meadows describes this leverage point as being about access to information. That
is, who does and does not have that access and what that means for the operation
of the system. We don't know what we don't know so I it's safe to say that our
general awareness of available information has just as much impact.

For example, one can collect many metrics and curate many dashboards to surface
the behavior of a system. But it is always possible that there is some thing
that is not being watched, that contributes to system failure. All that can be
done is to perform a review, learn from the things that surprised us, and update
our metrics collection/monitoring.

I recall a presentation several years ago from an engineer at Google that
described a scenario where a new feature was released and it passed all the
written tests for the code. The feature made a change to images on a page
so that they were transparent. The tests confirmed that an image was **present**
but not that it was **visible**! It took humans to analyze the issue to find the
problem. As a result, they wrote a tool to perform a "visual diff" before and
after code deploys.

In a similar vein, listening to users in forums is just as important as the
data visible in a dashboard. Oftern times, understanding how problems are
manifesting for users is useful in diagosing a problem.

### 5. Rules - Incentives, Punishments, Constraints

Truly, Meadows' frames this lever succintly: "The rules of the system define
its scope, its boundaries, its degrees of freedom."

How do we deliver features to our site? Are they large, infrequent chunks? Or
small, frequent, easier-to-reason-about changes?

How do we address failures in a system? Do we find someone to blame for
making a mistake? Or do we try to understand the context of an event
and learn how it is that the system allowed the event to take place?

What contrains us? Physical hardware? Network bandwidth? Service-level
agreements? Contractual obligations?

### 4. Self-organization

Self-organization allows a system to evolve, to change with its environment. This
is immediately applicable in the realm of software development and web operations.
We can move very quickly, in most cases, responding to changes in demand, creating
new products and services faster than anything in the physical world. We can adapt
and, importantly, repair, very quickly.

Meadows calls self-organization the "strongest form of system resilience."

### 3. Goals

Goals are more important than any other leverage point that has thus been defined
below this point. A system's purpose for being, the direction it intends to move in
governs everything else, including how information flows, what the rules, incentives,
and punishments are, and how (even if) the system self-organizes.

What product or service do you want to build? What market segment/demand does it
satisfy? Why build this thing rather than do some other type of work?

Does it matter that code/servers can be delivered fast and easy? Or is slow and steady
more important?

Does management do everything it can to make it easier for engineers to do their work?
Or does management need to be consulted for approval for everything?

In short, you will get out of the system what you put into designing and adhering
to its goals.

### 2. Paradigms

Meadows' describes paradigms as "shared idea[s] in the minds of society[.]" These
ideas and beliefs are part of what shapes the goals we set for our systems. I can't
help but think about open source software and human factors.

"Paradigms are the sources of systems."

#### Open Source Software

If you believe in the value of open source software, as I do, it is because you
believe in (at least) the following:

* Code that be be broadly useful **should** be open and free to modify.
* Those that use, and especially benefit from, open source software, are
encouraged to contribute any useful changes they make back to the community so
still more may benefit.
* Sharing code and ideas, leads to even more sharing (hello, reinforcing feedback
loop), thereby accelerating the general advancement of the community. New entrants
to the community gain the benefits, and advantage, of the accumulated knowledge
and experience of past and current practioners.

#### Human Factors

The New View of human factors challenges the tradionally held (i.e. Old View)
notion of bad/incompetent actors that misbehave within a system, causing failure. Rather than
assume we can know everything, given the luxury of being outside an event, and
that people simply can't work within the parameters of a well-designed system,
the New View of human factors takes the approach that we need to try and understand
an operator's context during an event, their biases, prejudices,
training, and past experiences, before we can truly learn how a failure can occur
within the system as we think we understand it. Instead of blaming practioners
for errors in judgement or execution that doesn't follow the rules, the New View
strives to **learn** why and how things happened the way they did.

The New View is very much systems-level thinking: it steps outside event details
to understand the system's stocks, it's flows (input/output) and the interaction
of its various components.

### 1. Transcending Paradigms

I can point to nothing technical, managerial, nor organizational here. Here
Meadows espouses being open to learning new things, to change, to one's own
personal growth as we try to better understand, build, and operate the systems
around us. I can think of no better way to end than to quote Meadows directly:

    It is to "get" at a gut level the paradigm that there are paradigms,
    and to see that that itself is a paradigm, and to regard that whole
    realization as devastatingly funny.

## Final Thought

Toward the end of the book, Meadows began to touch on the fact that systems are
not cold, hard constructs, especially because they do not operate independently
of people. To that end, understanding them requires a degree of humility, a
desire to learn, and a realization that it's never as simple as pushing buttons
or pulling levers. There are many contexts we need to be comfortable with. In short,
building, understanding, and changing systems is part science and part art.

    [M]astery has less to do with pushing leverage points than it does
    with strategically, profoundly, madly, letting go and dancing with
    the system.

That is beautiful to me.

## Footnotes

<a name="footnote_1"></a>
[1] Thanks to [@mrtazz](https://twitter.com/mrtazz), [@stack72](https://twitter.com/stack72),
and [@kAnderson610](https://twitter.com/kAnderson610) for the recommendation. [Return](#return_from_footnote_1)
