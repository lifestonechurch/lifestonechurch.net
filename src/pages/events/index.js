import React from "react";
import EventCard from "../../components/EventCard";
import Banner from "../../components/Banner";
import { getMonthNumber, getMonthName } from "../../utils/formatDate";

import upcomingEvents from "./upcoming-events.jpg";

const Page = ({ data }) => {
  const events = data.allContentfulEvent.edges;
  return (
    <div>
      <h1>Events</h1>

      <img src={upcomingEvents} alt="Upcoming Events" />

      {events.map(({ node }, i) => (
        <div>
          {i !== 0 &&
          getMonthNumber(events[i - 1].node.startDate) <
            getMonthNumber(node.startDate) ? (
            <Banner>{getMonthName(node.startDate)}</Banner>
          ) : (
            ""
          )}
          <EventCard
            linkTo={node.fields.slug}
            startDate={node.startDate}
            endDate={node.endDate}
            title={node.name}
            description={node.shortDescription}
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
