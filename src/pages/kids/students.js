import React from 'react';
import styled from 'react-emotion';
import ImageGallery from 'react-image-gallery';
import EventCard from '../../components/EventCard';
import Banner from '../../components/Banner';
import SmallImage from '../../components/SmallImage';
import { getMonthNumber, getMonthName } from '../../utils/formatDate';
import * as COLORS from '../../constants/colors';
import Breadcrumbs from '../../components/Breadcrumbs';

import youth from './youth.jpg';
import series from './youth-series.jpg';

const title = 'Students Grade 6-12';

const Month = styled.div`
  font-size: 18px;
  color: ${COLORS.BRAND};
  margin: 10px 0px;
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
  console.log(images);

  const youthEvents = events.filter(
    ({ node }) =>
      node.ministry !== undefined &&
      node.ministry.map(m => m.name).includes('Youth')
  );

  return (
    <div>
      <Breadcrumbs
        path={[{ title: 'Home', url: '/' }, { title: 'Resources' }]}
        title={title}
      />
      <h1>{title}</h1>

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
        <h2>Current Series</h2>
      </Banner>

      <SmallImage center={true} src={series} />

      <p>
        Growing up, we started friendships with a game of tag or
        hide-and-go-seek. But in high school, things get complicated. Cliques
        can feel like the real-life version of getting picked last for
        dodgeball—the cool kids pick each other, and the rest slump in the
        corner, forgotten. Even worse, social media rules the hallways. Our
        popularity depends on the amount of “likes” our latest picture earned,
        the number of retweets we get, and how many people viewed our Snapchat
        story. People crowd around us online and at school, but many of us still
        feel lonely. Depressed, even. Some of us feel so excluded that we don't
        see the need for friends at all.
      </p>

      <p>
        It's time for a reality check: we need friends. Not just hang-out
        friends, but good friends who love, encourage, and challenge us.
      </p>

      <p>
        In this 4-part series, pastor Dhati Lewis unpacks true biblical
        friendship. He teaches students how God created us to need people and
        challenges students to choose godly friends. You'll also watch real-life
        stories of other teens who struggle with the realities of friendship.
        This study will empower teens to build solid friendships, to show
        kindness to nonbelievers, and to be a good friend.
      </p>

      <Banner>
        <h2>Events</h2>
      </Banner>

      {youthEvents.map(({ node }, i) => (
        <div key={node.id}>
          <EventCard
            linkTo={`/events/${node.fields.slug}`}
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
