import React from 'react'
import Link from 'gatsby-link'
import './SermonCard.css'
import Card from './Card'

const SermonCard = ({image, title, date, speaker, passage}) =>

  <Card >
    <div className="SermonCard">
      <div className="SermonCard__Image"> 
        <img src={image} />
      </div>

      <div className="SermonCard__Text">
        <div className="SermonCard__Title">
          <h2>{title}</h2>
        </div>

        <div className="SermonCard__Date">{date}</div>

        <div className="SermonCard__Speaker" >{speaker}</div>

        <div className="SermonCard__Passage" >{passage}</div>

      </div>
    </div>
  </Card>
  

export default SermonCard
