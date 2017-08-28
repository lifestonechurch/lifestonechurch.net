import React from 'react'
import Link from 'gatsby-link'
import './EventCard.css'
import Card from './Card'

const EventCard = ({title, date, description, linkTo}) =>
<a href={linkTo}>
  <Card >
    <div className="EventCard">
    	<div className="EventCard__Title">{title}</div>
    	<div className="EventCard__Date">{date}</div>
    	<div className="EventCard__Description">{description}</div>
    	<div className="EventCard__LearnMore">Learn More</div>
    </div>
  </Card>
  </a>
  

export default EventCard