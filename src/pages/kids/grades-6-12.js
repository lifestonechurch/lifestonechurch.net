import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import EventCard from '../../components/EventCard';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
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

      <p>
        "We're meant to be." It's how all of our favorite movies, songs, and
        books talk about love—as if the secret to an amazing relationship is a
        little bit of destiny, a whole bunch of feelings, and a tiny dash of
        magic. So it makes sense, when we observe the not-so-perfect, real-life
        relationships modeled by our friends, parents, and favorite celebrities,
        that we might start to wonder, “Wait—is that how relationships are meant
        to be?” In this 4-week series, you'll give students a better lens for
        evaluating their current and future dating relationships as you help
        them see that the secret to a relationship that's "meant to be" is to
        stay close to Jesus, date with purpose, know who you're looking for, and
        keep sex in the right context.
      </p>

      {youthEvents.length ? (
        <>
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
        </>
      ) : null}

      <Banner>
        <H2>Photos</H2>
      </Banner>

      <GalleryContainer>
        <Gallery images={images} />
      </GalleryContainer>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query YouthQuery {
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
