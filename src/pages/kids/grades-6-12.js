import React from 'react';
import styled from 'react-emotion';
import ImageGallery from 'react-image-gallery';

import { H1 } from '../../components/headers';
import EventCard from '../../components/EventCard';
import Banner from '../../components/Banner';
import { H2 } from '../../components/headers';
import SmallImage from '../../components/SmallImage';
import { getMonthNumber, getMonthName } from '../../utils/formatDate';
import * as COLORS from '../../constants/colors';
import Breadcrumbs from '../../components/Breadcrumbs';

import youthImage from './youth.jpg';
import seriesImage from './youth-series.png';

const title = 'Grades 6-12';

const Month = styled.div`
  font-size: 18px;
  color: ${COLORS.BRAND};
  margin: 10px 0px;
`;

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
`;

const GalleryContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Page = ({ data }) => {
  const events = data.allContentfulEvent.edges;
  const images = data.contentfulImageGallery.images.map(i => ({
    original: i.file.url,
  }));

  const youthEvents = events.filter(
    ({ node }) =>
      node.ministry !== undefined &&
      node.ministry.map(m => m.name).includes('Youth') &&
      new Date(node.startDate) > new Date()
  );

  return (
    <div>
      <Breadcrumbs
        path={[{ title: 'Home', url: '/' }, { title: 'Kids' }]}
        title={title}
      />
      <H1>{title}</H1>

      <SmallImage src={youthImage} />

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
        <H2>Current Series</H2>
      </Banner>

      <SmallImage center={true} src={seriesImage} />

      <p>
        It's so easy to get lulled into a sleepy faith, seeing our relationship
        with God as just what we do on Sundays or at youth group. We're tempted
        to live for ourselves, pursuing the fleeting pleasures of sin instead of
        pursuing a vibrant relationship with Jesus Christ. But the time for
        sleeping is over—no more snooze button, no more pulling the covers over
        your head. It's time to wake up to the reality of the life we've been
        called to live in Christ.
      </p>

      <p>
        In this series, author and church planter D.A. Horton will call students
        to awaken their faith and reach their world—their friends, neighbors and
        classmates—with the gospel of Jesus Christ. He will unpack what the
        Bible says about the life-giving, soul-awakening message of the gospel
        and how prayer, study of God's Word, and service equip and empower
        followers of Christ to overcome sin. D.A also challenges students to
        boldly seek the advancement of God's Kingdom at home and around the
        world.
      </p>

      <Banner>
        <H2>Events</H2>
      </Banner>

      <EventContainer>
        {youthEvents.map(({ node }, i) => (
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
      </EventContainer>

      <Banner>
        <H2>Photos</H2>
      </Banner>

      <GalleryContainer>
        <ImageGallery items={images} showThumbnails={false} />
      </GalleryContainer>
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
          fields {
            slug
          }
          ministry {
            name
          }
        }
      }
    }
    contentfulImageGallery(id: { eq: "c32DZGuSOIMA4W2IYEiAMga" }) {
      title
      images {
        id
        title
        file {
          url
        }
      }
    }
  }
`;
