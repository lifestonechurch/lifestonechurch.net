import React from 'react'
import Link from 'gatsby-link'
import './SermonCard.css'
import Card from './Card'

const SermonCard = ({image, title, date, speaker, passage}) =>
  <div className="SermonCard">
    <Card>
      <div className="SermonCard__Image"> 
        <img src={image} />
      </div>

      <div className="SermonCard__Text">
        <div className="SermonCard__Title">
          <h2>{title}</h2>
        </div>

        <p>{date}</p>

        <p>{speaker}</p>

        <p>{passage}</p>

      </div>
    </Card>
  </div>

export default SermonCard
