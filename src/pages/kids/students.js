import React from "react";
import styled from "react-emotion";
import EventCard from "../../components/EventCard";
import Banner from "../../components/Banner";
import PhotoAlbum from "../../components/PhotoAlbum";
import SmallImage from "../../components/SmallImage";
import { getMonthNumber, getMonthName } from "../../utils/formatDate";
import * as COLORS from "../../constants/colors";

import youth from "./youth.jpg";

const Month = styled.div`
  font-size: 18px;
  color: ${COLORS.BRAND};
  margin: 10px 0px;
`;

const Page = ({ data }) => {
  const events = data.allContentfulEvent.edges;

  const youthEvents = events.filter(
    ({ node }) =>
      node.ministry !== undefined &&
      node.ministry.map(m => m.name).includes("Youth")
  );

  return (
    <div>
      <h1>Students Grade 6-12</h1>

      <SmallImage src={youth} />

      <p>
        We exist to encourage and partner with the parents of Jr./Sr. High
        students to help guide kids through their spiritual journey.  Our desire
        is to see students empowered with the message of the gospel so that they
        find their identity and security in Christ alone.  We meet every
        Wednesday night to build up and encourage one another with a biblical
        message so our students can stand firm in their faith and be leaders on
        our campuses and in our neighborhoods and…. just because its fun!!!  On
        Sunday mornings the Jr. High &amp; Sr. High students attend church with
        their parents.
      </p>

      <em>We meet every Wednesday!</em>

      <p>Wednesdays, 6:30-8pm- Grades 6th-12th- Lifestone Church building</p>

      <p>
        Grab your friends and meet us next Wednesday as we continue learning who
        Jesus really was and is-and how this changes everything. Join in with
        students your age for crazy games and encouraging Bible study!
      </p>

      <Banner>
        <h2>Events</h2>
      </Banner>

      {youthEvents.map(({ node }, i) => (
        <div>
          {i === 0 ||
          getMonthNumber(youthEvents[i - 1].node.startDate) <
            getMonthNumber(node.startDate) ? (
            <Month>{getMonthName(node.startDate)}</Month>
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

      <Banner>
        <h2>Photos</h2>
      </Banner>

      <PhotoAlbum
        albumId="72157652789307104"
        coverImage="https://c1.staticflickr.com/5/4185/34566550455_64630617dc_z.jpg"
      />
    </div>
  );
};

export default Page;

export const query = graphql`
  query StudentsQuery {
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
          ministry {
            name
          }
        }
      }
    }
  }
`;
