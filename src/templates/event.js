import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import { H1 } from '../components/headers';
import Breadcrumbs from '../components/Breadcrumbs';
import EmbedForm from '../components/EmbedForm';
import HoverCard from '../components/HoverCard';
import {
  shortFormatDate,
  getDayOfWeek,
  getCalendarURl,
} from '../utils/formatDate';
import * as COLORS from '../constants/colors';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const MultipleEventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    width: 500px;
    max-width: 90%;
  }
`;

const EventContainer = styled.div`
  & a {
    text-decoration: none;
  }
`;

const CardInner = styled.div`
  padding: 20px;
`;

const Register = styled.div`
  color: ${COLORS.BRAND};
`;

export default ({ data }) => {
  const event = data.contentfulEvent;
  return (
    <Layout>
      <Breadcrumbs
        path={[
          { title: 'Home', url: '/' },
          { title: 'Events', url: '/events' },
        ]}
        title={event.name}
      />
      <H1>{event.name}</H1>

      {event.image && (
        <Image>
          <Img sizes={event.image.sizes} />
        </Image>
      )}

      {!event.dateAndRegistration && (
        <div>
          <a
            href={getCalendarURl(
              event.startDate,
              event.endDate,
              event.startTime,
              event.endTime,
              event.name
            )}
          >
            ✚ Add to Google Calendar
          </a>
          <p>
            {event.startDate && event.endDate
              ? `${getDayOfWeek(event.startDate)} ${shortFormatDate(
                  event.startDate
                )} - ${getDayOfWeek(event.endDate)} ${shortFormatDate(
                  event.endDate
                )}`
              : shortFormatDate(event.startDate)}
          </p>
          <p>
            {event.startTime && event.endTime
              ? `${event.startTime} - ${event.endTime}`
              : event.startTime}
          </p>
        </div>
      )}

      {event.fields.descriptionFormatted && (
        <div
          dangerouslySetInnerHTML={{
            __html: event.fields.descriptionFormatted,
          }}
        />
      )}

      {event.dateAndRegistration ? (
        <MultipleEventContainer>
          {event.dateAndRegistration.map(e => (
            <EventContainer key={e.id}>
              <a
                href={e.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverCard>
                  <CardInner>
                    <h2>{e.timeDescription}</h2>
                    <a
                      href={getCalendarURl(
                        e.startDate,
                        e.endDate,
                        e.startTime,
                        e.endTime,
                        event.name
                      )}
                    >
                      ✚ Add to Google Calendar
                    </a>
                    <p>
                      {shortFormatDate(e.startDate)} -{' '}
                      {shortFormatDate(e.endDate)}
                    </p>
                    <p>
                      {e.startTime} - {e.endTime}
                    </p>
                    <Register>Register</Register>
                  </CardInner>
                </HoverCard>
              </a>
            </EventContainer>
          ))}
        </MultipleEventContainer>
      ) : (
        <EmbedForm src={event.registrationLink} />
      )}
    </Layout>
  );
};

export const query = graphql`
  query SermonEventQuery($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      id
      name
      startDate
      endDate
      startTime
      endTime
      dateAndRegistration {
        id
        timeDescription
        startDate
        endDate
        startTime
        endTime
        registrationLink
      }
      fields {
        descriptionFormatted
      }
      image {
        sizes(maxWidth: 700) {
          ...GatsbyContentfulSizes
        }
      }
      registrationLink
    }
  }
`;
