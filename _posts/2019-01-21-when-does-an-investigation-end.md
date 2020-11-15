---
layout: post
title: When Does an Investigation End?
tags: [Engineering, "Human Factors", Learning, "Systems Thinking"]
type: post
status: publish
published: true
---

After an incident, it is common for an investigation to take place. The purpose
of an investigation may vary but one thing is for certain: it must end. We
will experience closure. We can take what we have learned and prevent similar
events in the future. Uncertainty is vanquished.

It's not that simple.

## Pressure

In between an incident and a report, valuable things risk being lost:
reputation, money, or worse, lives. How do we square this with a desire to learn
as much as possible from an event? In the best cases we work within an
organization and a culture that is mature, recognizes the value of thorough
evaluations, and allows folks at the sharp end of the work the flexibility to
determine the length of an investigation. In the more common case, we stop when
we find some "root cause" that fits a narrative or makes us feel (superficially)
confident that we've performed a complete analysis.

The reality is we make trade-offs because there are tangible pressures to do so.
We satisfice because we can never have complete information. That is, we "look[]
for a course of action that is satisfactory or 'good enough'." (Herb A. Simon)

## Investigation Heuristics

Often, to reach satisfaction, we rely on heuristics and other aids to guide our
investigations to completion. Interestingly, heuristics we may use to conduct
investigations can be found in the actions leading up to, during, and at the end
of an event.  Some examples are below.

### Anxiety
For the unpracticed or unfamiliar, anxiety can be the key driver that helps
determine how much time and effort we put into an investigation. Nietzsche, in
*Twilight of the Idols*, said it best:

<blockquote>
[T]o extract something familiar from something unknown relieves, comforts, and
satisfies us, besides giving us a feeling of power. With the unknown, one is
confronted with danger, discomfort, and care; the first instinct is to abolish
these painful states. First principle: <b>any explanation is better than none.</b>
Because it is fundamentally just our desire to be rid of an unpleasant
uncertainty, we are not very particular about how we get rid of it: <b>the first
interpretation that explains the unknown in familiar terms feels so good that
one "accepts it as true."</b>
</blockquote>

As soon as we find some answer that appears reasonable, or "fits", we stop.

### Templates

More of a formalized aid than a heuristic, it's common for organizations to
use templates to guide investigations. At first glance these may seem useful
because their structure is expected to be derived from the conclusions of past
accidents and they may offer a simple starting point for what to look for in an
investigation. However, their long-term benefit is questionable.

No two events are exactly alike. They may look similar but could involve
different people. It's certain that they took place in different times. How we
frame a question governs the answer we'll likely receive. Templates are a
convenience that, by design, ask a narrow set of specific questions. The answers
to those questions will not have the same value, content, or context as answers
gathered from an investigation that uses open-ended questioning.

In other words, templates are formulaic and encapsulate how folks [imagine
incidents occur rather than allow for deeper analysis of how they actually
unfold](https://www.adaptivecapacitylabs.com/blog/2018/11/05/incidents-as-we-imagine-them-versus-how-they-actually-are/).
They'll get you to an answer but it will be incomplete.

### Time-boxing

Akin to templates, time-boxing is an attempt to provide guidance for the amount
of time to spend on an investigation. The length of time might be defined by the
scope or severity of an incident. It could even be arbitrary. In the [report that
followed the emergency landing of Air Canada Flight 143](http://data2.collectionscanada.gc.ca/e/e444/e011083519.pdf)
the author describes the initial deadline assigned to the investigation:

<blockquote>
[T]he originating document required me to report within two months. This was
plainly impossible from the outset. I have no idea why this figure was chosen.
</blockquote>

That investigation took nearly two years.

Investigations could also be time-boxed based on the duration of past incidents.
Google, in trying to understand how much time SREs [spend on incidents](https://landing.google.com/sre/sre-book/chapters/being-on-call/)
had this to say:

<blockquote>
We've found that on average, dealing with the tasks involved in an on-call
incident—root-cause analysis, remediation, and follow-up activities like writing
a postmortem and fixing bugs—takes 6 hours.
</blockquote>

That's a lot of work to complete in a 6-hour period. To be certain, Google isn't
saying that SREs are limited to 6 hours for post-incident work. However, Google
states that it strives to limit SREs on-call effort to 25% of their time. The
distribution of time spent by Google's SREs is reviewed monthly. While the 25%
upper bound is aspirational and additional compensation is offered while on-call
, that compensation is also capped. I would not be surprised if there were cases
of investigations ended prematurely because of a negative incentive (i.e. the
compensation limit was reached).

## Koan

As with all complex topics, the answer to "When does an investigation end?" is
"it depends." And even that may not be valid. The study of influenza presents an
interesting case in this regard. The flu affects hundreds of thousands of folks
each year and in the past 120 years about a dozen pandemics have killed millions.
In studying those pandemics, scientists and researchers have been trying to
understand what factors and conditions give rise to such catastrophic events.
Several ideas exist but one stands out because the insight would not be possible
if it were not for the continued investigation of influenza. In [The 1918 influenza
pandemic: Lessons for 2009 and the future](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3180813/)
the authors describe one theory of a contributing factor to these  pandemics:

<blockquote>
[R]eappearances of H1, H2, and H3 (approximately every 68 yrs) are driven by
cycles of waning population immunity of approximately the same duration as the
mean human life span.
</blockquote>

The paper goes on to state that "[n]o obvious cyclic patterns have occurred over
the past three centuries[,]" but it's fascinating that given the temporal
distance from past events, someone looked at the data, saw a possible pattern
between the incidence of immune generations disappearing and pandemics,
and opened up a new line of inquiry. If epidemiology wasn't a thing and we only
investigated flu outbreaks in an isolated way, our potential understanding of
its behavior would be severely limited. One might argue that we'd be less
prepared for future outbreaks.
 
We've been investigating the flu for over a century and we don't have a concrete
answer (or set of answers) about why pandemics occur, but we're still looking.
And we're still learning.

## Maturity

How do we know it is time to conclude an investigation? What are the
consequences of ending an investigation early or later? The truth is, we can't
know for certain because we cannot predict the future. This means we have to get
comfortable with the notion that we can neither predict nor mitigate all
potential outcomes.

It also means we must be explicit about our trade-offs. If we truly believe that
we will learn from the things we report following an investigation we need to
leave our future selves bread crumbs. We must capture the context of our
investigations including our methods, pressures, constraints, and reasons for
concluding an investigation when we do.

Eventually, though, we must write our reports and show our findings. And this is
entirely reasonable. At some point we start to see diminishing (or slow-to-realize)
returns on our efforts. As long as we include a description of the reasoning
behind how we conduct and close an investigation, we can be more confident in
the conclusions we draw from the available information. Further, that context
can help define the borders of the investigation from which future inquiries can
begin to expand.

We can't have perfect knowledge. Can we vanquish uncertainty? Even given
temporal distance from an incident, does the lack of any new insight make us
more confident than we were about the knowledge we gained when the event was
fresh? Or have we just not yet gained a new insight that could challenge the
accepted knowledge? I think not. Uncertainty is everywhere, always and all the
time. We can certainly acknowledge that this makes us feel less in control than
we believe ourselves to be. We can admit uncertainty.

A side effect of this is that we can better recognize the importance of human
operators in the socio-technical systems we build and manage. [Safety is not the
absence of accidents. Safety is the presence of capacity.](https://www.nerc.com/pa/rrm/hp/2016_Human_Performance_Confrence/1%20-%20NERC_HP_TConklin.pdf)
I have even heard this as the presence of "expertise." People bring the
capacity or expertise required to keep our systems running. Therefore they can
bring the expertise required to understand how those systems can fail.

That expertise is expressed as a practice that is constantly developing through,
at a minimum, shared experiences such as the stories we can extract from
incidents. As software engineers we believe that the accidents we experience
have the same severity as those in other disciplines but we often have the
hubris to think we can mitigate our problems in contracted reviews.
I'm not saying we need to spend years on investigations but we could certainly
be a bit more thorough in our reporting.

If our primary goal during an investigation is to assuage our fears and anxiety,
to create remediation work, our practice's growth will be stunted in favor of
the short term satisfaction of finding any answer. On the other hand, if our
goal is to learn, and we embody this within the content of our incident reports,
our practice will mature, possibly reaching the level of older engineering
disciplines. Part of that maturity requires us to be honest and open about our
limitations, including what we think we know now, how we came to know those
things, and how we use that information to improve our systems. Reporting that
context is just as important as the details of an incident.

