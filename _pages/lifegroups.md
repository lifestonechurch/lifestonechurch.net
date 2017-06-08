---
layout: page
title: LifeGroups
---

<style>
.Lifegroup__Leader_Section {
  margin-bottom: 2.5em;
  padding-bottom: 1em;
  border-bottom: 5px solid {{site.data.colors.GREEN}};
}
.Lifegroup__Leader_Section:last-child {
  border-bottom: none;
}
</style>

![lifegroups]({{ site.baseurl }}/assets/uploads/pages/lifegroupRegistrations.png)

{% include header.html level='2' banner=true children='About LifeGroups' %}

Connect to God by connecting to His people & His Word! LifeGroups are the heart of Lifestone Church. LifeGroups are small groups of people who meet once a week in order to connect to God by connecting to other people who love Him and to the Bible. This is where spiritual growth happens! Check out the details and select the group that works best for your family.

{% include header.html level='2' banner=true children='Open LifeGroups' %}

<div>
{% for group in site.data.smallGroups.lifeGroups %}
<div class='Lifegroup__Leader_Section'>
{% include header.html level='3' children=group.title %}

<blockquote>
{{ group.time }}
<br/>
{{ group.address }}
<br/>
{% if group.childcare %}
Free on-site childcare
{% endif %}
</blockquote>

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
{% endfor %}
</div>

{% include header.html level='2' banner=true children='5 Reasons to Join a LifeGroup!' %}

1. You will begin to really feel like part of God´s family.
1. You will understand the Bible better in a small group.
1. Prayer will become more meaningful to you.
1. You will have friends with whom to share both your joys and burdens.
1. You will have a natural way to share Jesus with neighbors, friends, relatives, and at co-workers.
