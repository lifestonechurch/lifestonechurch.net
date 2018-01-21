import React from 'react';
import EventCard from '../../components/EventCard';
import upcomingEvents from './upcoming-events.jpg';

const Page = ({ data }) => {
  const events = data.allContentfulEvent.edges;
  return (
    <div>
      <h1>Events</h1>

      <img src={upcomingEvents} alt="Upcoming Events" />

      {events.map(({ node }) => (
        <EventCard
          linkTo={node.fields.slug}
          title={node.name}
          description={node.shortDescription}
        />
      ))}
    </div>
  );
};

export default Page;

export const query = graphql`
  query EventsQuery {
    allContentfulEvent {
      edges {
        node {
          id
          name
          startDate
          endDate
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
