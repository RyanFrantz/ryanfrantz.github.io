---
layout: default
title: "Posts"
banner_image: "/images/brooklyn_deer.png"
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
<section>
  <p>
    For older posts, check out the <a href="/archive">archive</a>.
  </p>
</section>

{% include footer.html %}
