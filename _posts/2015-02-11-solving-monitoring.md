---
layout: post
title: Solving Monitoring
tags:
- Monitoring
status: publish
type: post
published: true
---

## Narrow Scope

I can understand why many folks would make the case that monitoring is
terrible, but I think the real issue is one of narrow scope. Specifically, what
we currently define as monitoring is data collection, storage, and threshold-based
alerting. These components of the current defintion are generally
solved problems, given that we have numerous ways to generate health and
performance data, store them, and notify operators when they are outside of
expected bounds.

### Data Collection and Storage
One can choose from several well-trodden solutions to capture system- and
application-level metrics such as Ganglia, Graphite, and collectd. Tools like
[StatsD](https://github.com/etsy/statsd) make it easy to instrument your code
(metrics are sent to Graphite) and [Logster](https://github.com/etsy/logster)
can parse your logs to update both Ganglia and Graphite.

Speaking of logs, I'd even make the case that log aggregation and indexing
solutions like ELK (Elasticsearch, Logstash, Kibana) and Splunk fit into
the category of data collection as the information available within log lines
can be extremely useful.

In these and other systems, data is often stored in RRD or whisper files,
discrete files with finite size based on the frequency and duration of data
one wishes to maintain. Key-value stores have some popularity as well (see
[LevelDB](http://en.wikipedia.org/wiki/LevelDB)'s use in
[InfluxDB](http://influxdb.com/)).

### Threshold-based Alerting

There are several solutions available for comparing data points to thresholds
and making a determination if an operator should be alerted.
In incumbent infrastructures, Nagios is the perennial choice for operations
teams. Other solutions have emerged over the years, such as Sensu
(geared toward dynamic cloud-based infrastructures) and Circonus, an
enterprise-focused commercial product. InfluxDB is a new player in this space.
Occasionally we see developments from companies solving their specific
monitoring needs such as Netflix's [Atlas](http://techblog.netflix.com/2014/12/introducing-atlas-netflixs-primary.html)
and SoundCloud's [Prometheus](https://developers.soundcloud.com/blog/prometheus-monitoring-at-soundcloud).

There will always be new variations on old themes; we see new monitoring systems pop up from
time to time. Usually, these systems have been built to address an organization's specific
needs (i.e. cloud-based infrastructure or aggregating data across disparate data centers).
It can be enticing to drop one’s current system in favor of a new solution. It can _feel_
like making progress when in actuality it's replacing one set of problems for another without
addressing the underlying issues we have with the current state of monitoring.

## Monitoring Problems

So if we've managed to solve the problems of collection, storage, and alerting,
why do people still believe that monitoring is terrible? Because there are **more**
problems outside the scope of monitoring's current definition!

There are several problems to solve in the monitoring space, but at the moment,
the following intrigues me:

* Improving Signal Detection
* Contextualizing Alerts
* Event Correlation

### Improving Signal Detection

There are a number of factors that contribute to improving the detection of
signals. It's part reducing noisy, useless alerts and part developing checks
to increase the likelihood that alerts are appropriate and actionable. In total,
improving signal detection is about maximizing trust in the fidelity of the
monitoring system. Put another way, I only want to be alerted when an issue
requiring my attention occurs. And I want to be certain that I'm not wasting
my time and energy to address it.

### Contextualizing Alerts

[Computers can, and should, do as much work as possible for us before they have to wake us up](http://ryanfrantz.com/posts/alert-design.html).
Computers can augment our work, helping make better sense of alerts and the
conditions that precipitate them. I have [a few ideas](http://ryanfrantz.com/talks/3am-why-you-got-paged/)
about ways we can start addressing this problem, but I think there's more work
to be done here.

### Event Correlation

This is somewhat similar to contextualizing alerts, in that I want to use
computers to augment an operator's senses when being alerted, but the scope is
much broader. Organizations tend to solve lots of small problems over time and
what results are several individualized solutions that serve a single, yet
important purpose. In some cases, there can be overlap in features or the potential
for interesting interfaces to emerge between them. Could we take advantage of these
to build an holistic view of our systems, their dependencies, and interactions?

For example, at Etsy, we have built and open-sourced several tools to fit certain
needs, such as:

* [morgue](https://github.com/etsy/morgue) - Track outages, causes, and remediation items
* [oculus](https://github.com/etsy/oculus) - Find graphs with similar shapes that may indicate correlation
* [opsweekly](https://github.com/etsy/opsweekly) - Track alert volumes, frequencies, and categories
* [skyline](https://github.com/etsy/skyline) - Attempt to identify anomalous behavior in system and application graphs

We have other tools, including one that collects and can expose arbitrary events
such as host builds, deploys, and Chef updates.

When I think of event correlation, I imagine finding and displaying information
from one or more of these sources to lend additional context about what is
happening. Correlation can be temporal (events are related by proximity in
time) or some other factor such as the known relationship between CPU
utilization and Apache response time. Perhaps Oculus can find graphs with
similar shapes, whose data no one ever considered related but yield valuable
insight. Maybe useful information related to a current outage is buried in a
Morgue entry from a previous postmortem.

This is a multi-dimensional problem, which makes it especially tantalizing to me.
One could start to correlate events by known, static relationships such as
failing cart code resulting in reduced checkout volume. And what of dynamic
(though possibly known) relationships? Can we parse `tcpdump` output to glean
information about which systems and services are interfacing, and possibly
dependent on each other? Can we convert that information into useful context
that an operator could use? [Ruxit](https://ruxit.com/) is building some slick
functionality that does some of this and I'm curious if there are others. I'm
also vaguely aware of an area of study known as
[Complex Event Processing](http://en.wikipedia.org/wiki/Complex_event_processing)
that I'd like to learn more about.

## A New Definition

The current colloquial definition of "monitoring", that of data collection,
storage, and threshold-based alerting, is maladjusted for the expansive and
non-stop growth of technology within our collective infrastructures. We're
building and operating complex systems; they possess known relationsips between
components and display (potentially unknown) emergent behavior. There are so many
moving parts with various and varying interactions that simply comparing a
collected data point to a static threshold isn't enough to adequately understand
what is happening within those environments.

We can do better. We can reduce alert noise and develop ways to focus operators'
attention when systems fail. We can gather context to augment operators'
understanding of problems in our infrastructure. We can correlate events and
possibly help describe how issues are manifesting themselves in our applications.
As a bonus, this information can be used to communicate up- and downstream to
others that may find the context useful and actionable.

To that end, I'm proposing that we redefine what monitoring is. Monitoring is
no longer just about the collection and storage of system- and application-level
data, coupled with threshold-based alerting. It's deeper and more complex because
the information we expect to glean from our current monitoring systems is
deeper and more complex.

While I'm still formulating ideas and dissecting various
problems in this space, I'll make an initial attempt at redefining monitoring:

    Monitoring is the aggregation of health and performance data, events,
    and relationships delivered via an interface that provides an
    holistic view of a system's state to better understand and address
    failure scenarios.

<br>
If we redefine the scope of monitoring and solve more of the outstanding issues
that we face, monitoring doesn't have to suck. Rather, it can be one of the most
valuable tools we have to proactively manage our growing and complex infrastructures.

I expect this definition will be updated as I progress through my research and
work, and I look forward to input from others.
