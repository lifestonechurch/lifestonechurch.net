import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import {
  shortFormatDate,
  getFirstStartDate,
  getLastEndDate,
} from '../utils/formatDate';
import * as COLORS from '../constants/colors';
import HoverCard from './HoverCard';
import Tag from './Tag';
import { H3 } from './headers';

const Container = styled.div`
  & a, & a:hover {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }

  > div {
    height: 100%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
`;

const TextArea = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
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
  ministries,
  imageSizes,
}) => (
  <Container>
    <HoverCard>
      <Link to={linkTo}>
        <InnerContainer>
	       {imageSizes && (
		      <Img sizes={imageSizes} style={{ width: '100%' }} />
			 )}
          <TextArea>
            <div>
              <H3>{title}</H3>

              {ministries && (
                <Tag color={COLORS.BRAND}>{ministries[0].name}</Tag>
              )}

              {dates ? (
                <Date>
                  {shortFormatDate(getFirstStartDate(dates))} -{' '}
                  {shortFormatDate(getLastEndDate(dates))}
                </Date>
              ) : (
                <Date>
                  {startDate && endDate
                    ? `${shortFormatDate(startDate)} - ${shortFormatDate(
                        endDate
                      )}`
                    : shortFormatDate(startDate)}
                </Date>
              )}
              {dates && (
                <p>{dates.map(event => event.timeDescription).join(' or ')}</p>
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
            <LearnMore>Learn More</LearnMore>
          </TextArea>
        </InnerContainer>
      </Link>
    </HoverCard>
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
