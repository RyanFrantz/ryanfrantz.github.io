---
layout: default
title: "Posts"
banner_image: "/images/brooklyn_deer.png"
---

<div class="menu">
  <ul>
    {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> <span class="date">{{ post.date | date: "%B %e, %Y" }}</span>
    </li>
    <!--{{ post.excerpt }}-->
    {% endfor %}
  </ul>
</div>
