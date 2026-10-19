---
layout: page
title: 文章归档
description: "按年份和月份浏览博客文章，涵盖企业架构、数据安全与 AI 工程实践。"
permalink: /archive/
---

<p class="archive-intro">共 {{ site.posts.size }} 篇文章，按发布时间从新到旧排列。了解作者的经历与项目，请查看<a href="{{ '/profile/' | relative_url }}">职业档案</a>。</p>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
<section class="archive-year" aria-labelledby="archive-year-{{ year.name }}">
  <h2 id="archive-year-{{ year.name }}">{{ year.name }} 年</h2>
  {% assign posts_by_month = year.items | group_by_exp: "post", "post.date | date: '%m'" %}
  {% for month in posts_by_month %}
  <h3>{{ month.name }} 月</h3>
  <ul class="archive-post-list">
    {% for post in month.items %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m-%d" }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
</section>
{% endfor %}
