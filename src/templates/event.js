import React from 'react';
import styled from 'react-emotion';

import { H1 } from '../components/headers';
import Breadcrumbs from '../components/Breadcrumbs';
import EmbedForm from '../components/EmbedForm';
import Card from '../components/Card';
import { shortFormatDate, getDayOfWeek } from '../utils/formatDate';
import * as COLORS from '../constants/colors';

const Image = styled.img`
  max-height: 400px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
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

const Register = styled.div`
  color: ${COLORS.BRAND};
`;

export default ({ data }) => {
  const event = data.contentfulEvent;
  return (
    <div>
      <Breadcrumbs
        path={[
          { title: 'Home', url: '/' },
          { title: 'Events', url: '/events' },
        ]}
        title={event.name}
      />
      <H1>{event.name}</H1>

      {event.image && <Image src={event.image.file.url} />}

      {!event.dateAndRegistration && (
        <div>
          <p>
            {event.startDate &&
              `${getDayOfWeek(event.startDate)} ${shortFormatDate(
                event.startDate
              )}`}
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
            <EventContainer>
              <a
                href={e.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card>
                  <h2>{e.timeDescription}</h2>
                  <p>
                    {shortFormatDate(e.startDate)} -{' '}
                    {shortFormatDate(e.endDate)}
                  </p>
                  <p>
                    {e.startTime} - {e.endTime}
                  </p>
                  <Register>Register</Register>
                </Card>
              </a>
            </EventContainer>
          ))}
        </MultipleEventContainer>
      ) : (
        <EmbedForm src={event.registrationLink} />
      )}
    </div>
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
        title
        file {
          url
          fileName
          contentType
        }
      }
      registrationLink
    }
  }
`;
