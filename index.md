---
layout: default
title: "Posts"
---

<section id="posts">
  <ul>
    {% for post in site.posts limit:10 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <time datetime="{{ post.date | date: "%Y-%m-%d" }}">
        {{ post.date | date: "%e %b %Y" }}
      </time>
    </li>
    {% endfor %}
  </ul>
</section>
<section id="archive-attention">
  <p>
    For older posts, <a href="/archive">check out the archive</a>.
  </p>
</section>
