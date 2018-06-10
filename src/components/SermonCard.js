import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import './SermonCard.css';
import Card from './Card';

const Container = styled.div`
  & a {
    text-decoration: none;
  }
`;

const SermonCard = ({linkTo, image, title, date, speaker, passage}) => (
  <Container>
    <Link to={linkTo}>
      <Card>
        <div className="SermonCard">
          <div className="SermonCard__Image">
            <img src={image} />
          </div>

          <div className="SermonCard__Text">
            <div className="SermonCard__Title">
              <h2>{title}</h2>
            </div>

            <div className="SermonCard__Date">{date}</div>

            <div className="SermonCard__Speaker">{speaker}</div>

            <div className="SermonCard__Passage">{passage}</div>
          </div>
        </div>
      </Card>
    </Link>
  </Container>
);

SermonCard.propTypes = {
  linkTo: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  speaker: PropTypes.string,
  passage: PropTypes.string,
};

export default SermonCard;
