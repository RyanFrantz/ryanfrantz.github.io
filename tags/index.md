---
layout: default
title: "Tags"
---


<section id="tags">
  <ul>
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
  {% assign tag_name = tag[0] %}
  <h3 id="{{ tag_name }}">{{ tag_name }}</h3>
  <section id="posts">
    <ul>
    {% assign tagged_posts = tag[1] | sort | reverse %}
    {% for post in tagged_posts %}
      <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <time datetime="{{ post.date | date: "%Y-%m-%d" }}">
        {{ post.date | date: "%e %b %Y" }}
      </time>
    </li>
    {% endfor %}
    </ul>
  </section>
  {% endfor %}
  </ul>
</section>
