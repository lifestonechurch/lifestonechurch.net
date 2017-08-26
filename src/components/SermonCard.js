import React from 'react'
import Link from 'gatsby-link'
import './SermonCard.css'
import Card from './Card'

const SermonCard = ({image, title, date, speaker, passage}) =>
  <div className="SermonCard">
    <Card>
    {title} {date} {speaker}
    </Card>
  </div>

export default SermonCard