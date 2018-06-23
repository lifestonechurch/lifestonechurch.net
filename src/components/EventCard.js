import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { shortFormatDate } from '../utils/formatDate';
import * as COLORS from '../constants/colors';
import Card from './Card';

const Container = styled.div`
  & a {
    text-decoration: none;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.6);
  line-height: 2em;
  margin-bottom: 10px;
`;

const LearnMore = styled.div`
  color: ${COLORS.BRAND};
`;

const EventCard = ({ title, startDate, endDate, description, linkTo }) => (
  <Container>
    <Link to={linkTo}>
      <Card>
        <h3>{title}</h3>
        <Date>
          {endDate
            ? `${shortFormatDate(endDate)} - ${shortFormatDate(endDate)}`
            : shortFormatDate(startDate)}
        </Date>
        <p>{description}</p>
        <LearnMore>Learn More</LearnMore>
      </Card>
    </Link>
  </Container>
);

EventCard.propTypes = {
  title: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
  linkTo: PropTypes.string.isRequired,
};

export default EventCard;
