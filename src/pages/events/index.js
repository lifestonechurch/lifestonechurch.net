import React from 'react';
import Img from 'gatsby-image';
import styled from 'react-emotion';

import { H1 } from '../../components/headers';
import EventCard from '../../components/EventCard';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  getMonthNumber,
  getMonthName,
  getLastEndDate,
} from '../../utils/formatDate';

const title = 'Events';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
`;

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

      <Img
        sizes={data.upcomingEvents.childImageSharp.sizes}
        style={{ maxWidth: 940 }}
        alt="Upcoming Events"
      />

      <Container>
        {futureEvents.map(({ node }, i) => (
          <EventCard
            key={node.id}
            linkTo={`/events/${node.fields.slug}`}
            title={node.name}
            description={node.shortDescription}
            startDate={node.startDate}
            endDate={node.endDate}
            dates={node.dateAndRegistration}
            ministries={node.ministry}
            imageSizes={node.image.sizes}
          />
        ))}
      </Container>
    </div>
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
          }
        }
      }
    }
  }
`;
