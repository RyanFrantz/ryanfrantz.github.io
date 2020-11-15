---
layout: post
title: Code Diary
tags:
- Miscellany
status: publish
type: post
published: true
---

_**Editor's Note:** I wanted to get this out sooner, but it looks like [@roidrage](https://twitter.com/roidrage)
published [first](http://www.paperplanes.de/2014/5/6/git-commit-as-a-timeline.html). My opinions mirror his._

I am an average programmer. The code I write is often not elegant, nor even correct, but it works.
Until recently, I rarely followed style guides or best practices; I just wanted to get a working
solution running so that I could move on to the next problem.

One thing I've always tried to be consistent about, however, is documenting my code. That took many forms
over my career, from the neverending wall of text at the start of bash scripts to hefty commit messages.
In every case, the goal was to ensure I, or anyone else reading the code understood *why* I had made certain
changes or design choices in the code.

I call it my [Code Diary](https://twitter.com/Ryan_Frantz/status/462177771788435456). I take the time
during my commits to explain what changes I made and why I made them. I don't want to waste time when I
come back to the code 6 months later in an attempt to grok the reasons behind the code. I also hope they'll
be useful to others that may read the code.

_To quote Mathias in his [recent post](http://www.paperplanes.de/2014/5/6/git-commit-as-a-timeline.html):_

> I think about future me, future anyone who looks at my code, thinking what the hell is going on here and why?

<br>
Spot on!

A few months back, I came across Zach Holman's presentation [More Git and Github Secrets](http://zachholman.com/talk/more-git-and-github-secrets/).
The part that resonated with me most was the discussion about [proper messages](http://vimeo.com/72955426#t=920s). Aside from the line length
constraints recommendation, I've tried hard to stick to that style of commit. It helps me diarize my code.

![Code Diary](/images/code-diary.png)

Finally, while verbose commit messages help to understand the intent behind code _changes_, it's also useful
to help others reading your code understand the intent behind the code, in general. To that end I've started
writing [TomDoc-style](http://tomdoc.org/) comments above any methods I write. And hey! It's not **just** for Ruby, folks.

Context is relative; the more you have the better you can reason about what you're reading. Diarize those commits!
