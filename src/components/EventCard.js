import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import {
  shortFormatDate,
  getDayOfWeek,
  getFirstStartDate,
  getLastEndDate,
} from '../utils/formatDate';
import * as COLORS from '../constants/colors';
import Card from './Card';
import { H3 } from './headers';

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

const EventCard = ({
  title,
  description,
  linkTo,
  startDate,
  endDate,
  dates,
}) => (
  <Container>
    <Link to={linkTo}>
      <Card>
        <H3>{title}</H3>
        {dates ? (
          <Date>
            {shortFormatDate(getFirstStartDate(dates))} -{' '}
            {shortFormatDate(getLastEndDate(dates))}
          </Date>
        ) : (
          <Date>
            {startDate && endDate
              ? `${shortFormatDate(startDate)} - ${shortFormatDate(endDate)}`
              : shortFormatDate(startDate)}
          </Date>
        )}
        {dates && dates.map(event => event.timeDescription).join(' or ')}
        <p>{description}</p>
        <LearnMore>Learn More</LearnMore>
      </Card>
    </Link>
  </Container>
);

EventCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkTo: PropTypes.string.isRequired,
  startDate: PropTypes.string,
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      repeatingSchedule: PropTypes.string,
      timeDescription: PropTypes.string,
    })
  ),
};

export default EventCard;
