import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import EventCard from '../../components/EventCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getFutureEvents } from '../../utils/formatDate';

const title = 'Events';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
`;

const Page = ({ data }) => {
  const events = data.allContentfulEvent.edges;
  const futureEvents = getFutureEvents(events);

  return (
    <Layout>
      <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />
      <H1>{title}</H1>

      <Container>
        {futureEvents.map((e, i) => (
          <EventCard
            key={e.id}
            linkTo={`/events/${e.fields.slug}`}
            title={e.name}
            description={e.fields.shortDescriptionFormatted}
            startDate={e.startDate}
            endDate={e.endDate}
            dates={e.dateAndRegistration}
            ministries={e.ministry}
            imageSizes={e.image && e.image.sizes}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query EventsQuery {
    upcomingEvents: file(
      relativePath: { eq: "pages/events/upcoming-events.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 940, maxHeight: 300) {
          ...GatsbyImageSharpSizes
        }
      }
    }
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
            sizes(maxWidth: 320) {
              ...GatsbyContentfulSizes
            }
          }
          ministry {
            id
            name
          }
          fields {
            slug
            shortDescriptionFormatted
          }
        }
      }
    }
  }
`;
