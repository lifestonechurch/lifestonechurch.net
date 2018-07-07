---
layout: page
title: LifeGroups
---

<style>
img.Logo__Image {
  width: 100%;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}
@media (min-width: 767px) {
  img.Logo__Image {
    width: 50%;
  }
}
.Lifegroup__Leader_Section {
  margin-bottom: 2.5em;
  padding-bottom: 1em;
  border-bottom: 5px solid {{site.data.colors.GREEN}};
}
.Lifegroup__Leader_Section:last-child {
  border-bottom: none;
}
</style>

<img src="{{ site.baseurl }}/assets/uploads/pages/lifegroups.jpg" alt="lifegroups" />

Connect to God's people and God's Word in LifeGroups! This is your next step after attending Lifestone Church on Sunday mornings and the best way to connect with others and grow spiritually. Below you'll find information on specific groups. #BetterTogether

<p style="clear: left;"><b>Text the leader to sign up!</b></p>

Your leader will give you details about FREE childcare + any time/location changes!

<div>
{% for group in site.data.smallGroups.lifeGroups %}
  {% capture newDay %}{{ group.day }}{% endcapture %}
  {% if newDay != oldDay %}
    {% include header.html level='2' banner=true children=newDay %}
  {% endif %}

<div class='Lifegroup__Leader_Section'>
{% include header.html level='3' children=group.title %}

{% if group.description %}
  {{ group.description | markdownify }}
{% endif %}

<blockquote>
{{ group.time }}
<br/>
{{ group.address }}
<br/>
{{ group.number | markdownify }}
</blockquote>

{% if group.childcare %}
Free on-site childcare
{% endif %}

{% if group.startDate %}
{% include header.html level='4' children='Start Date:' %}
<p>{{ group.startDate }}</p>
{% endif %}

{% if group.hosts %}
{% include header.html level='4' children='Hosts:' %}
<p>{{ group.hosts }}</p>
{% endif %}

{% include header.html level='4' children='Leaders:' %}
{% for leader in group.leaders %}
<p>{{ leader.name }}</p>

{% if leader.image %}
{% include image.html url=leader.image rounded=true size='small' position='left' %}
{% endif %}
<p>{{ leader.description }}</p>
<div style="clear: both;"></div>

{% endfor %}

</div>
  {% capture oldDay %}{{ newDay }}{% endcapture %}
{% endfor %}
</div>

{% include header.html level='2' banner=true children='5 Reasons to Join a LifeGroup!' %}

1. You will begin to really feel like part of God´s family.
1. You will understand the Bible better in a small group.
1. Prayer will become more meaningful to you.
1. You will have friends with whom to share both your joys and burdens.
1. You will have a natural way to share Jesus with neighbors, friends, relatives, and co-workers.
