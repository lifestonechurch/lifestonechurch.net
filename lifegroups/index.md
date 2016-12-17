---
layout: page
---

<p id="breadcrumbs">
	<a href="{{ site.baseurl }}/">Home</a> &rsaquo; <a href="{{ site.baseurl }}/lifegroups/">LifeGroups</a>
</p>

<style>
.Lifegroup__Leader_Section {
  margin-bottom: 2.5em;
  padding-bottom: 1em;
  border-bottom: 5px solid {{site.data.colors.GREEN}};
}
</style>

# LifeGroups

![lifegroups]({{ site.baseurl }}/assets/uploads/pages/lifegroups.jpg)

{% include bannerHeader.html children='About LifeGroups' %}

Connect to God by connecting to His people & His Word.

LifeGroups are the heart of Lifestone Church. They are small groups of people who meet in homes one night a week in order to connect to God by connecting other people who love Him and
 to the Bible. This is where spiritual growth happens!

 {% if site.data.smallGroups.currentSemester %}Current Semester: {{ site.data.smallGroups.currentSemester }}{% endif %}

#### 5 Reasons to Join a LifeGroup!

1. You will begin to really feel like part of God´s family.

1. You will understand the Bible better in a small group.

1. Prayer will become more meaningful to you.

1. You will have friends with whom to share both your joys and burdens.

1. You will have a natural way to share Jesus with neighbors, friends, relatives, and at co-workers.

Check out the details and select the group that works best for your family!

{% include bannerHeader.html children='Find a LifeGroup' %}

{% for group in site.data.smallGroups.lifeGroups %}
<div class='Lifegroup__Leader_Section'>
<h3>{{ group.title }}</h3>
{% if group.description %}
	<p>{{ group.description}}</p>
{% endif %}
<blockquote>
{{ group.time }}
<br/>
{{ group.address }}
<br/>
{{ group.childcare }}
</blockquote>

{% if group.startDate %}		
<h4>Start Date:</h4>		
<p>{{ group.startDate }}</p>		
{% endif %}

{% if group.hosts %}
<h4>Hosts:</h4>
<p>{{ group.hosts }}</p>
{% endif %}

<h4>Leaders:</h4>
{% for leader in group.leaders %}
<p>{{ leader.name }}</p>

{% if leader.image %}<img class="small left rounded" src="{{site.baseurl}}{{ leader.image }}"/>{% endif %}
<p>{{ leader.description }}</p>
<div style="clear: both;"></div>
{% endfor %}
</div>
{% endfor %}
