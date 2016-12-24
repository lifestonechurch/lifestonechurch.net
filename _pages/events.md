---
layout: page
title: Events
---

<p id="breadcrumbs">
  <a href="{{ site.baseurl }}/">Home</a> &rsaquo; {{page.title}}
</p>

## Events

<dl>
  {% for event in site.events %}
    {% capture newMonth %}{{ event.date | date:"%B" }}{% endcapture %}
    {% if newMonth != oldMonth %}
      <dd>{{ newMonth }}</dd>
    {% endif %}
    <dt>
    <b>{{ event.date | date:"%-d" }}{% if event.end-date %}-{{ event.end-date | date:"%-d" }}{% endif %}</b> -
    <a href="{{event.url}}">
    <b>{{ event.title }}</b>
    </a>
    {% if event.location %}- {{ event.location }}{% endif %}
    {% if event.cost %}- {{ event.cost }}{% endif %}
    {% if event.description %}<div style='padding: 20px;'>{{ event.description }}</div>{% endif %}
    </dt>
    {% capture oldMonth %}{{ newMonth }}{% endcapture %}
  {% endfor %}
</dl>
