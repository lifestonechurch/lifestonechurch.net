import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Card from './Card';

const Container = styled.div`
  & a {
    text-decoration: none;
  }
`;

const EventCard = ({ title, date, description, linkTo }) => (
  <Container>
    <Link to={linkTo}>
      <Card>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
        <p>Learn More</p>
      </Card>
    </Link>
  </Container>
);

EventCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  linkTo: PropTypes.string.isRequired,
};

export default EventCard;
