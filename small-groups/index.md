---
layout: page
---

<p id="breadcrumbs">
	<a href="{{ site.baseurl }}/">Home</a> &rsaquo; Small Groups
</p>

# Small Groups

![lifegroups]({{ site.baseurl }}/assets/uploads/pages/lifegroups.jpg)

## LifeGroups

Connect to God by connecting to His people & His Word.

LifeGroups are the heart of Lifestone Church. They are small groups of people who meet in homes one night a week in order to connect to God by connecting other people who love Him and
 to the Bible. This is where spiritual growth happens!

New Groups set to start the week of September 20th!

<ul>
{% for group in site.data.smallGroups.lifeGroups %}
	<li>{{ group.time }}- {{ group.people }}- {{ group.childcare}}</li>
{% endfor %}
</ul>
