---
layout: post
title: Sleep-driven Development
tags:
- General
status: publish
type: post
published: true
---

Ask anyone that's been on an on-call rotation, and odds are they'll tell you it's stressful,
even if there were little to no alerts during the rotation. That's because we *expect* there to be alerts.
If there were never any alerts, there'd be no need for the on-call rotation, right?

[Stress can affect one's sleep.](https://www.google.com/search?q=stress+effects+on+sleep&oq=stress+effects+on+sleep)
At Etsy, we wanted to understand what affect(s) being on call had on our ability to snooze. Last year I wrote
about our attempts to [visualize sleep loss](http://codeascraft.com/2013/09/28/nagios-sleep-data-and-you/)
by comparing sleep data against Nagios alert data. Since then, we've continued gathering data and improving our reporting.
The impetus behind this effort is to do everything we can to keep our engineers in bed, or at least reduce the amount
of time they might be awake when they'd otherwise (hopefully) be sleeping.

## Mean Time to Sleep

As [@mrtazz](https://twitter.com/mrtazz) mentioned in his [Monitorama presentation](http://vimeo.com/95247023),
we have a tool called **Opsweekly** (written by the inimitable [@lozzd](https://twitter.com/lozzd)) that we use
for capturing and disseminating work. For on-call engineers, it automatically queries Nagios to build a list of
alerts that were fired so that the engineer can easily summarize what action was taken for each.
This has been very helpful in identifying repeat alerts, alerts due to systems not placed
in downtime, and **alerts that may not need to page a slumbering engineer**.

Better still, we enhanced the tool to help us answer several questions:

* How many times was an on-call engineer woken up?
* How long, on average, was an engineer awake for each alert?
* What was the total amount of time lost to handling alerts when the engineer otherwise would have been sleeping?

Thanks to the sleep data we collect with our [Jawbone UP](https://jawbone.com/up) bands, we can now generate a handy sleep
summary. This is my sleep summary from last week, when I was on call:

![frantz sleep summary](/images/frantz_sleep_summary_20140516_20140523.png)

Note that last bit of information: 3 times I was woken up and **didn't** go back to sleep.

## More Sleep Research

I'm fascinated by the science behind sleep: what happens when we sleep; why we need to sleep; what the affects
are when we don't get enough of it. I was very fortunate to host [Dr. Michael Grandner](http://www.michaelgrandner.com/)
at Etsy a few weeks back. Dr. Grandner is a clinical psychologist and sleep researcher at the University of Pennsylvania.
I met him online while looking for tools to help measure the impact of sleep loss. His enthusiasm for the subject of sleep
is infectious and what he intended to be an hour-long presentation rolled smoothly into three!

I shared the details of our sleep profiling experiment with him and he was gracious enough to offer his time,
insight, and advice to help us. In fact, we'll be collaborating more in the near future. In addition, I'm partnering with
other teams at Etsy to help them develop employee wellness programs, by providing them tooling to gather sleep data they can
correlate with other measures.

## Want to Learn More?

If you'll be attending Velocity in Santa Clara, CA next month, and you'd like to learn more about how Etsy quantifies the
on-call experience, Laurie Denness and I are [giving a presentation](http://velocityconf.com/velocity2014/public/schedule/detail/35188)
on the matter. Stop in and have a look-see.
