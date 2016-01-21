---
layout: post
title: Receiver Operating Characteristic Curves
tags: 
type: post
status: publish
published: true
---

**tl;dr** - What follows is a partially organized set of thoughts and initial
findings from starting to learn about and possibly calculating a receiver operator
characteristic (ROC) curve using alert categorization data available via
[Opsweekly](https://github.com/etsy/opsweekly). The goal is to measure how
effective our monitoring system is at identifying actionable failure events
that require an operator's attention.

Given the current data set I have to work with at the moment, I'm unable to
calculate a ROC curve. I have some ideas on how to complete the data to make
this possible.

**I have much more to learn and apply here.**

## Improving the Signal-to-Noise Ratio

Last year I posted some ideas on [solving monitoring](http://ryanfrantz.com/posts/solving-monitoring/).
Most relevant here is the notion of reducing noise and strengthening signal in
our monitoring systems. Before we can improve it we must be able to measure it.

I'm fortunate to work with some amazing people, not least among them, [John Allspaw](https://twitter.com/allspaw).
He and I got to talking about signal and noise in monitoring systems one day and
he turned me on to a little bit of signal detection theory called the
[receiver operating characteristic](https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
or ROC.

## ROC

In summary (and probably a terrible one at that), the idea behind the ROC is to
help determine the efficacy of a test's ability to accurately detect the presence
of whatever the test is supposed to detect. ROC came out of attempts after World
War II to understand just how well radar operators could accurately detect the
presence of enemy aircraft. After all, that little blip on the screen could be
friendly aircraft; it could be a flock of geese; it could even be a defect in the
screen itself.

ROC curves have most notably (I've found thus far) made their way into medicine
where they're used to gauge the effectiveness of a given test's ability to identify
the presence of disease in a set of patients. Luckily, there is a lot of literature
to start digging into to understand ROC curves. **Unfortunately, there is a lot of
literature to start digging into to understand ROC curves.**

Suffice it to say that in order to derive a ROC curve, one needs to have a measure
of the true and false positive results and true and false negative results of a test.

### Using ROC Curves
What can one do with a ROC curve? Once a ROC curve is created, one can calculate
the detectability index (d'; read "dee prime") for the set. The higher the value,
the better the test or system is at positively detecting what it's designed to
detect. Related to d' (I think) is the area under the curve (AUC). This measurement
helps determine how accurate a given test is.

**Hypothesis: Using alert data gathered from Opsweekly, we can measure
how well our monitoring system is at detecting actionable failure events**. Using
ROC curves, we can compare those data on at least a weekly basis to gauge how
good or bad on-call periods have been. Sure, boiling down an on-call week
to a single value is highly reductive, but I am curious what, if anything, the
ROC can teach us.

## Opsweekly Data

**NOTE**: At Etsy, we use [Opsweekly](https://github.com/etsy/opsweekly) to categorize
the alerts we've received from Nagios. Everything that follows from this point
assumes some familiarity with Nagios, at least, and Opsweekly, hopefully.

Reviewing the alert categories we currently have defined in Opsweekly, I felt
confident that we could calculate the sensitivity (true positive rate) of the
alerts. [[1]](#footnote_1)<a name="return_from_footnote_1"></a>

![Opsweekly Alert Categories](/images/opsweekly_alert_categories.png)

*Opsweekly Alert Categories*

The categories feel pretty clear about what is a true positive (i.e. action taken)
versus a false positive (i.e. no action taken due to downtime not being set).
However, to calculate a ROC curve, one needs to also know the specificity
(false positive rate) of a test's results. Unfortunately, we don't have such data
for our alerts. We're not capturing data on true negatives (correct rejections),
that is where Nagios did not alert because a given check/test's results were within
"normal" limits/thresholds. Nor do we have data on false negatives (misses)
where Nagios didn't alert but should have. [[2]](#footnote_2)<a name="return_from_footnote_2"></a>

## Proving a Negative

To collect data for true negatives, we can probably calculate the expected
count of correct rejections based on a given time period, the frequency of checks,
and the known count of observed true/false positives. This may be brittle and not
very explicit (i.e. we're not counting correct rejections as they occur) but it
may suffice to get started.

Getting data on false negatives seems to be the biggest challenge to quantify
because our checks' thresholds are defined by human operators and therefore need
intervention by those operators when they're found to be inadequate/inappropriate
for surfacing problems. If/when such a review were to occur (say, during a postmortem
review), we'd also need to document somewhere (ideally Opsweekly) that Nagios
failed to notify. This also feels brittle in that it depends on:

1. Someone identifying a check failed to notify.
2. Someone manually updating a data set to indicate what was a false negative.

That having been said, in the medical literature I read, it occurred to me
that there had to have been some independent review and/or confirmation of a
test's results (i.e. via some secondary test) before a ROC curve could be
calculated. I found nothing clearly stating as much but it was implied
because a ROC curve can't be accurately calculated without **complete information**.

In general, I imagine Opsweekly will need to be extended in some form to
accommodate the collection of negative data.

## Final Thoughts

I still have more to learn about ROC curves and their application. I have
identified that I have an incomplete data set preventing me from generating
a ROC curve (and related measurements) to understand how well our monitoring
system is performing, in terms of identifying actionable failure events that
require an operator's attention.

There is a very interesting paper by Sorkin and Woods titled
["Systems with Human Monitors: A Signal Detection Analysis"](http://www.cs.bham.ac.uk/internal/courses/hci/readings/Sorkin-Woods-1985.pdf) (PDF)
that describes the use of ROC curves in determining the effectiveness of
monitoring systems. Notably they review what they term "two-stage detection systems"
which basically boils down to computers and humans cooperating to monitor systems.
I dig on [computers augmenting humans](http://ryanfrantz.com/talks/3am-why-you-got-paged/)
as a functioning part of the team. I'll be revisting this paper soon.

## Footnotes

<a name="footnote_1"></a>
[1] It turns out I was incorrect. Calculating the sensitivity of a test also
requires that one know the count of **false negatives**. Sensitivity is calculated
as ``P(T+|E+) = TP/(TP+FN)``. In other words, the probability of the test
indicating an event occurred given that an event did occur is equal to the count
of true positive results divided by the sum of the counts of true positive and
false negative results. [Return](#return_from_footnote_1)

<a name="footnote_2"></a>
[2] I considered the case where Nagios can't communicate with a host's NRPE daemon
being possibly defined as a miss, but Nagios will still alert with a status of UNKNOWN in this
case and feels a little more like a false positive. [Return](#return_from_footnote_2)

