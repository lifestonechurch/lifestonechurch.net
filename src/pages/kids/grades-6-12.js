import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ImageGallery from 'react-image-gallery';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import EventCard from '../../components/EventCard';
import Banner from '../../components/Banner';
import { H2 } from '../../components/headers';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Grades 6-12';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const FullWidthImage = styled.div`
  width: 100%;
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
      node.ministry &&
      node.ministry.map(m => m.name).includes('Youth') &&
      new Date(node.startDate) > new Date()
  );

  return (
    <Layout>
      <Breadcrumbs
        path={[{ title: 'Home', url: '/' }, { title: 'Kids' }]}
        title={title}
      />
      <H1>{title}</H1>

      <FullWidthImage>
        <Img sizes={data.youthImage.childImageSharp.sizes} />
      </FullWidthImage>

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

      <Image>
        <Img sizes={data.youthSeriesImage.childImageSharp.sizes} />
      </Image>

      <p>A 4-week series on authority</p>

      <p>
        Raise your hand if you’ve ever wanted to scream, “You’re not the boss of
        me!” (You can also raise your hand if you have, in fact, actually
        screamed it.) Especially when we’re teenagers, we tend to push back on
        the people, places, and things that control and hold authority over us.
        But here’s the catch: whether we admit it or not, we’ve all given
        someone (or something) control of our lives. In this 4-week series,
        We'll challenge students to consider who, or what, they’ve allowed to be
        their boss. Because whether it’s the god of me, the god of stuff, the
        god of worry, or the god of obsession, we all know what it’s like to
        have an authority problem
      </p>

      <Banner>
        <H2>The Lunch Table Challenge</H2>
      </Banner>

      <Image>
        <Img sizes={data.lunchTableImage.childImageSharp.sizes} />
      </Image>

      <p>
        THE LUNCH TABLE CHALLENGE!!! Starting September 5th... Your mission, if
        you choose to accept it... SPEND TIME WITH OTHERS around the lunch
        table. If we want to grow spiritually, we need to be engaged in healthy
        community and Christlike relationships with others — with people who
        share our beliefs, as well as with people who don’t.
      </p>

      <p>
        We challenge YOU in leading strategic conversations with your friends
        over lunch during your school lunch period for four weeks. You don't
        have to do this on your own! We challenge you to collaborate with other
        students from Lifestone church who attend the same school! Don't worry!
        Your AWESOME Lifestone Youth Leaders will give you all the tools you'll
        need to succeed!
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
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query YouthQuery {
    lunchTableImage: file(
      relativePath: { eq: "pages/kids/lunch-table-challenge.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    youthImage: file(relativePath: { eq: "pages/kids/youth.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    youthSeriesImage: file(
      relativePath: { eq: "pages/kids/youth-series.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 700) {
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
          fields {
            slug
          }
          ministry {
            name
          }
        }
      }
    }
    contentfulImageGallery(id: { eq: "ea3eb51a-01b5-527b-9d66-4926b3028efa" }) {
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
