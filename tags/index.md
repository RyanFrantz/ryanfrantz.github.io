---
layout: default
title: "Tags"
banner_image: "/images/brooklyn_deer.png"
---

<div class="menu">
  <ul>
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
  {% assign tag_name = tag[0] %}
  <h3 id="{{ tag_name }}">{{ tag_name }}</h3>
  <ul>
    {% assign tagged_posts = tag[1] | sort | reverse %}
    {% for post in tagged_posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> <span class="date">{{ post.date |     date: "%B %e, %Y" }}</span></li>
    {% endfor %}
  </ul>
{% endfor %}
  </ul>
</div>
