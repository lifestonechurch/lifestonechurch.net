---
layout: page
---

<p id="breadcrumbs">
	<a href="{{ site.baseurl }}/">Home</a> &rsaquo; Small Groups
</p>

# Small Groups

![lifegroups]({{ site.baseurl }}/assets/uploads/pages/lifegroups.jpg)

## LifeGroups

### Make plans to attend the group that fits your schedule best!

<ul>
{% for group in site.data.smallGroups.lifeGroups %}
	<li>{{ group.time }}- {{ group.people }}- {{ group.childcare}}</li>
{% endfor %}
</ul>
