import React from 'react';
import { H1 } from '../../components/headers';
import EventCard from '../../components/EventCard';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  getMonthNumber,
  getMonthName,
  getLastEndDate,
} from '../../utils/formatDate';

import upcomingEvents from './upcoming-events.jpg';

const title = 'Events';

const Page = ({ data }) => {
  const events = data.allContentfulEvent.edges;
  const futureEvents = events.filter(
    ({ node }) =>
      node.endDate
        ? new Date(node.endDate) > new Date()
        : node.startDate
          ? new Date(node.startDate) > new Date()
          : node.dateAndRegistration &&
            new Date(getLastEndDate(node.dateAndRegistration)) > new Date()
  );
  return (
    <div>
      <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />
      <H1>{title}</H1>

      <img src={upcomingEvents} alt="Upcoming Events" />

      {futureEvents.map(({ node }, i, array) => (
        <div key={node.id}>
          {i === 0 ||
          getMonthNumber(array[i - 1].node.startDate) <
            getMonthNumber(node.startDate) ? (
            <Banner>{getMonthName(node.startDate)}</Banner>
          ) : (
            ''
          )}
          <EventCard
            linkTo={`/events/${node.fields.slug}`}
            title={node.name}
            description={node.shortDescription}
            startDate={node.startDate}
            endDate={node.endDate}
            dates={node.dateAndRegistration}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;

export const query = graphql`
  query EventsQuery {
    allContentfulEvent(sort: { fields: [startDate], order: ASC }) {
      edges {
        node {
          id
          name
          startDate
          endDate
          dateAndRegistration {
            id
            timeDescription
            startDate
            endDate
            startTime
            endTime
            repeatingSchedule
            registrationLink
          }
          shortDescription
          description {
            description
          }
          image {
            id
            file {
              url
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
