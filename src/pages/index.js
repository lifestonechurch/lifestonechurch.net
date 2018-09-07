import React from 'react';
import styled from 'react-emotion';
import ImageGallery from 'react-image-gallery';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import HomeLayout from '../components/HomeLayout';
import { H4 } from '../components/headers';
import SmallCalendar from '../components/SmallCalendar';
import { getFutureEvents } from '../utils/formatDate';

import 'react-image-gallery/styles/css/image-gallery.css';

const Row = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

const RowItem = styled.div`
  width: 33.33%;

  @media (max-width: 940px) {
    width: 100%;
  }
`;

const RowContainer = styled.div`
  padding: 8px;
`;

const RowHeader = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 35px;
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 2em;
  background-color: #008f01;
  color: #fff;
`;

const LatestSermon = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const LatestSermonText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: rgba(50, 50, 50, 0.6);
  color: #fff;
  padding: 10px;

  h4 {
    color: #fff;
  }
`;

const IndexPage = ({ data }) => {
  const images = data.allContentfulSlider.edges.map(({ node }) => ({
    original: node.image.file.url,
    originalAlt: node.shortDescription,
    link: node.link,
  }));
  const sermon = data.allContentfulSermon.edges[0].node;
  const events = data.allContentfulEvent.edges;
  const futureEvents = getFutureEvents(events).slice(0, 7);

  return (
    <HomeLayout>
      <ImageGallery
        items={images}
        renderItem={item => {
          return (
            <div className="image-gallery-image">
              <Link to={`/${item.link}`}>
                <img
                  src={item.original}
                  alt={item.originalAlt}
                  srcSet={item.srcSet}
                  sizes={item.sizes}
                />
              </Link>
            </div>
          );
        }}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoplay={true}
      />
      <Row>
        <RowItem>
          <RowHeader>Welcome!</RowHeader>
          <RowContainer>
            <p>
              We're a Bible based church in Riverton, Utah. We would love for
              you to <Link to="/about/visit/">visit us</Link>!
            </p>
          </RowContainer>
        </RowItem>
        <RowItem>
          <RowHeader>Latest Message</RowHeader>
          <RowContainer>
            <LatestSermon>
              <Link to={`/resources/sermons/${sermon.fields.slug}`}>
                <Img
                  sizes={data.preaching.childImageSharp.sizes}
                  style={{ width: '100%' }}
                />
                <LatestSermonText>
                  <H4>{sermon.title}</H4>
                  {sermon.mainScripture}
                </LatestSermonText>
              </Link>
            </LatestSermon>
          </RowContainer>
        </RowItem>
        <RowItem>
          <RowHeader>Upcoming Events</RowHeader>
          <RowContainer>
            <SmallCalendar events={futureEvents} />
          </RowContainer>
        </RowItem>
      </Row>
    </HomeLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    preaching: file(relativePath: { eq: "pages/preaching.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 360) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    allContentfulSlider {
      edges {
        node {
          id
          name
          link
          image {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSermon(sort: { fields: [date], order: DESC }, limit: 1) {
      edges {
        node {
          title
          fields {
            slug
          }
          mainScripture
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
          fields {
            slug
          }
        }
      }
    }
  }
`;
