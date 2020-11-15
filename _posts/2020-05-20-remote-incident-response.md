---
layout: post
title: Remote Incident Response
tags: ["Incident Analysis", "Incident Response"]
type: post
status: publish
published: true
---

**Editor's Note**: _This post is the result of collaboration between me and
[Dr. Laura Maguire](https://twitter.com/LauraMDMaguire). Much of this content
exists thanks to her ability to elicit knowledge and help frame it for
consumption. I am thankful for her help._

## Incident Response in Crisis

In an all-remote environment, much of what we may have taken for granted working
in-office such as face-to-face interactions, shared context (e.g. always-on
dashboards and whiteboard thoughts), real-time availability of teammates, and
more, is no longer present. Much of the processes and procedures that may have
worked in an office environment are likely under-specified for an all-remote
organization, especially when people have been near-instantly flung into a
teleworking experience by an event like the COVID-19 pandemic. This post looks
at  how incident response is impacted by working in a distributed environment.

I've worked across a broad range of companies and sectors. Whether my work
helped support the delivery of timely medical care, providing a virtual
storefront for crafty entrepreneurs, or ensuring accurate, up-to-the minute data
consumed by commerce and governments, being on call was a critical facet of
managing reliable systems. I want to share some lessons from my experiences
handling outages both as a remote engineer and an engineering manager. 

These are lessons I learned over the course of a two-decades-long career that
still hold true today. It may strike you as a good idea to implement some of
the ideas presented in this post and I'd encourage you to do so. First, though,
be deliberate and consider what problems you need to solve within your
organization to determine how these ideas can be of benefit.

To frame this post, it is useful to think of incident response in software
companies as being similar to a search and rescue (S&R) operation. When a search
team is assembled to find a missing hiker for example, there are teams of
rescuers working collaboratively whose mission is organized by a command center.
Similarly in service outages, there are one or more frontline responders,
supporting teammates, and some level of management helping to coordinate the
team.

## Relaying Your Position

In her talk at
[QCon London](https://www.infoq.com/presentations/incident-command-system/),
researcher [Laura Maguire](https://twitter.com/LauraMDMaguire), who studies
human performance in software organizations, takes the audience through an
exercise on observability (of each other) using a photo of the control room
during Apollo 13.  Relevant here is her observation that we can ‘know’ a lot
about the status of an incident and of our colleague’s current workload by being
able to see what they are doing across the room. Notable for us as incident
responders is that a distributed team’s “room” is often represented by a channel
in Slack and our ability to see each other takes on a different meaning. That
room may be permanent, like a team or a situation-room-type channel, or it may
be ephemeral, created expressly to focus attention around an incident.

A primary communication source for many organizations, especially today, is chat
(e.g. Slack, MS Teams, IRC). In-office communication benefits from direct
person-to-person interactions because it is high-bandwidth and low-friction;
consider how much information is transmitted by body language and tone in a
single conversation. These social cues and related background are largely
missing in text-based interactions among coworkers. This means that when
communicating via media like Slack we must be explicit about our work
in-the-moment (i.e. describing the what, how, why, when, and who). **Openly
surfacing our thoughts and actions is an opportunity to establish and build
common ground with our teammates.**

As a frontline responder, this activity is akin to an S&R operator relaying
their position in the field and providing ongoing observations about the
environment they are in.

There are few places where maintaining common ground is as critical as it is
during an outage. When responding to an incident as a distributed member of a
team, the ability to ‘see’ who is available to help largely disappears. Other
than some presence feature in chat or the simple assumption that someone who
recently spoke in channel is likely still at-hand, we can’t really know that any
help is available. It also means the way a team huddles or gets “on the same
page” takes new forms. Therefore, we need a way to translate what was previously
afforded by proximity into the new communication channels our teams have started
using.

That translation takes the form of explicit, tactical communication. It orients
you and your teammates around a plan of action and leaves a written trail for
others to follow, providing the context they’ll need to determine how they may
contribute. These messages inform your team of your mental model of the
situation and can even help them access part of their own models, which they can
share, further developing common ground. For the person speaking, it can serve
to calibrate themselves, which can be important during high-tempo,
high-consequence outages where conditions may feel hectic or rushed.

This sort of communication may provide the following information or context:

* What hypothesis you may have; if you have a hunch
* What information you have at hand that supports your ideas (i.e. graphs,
  search results)
* What action you are considering taking and what results you expect
* What action you’ve already taken, along with with the observed results
* Affirming whether you’ll continue investigating a hypothesis
* Any implications for others who are doing tasks that overlap with yours
* Clarifying who is responsible for a given task, especially in cases where
  teams with defined procedures (i.e. Incident Commander) are dealing with
  long-running incidents
* Confidence about approaches or results


A note for your future selves: the examples of context described above are
excellent content for later review, giving analysts a foothold into how a team
may have been thinking about an incident as it unfolded.

Here is an example of what context setting commentary might look like when the
on-call engineer is leaving traces of their actions for incoming help:

> Ryan (5:21am): I think the memcache clusters are having an issue, based on
  this set of graphs I’m looking at:
  https://corp.thingsgobump.com/memcache-dash.<br>
><br>
> Ryan (5:23am): I’m going to investigate if we’ve got a hot key scenario.<br>
><br>
> Ryan (5:29am) : Nah, everything’s all clear there.This assumption I was making
  didn’t hold up<br>

## Orient Yourself

During an incident you may know where you’re going and you may believe you’ve
clearly communicated this, without being verbose. Still, your coworkers need to
be confident they have the same heading. Now more than ever, in distributed
settings, if they lack information then questions for clarification or
additional information have to be asked.

Waiting to see if it gets discussed later or assuming others must know can
compound communication breakdowns. Those coming into the incident later can miss
out not only on important context but on the ability to ask the question since
the conversation may have moved on. Here it’s important to embrace the adage
“there are no stupid questions.” Encourage co-workers to ask clarifying
questions or request additional details to help them orient around the evolving
situation. **Asking questions is another opportunity to establish and build
common ground with our teammates.**

If you are monitoring a response or considering lending a hand, it’s important
to orient yourself relative to what is happening. Take for example, our S&R
operation for the missing hiker: while one person may be the lead in the field,
other teammates are available for support, including investigating different
paths in parallel. To do so effectively, they might come into the rescue asking
question like:

* "Where was the hiker last seen?”
* “How long have they been gone?”
* “What area has already been searched?”

These questions help the team coordinate with each other, provide an opportunity
for asking follow-up clarifying questions, and affirm their understanding of
events so far.

## Orchestrating the Team’s Response

I’ve been fortunate to lead exceptionally talented teams who had a strong sense
of organizational priorities and whose judgment I trust. Even still, when an
incident is all- consuming it is useful to have someone who helps shift between
the details of resolving a specific outage and the larger organizational goals.
Whether you have an Incident Commander or not, there are always organizational
and social needs that need to be dealt with, particularly during critical or
long-running incidents. I made it part of my role as a manager to help bring
balance to these competing demands.

In [Resilience Engineering: Concepts & Precepts](https://erikhollnagel.com/onewebmedia/Prologue.pdf),
editors Erik Hollnagel & David Woods use the metaphor of wild birds who need to
both have their heads down to feed and their heads up to scan for dangers.

> “It is, indeed, almost a biological law that organisms or systems (including
organizations) that spend all efforts at the task at hand and thereby neglect to
look out for the unexpected, run a high risk of being obliterated, of meeting a
speedy and unpleasant demise.” (p.2)

Understanding this, I felt it was my role as manager to help look out for the
unexpected and, when needed, to probe to make sure the response was still
following productive lines. I aided my teams by heading off the “predators” of
focused attention - primarily stakeholders such as customer support, users and
even my boss! These parties often request up-to-the-minute updates or try to
advocate for a specific action they think is appropriate. Keeping these groups
informed is, without a doubt, important; however, even with a communication lead
handling regular updates, management can be useful by strategically regulating
interactions so that every participant can perform their work as well as
possible.

As a manager, you can act as a powerful supplement during an incident, keeping
track of progress, assessing outside considerations’ importance relative to the
tempo of the response, and introducing them at natural break points to avoid
disrupting crucial heads-down time. Coordination among a distributed team
requires extra thought and energy compared to a co-located team. Your role
during an incident can help reduce some of those costs. 

Drawing on my own experience as a responder, I knew the bulk of outward
communication during an incident was to provide management updates, so I took it
upon myself to keep track of progress in order to reduce load on my team. This
helped me better determine when asking probing questions was likely to help add
fresh perspective and when it was going to disrupt the team working through a
problem. It seems simple to say, but everyone in the organization can play an
active role in helping the resolution of a service outage by reflecting on how
their engagement either adds load or can minimize load on the responding team.

In the missing hiker rescue operation, as in software, frontline responders are
simultaneously busy assessing what they’re experiencing on the ground,
coordinating with each other, and trying to avoid pitfalls around them. Being
removed from the hands-on work, a manager has a birds-eye view of the situation
and can provide additional coordination support to allow the team to focus on
their task.

## Preparing the Team for the Journey

New situations and environments remind us of the importance of preparation. This
is certainly true today, as we grapple with COVID-19. The pandemic has
reinforced how valuable preparation is and we have an opportunity to take
deliberate steps toward readying our teams for on-call rotations. Being on call
is more than your name rotating through a schedule; it requires preparation and
planning to do it well.

If our software company were an S&R team, it would be irresponsible for
management to send operators into the field unprepared. The dangers to those
lost and those searching for them are too great to simply hand out a flashlight,
bandaids, and wish them luck. We have a general idea of the terrain that will be
covered and what tools are needed to perform that work. It is in everyone’s
interest to support the team by preparing them for the task at hand.

Good preparation includes reviewing topics like the following:

* What is the scope of the on-call experience? That is, what is the on-call
engineer expected to know about?
* What are the expectations around coverage, including when on-call begins and
ends and whether a backup engineer is on the rotation?
* What are the procedures for assessing and describing an outage?
* What are the criteria and procedures for escalating to other teams?
* What is our confidence in written documentation such as runbooks?

In my experience, I was never fully ready to be on call. I always felt like
there was some information or useful bit of context I would not have that would
hamper my ability to effectively respond. In hindsight, that feeling was less
about knowing as much as I could and more about being confident that I could
handle the situation, in general. Management can help develop confidence in
responders by implementing on-call shadowing. Before assigning someone a primary
role as a responder, they can “ride along” with an on-call engineer to observe
what actions they take and, later, debrief them on the how and why of that
response. If a backup on-call rotation is already in place, using the backup
slot for shadowing is a low-friction way to introduce an engineer in this way.

Finally, it’s common for folks to feel immobilized by an on-call shift. Fear of
missing an alert or being unable to respond due to lack of connectivity takes a
toll on engineers, reducing the mental energy they have available to effectively
respond. As a manager, you can take small steps to alleviate this by providing
an on-call phone or a mobile wifi hotspot. Knowing that it’s OK to leave the
house to pick up necessary supplies or tend to loved ones and having the tools
to do so can alleviate some of the stress involved with being on call.

## Free to Feel

Over the course of my career, I have been a part of some incredibly
uncomfortable incidents.  Some incidents were deeply distressing experiences,
like that of a character in a movie trying to escape a hallway full of doors and
finding no help behind any of them. It’s likely in the coming weeks that you
will face the acute stress of an incident and that, coupled with the chronic
stress of the conditions we are currently facing, you might not handle it well.
I want to tell you that is OK.  Here’s some insight I’ve gained from similar
circumstances.

When you are in an outage, you’re in the field, adrenaline pumping, watching the
clock, and trying to make sense of a rapidly changing environment. It’s a lot to
process. It may be overwhelming in the moment or it may all hit you when the
work is done. In any case, it’s useful to know that it’s there and you’ll have
to address it at some point. So will your teammates.

Personally, I try to practice being aware of how I’m feeling during an incident.
If the incident is troubling and I can’t get a hold of anyone, my anxiety is
likely to increase. Given the context of COVID-19 this is likely to happen as it
may impact a team’s availability. Getting overwhelmed by the incident means I
might miss something important or forget to relay information to your team.
Coping with stress in the moment is critical and the sooner I am able to
acknowledge that I’m feeling it, the sooner I can recalibrate myself to the
work. This takes practice.

In order to get better as a team coping with the stress, it is important to draw
attention to it in a more comfortable, structured manner, usually some distance
from the incident. Raising this topic immediately following an incident may not
be useful to the team, given how fresh the event has been. On the other hand,
others may prefer to share while they have clarity on their experiences. You
know yourself and your team best; judge accordingly. At a minimum, sharing this
context in postmortem/incident review helps everyone gauge the participants’
frame of mind and demonstrates the importance of qualitative data to
understanding how incidents affect us.

I fully recognize that it can be really uncomfortable to acknowledge that you
didn’t have control of yourself and your part of the response. Admitting to
having those feelings is really difficult and requires practicing some degree of
vulnerability.  But it gets to the heart of why you should do this. If you can
speak openly about those things with the engineers you are on the fireline with,
it has the potential to build team cohesion and camaraderie. A strong sense of
agency builds as the team internalizes that they are part of a group that trusts
them enough to do this work and share the hardship. This can lead to more clear
communication and more fluid coordination during future incidents.

For another take on this, read [Will Gallego’s post on patience](https://www.learningfromincidents.io/blog/patience-in-implementing-effective-incident-reviews)
where he reminds us that, despite the strain of the post-incident aftermath,
taking the time to work through an incident as a team in an incident review is
a constructive way to give voice to the experience, and ultimately, to learn
from it.

## In Practice

These lessons are only as impactful as your ability to put them into practice.
To realize their benefits, through application, here are some recommendations to
get you started:

* To help people “see” what’s going on in your chat channel, diarize your
  thoughts and actions in real time. Leave a trail others can follow. Use
  shorthand notes to loop others in on your actions, the outcomes of those
  actions and your current state of mind (hypotheses on the table, the current
  thinking about risk, etc).
* Help others provide that traceability by asking for clarification or more
  information if you find yourself making an assumption about what they mean.
  Help each other be explicit in the service of clarity. 
* Drop signposts alongside those digital tracks by adding visual references to
  the dashboards you see or the screenshots of the log files you searched.
  Making this information available in a consistent location (a war
  room/situation room channel or a shared document) minimizes additional work
  for incoming responders and helps them get up to speed quicker.
* If you are a manager, work alongside your team to remove barriers and help
  them anticipate roadblocks without introducing interruptions or adding more
  stress to the situation.  They are trying; suit up and join the frontlines.
  You’ll be amazed at how much more effective they can be with you there instead
  of poking them for updates from afar.
* It goes without saying that you should be performing an incident review or
  blameless postmortem. It’s worth specifically cultivating the kind of
  environment where dealing with the stressful feelings in a safe, respectful
  manner can happen to continually build trust, cohesion, and stronger, more
  responsive teams. 

Incident response is already a demanding exercise. Doing so in a remote
environment introduces a new set of challenges that can make responding feel
more difficult. If we are explicit and deliberate in our approach to remote
incident response, we can hone our skills and improve how we do this work.

## Footnotes

* [Beth Long wrote a great post](https://blog.newrelic.com/engineering/on-call-and-incident-response-new-relic-best-practices/)
  on New Relic’s on-call practices.
* [Sam Parkinson describes](https://medium.com/ft-product-technology/supporting-our-systems-through-incident-workshops-c0d22a4290b9)
  how the Financial Times readies their team to be on call by using tabletop
  exercises built on past incidents.

<hr>

_Ryan has been practicing software development and web operations for over 20
years, holding roles in engineering and management. His experiences were gained
at companies ranging from startups to large organizations, covering a breadth of
industries including healthcare, e-commerce, and fintech._

_He recently co-founded [Jeli.io](https://jeli.io), a startup building a product
that aids incident analysis with a vision of pushing the state of the art
forward in software engineering by supporting learning and discovering
insights._
