import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import Card from '../components/Card';
import Button from '../components/Button';
import SermonCard from '../components/SermonCard';
import ImageGallery from 'react-image-gallery';

import benPreaching from './benPreaching.jpg';

import 'react-image-gallery/styles/css/image-gallery.css';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
  max-width: 1200px;
  margin: 0 auto;
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

const IndexPage = ({data}) => {
  const images = data.allContentfulSlider.edges.map(({node}) => ({
    original: node.image.file.url,
    link: node.link,
  }));

  return (
    <div>
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
        onClick={e => console.log(e)}
      />
      <Row>
        <div>
          <RowHeader>Welcome!</RowHeader>
          <p>
            We’re a Bible based church in Riverton, Utah. We would love for you
            to <Link to="/visit/">visit us</Link>!
          </p>
        </div>
        <div>
          <RowHeader>Latest Message</RowHeader>
          <LatestSermon>
            <Link to="/resources/sermons/beautiful-mess-3/">
              <img src={benPreaching} alt="" />
              <LatestSermonText>
                <h4>
                  Beautiful Mess: Week 3 - The “Secret Wisdom”... Is It In You?
                </h4>
                1 Corinthians 2:6-16
              </LatestSermonText>
            </Link>
          </LatestSermon>
        </div>
        <div>
          <RowHeader>Upcoming Events</RowHeader>
        </div>
      </Row>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
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
  }
`;
