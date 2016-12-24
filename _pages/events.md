---
layout: page
title: Events
---

<style>
.Events__Event {
  margin-bottom: 20px;
}
</style>

<p id="breadcrumbs">
  <a href="{{ site.baseurl }}/">Home</a> &rsaquo; {{page.title}}
</p>

## Events

{% for event in site.events %}
  {% capture newMonth %}{{ event.date | date:"%B" }}{% endcapture %}
  {% if newMonth != oldMonth %}
  {% include bannerHeader.html children=newMonth %}
  {% endif %}
  <div class="Events__Event">
  <b>{% if event.ongoing == true %}Starting {% endif %}{{ event.date | date:"%b %-d" }}{% if event.end-date %}-{{ event.end-date | date:"%-d" }}{% endif %}</b> -
  <a href="{{event.url}}">
  <b>{{ event.title }}</b>
  </a>
  {% if event.description %}<div style='padding: 20px;'>{{ event.description }}</div>{% endif %}
  </div>
  {% capture oldMonth %}{{ newMonth }}{% endcapture %}
{% endfor %}
