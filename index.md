---
layout: default
title: "Posts"
banner_image: "/images/brooklyn_deer.png"
---

<section id="posts">
  <ul>
    {% for post in site.posts limit:6 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> <span class="date">{{ post.date | date: "%B %e, %Y" }}</span>
    </li>
    <!--{{ post.excerpt }}-->
    {% endfor %}
  </ul>
</section>
<section>
  <p>
    For older posts, check out the <a href="/archive">archive</a>.
  </p>
</section>

{% include footer.html %}
