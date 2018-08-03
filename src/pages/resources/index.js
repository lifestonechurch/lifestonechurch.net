import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { H1 } from '../../components/headers';
import SermonCard from '../../components/SermonCard';
import Breadcrumbs from '../../components/Breadcrumbs';

import logo from '../../images/logo/logo2.jpg';
import itunesImage from './itunes.png';
import rssImage from './rss.png';

const title = 'Resources';

const SubscribeImage = styled.img`
  margin-right: 12px;
`;

const Page = ({ data }) => {
  const sermons = data.allContentfulSermon.edges;

  return (
    <div>
      <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />

      <H1>{title}</H1>

      <div>
        <a href="https://itunes.apple.com/us/podcast/lifestone-church/id968942229">
          <SubscribeImage src={itunesImage} />
        </a>
        <Link to="/feed.rss">
          <SubscribeImage src={rssImage} />
        </Link>
      </div>

      {sermons.map(({ node }) => (
        <SermonCard
          key={node.id}
          linkTo={`/resources/sermons/${node.fields.slug}`}
          image={
            (node.sermonSeries &&
              node.sermonSeries.image &&
              node.sermonSeries.image.file.url) ||
            logo
          }
          title={node.title}
          date={node.date}
          speakers={node.speaker.map(s => s.name)}
          passage={node.mainScripture}
        />
      ))}
    </div>
  );
};

export default Page;

export const query = graphql`
  query SermonsQuery {
    allContentfulSermon(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          title
          date
          audioUrl
          audioDuration
          audioLength
          sermonSeries {
            name
            image {
              title
              file {
                url
              }
            }
          }
          childContentfulSermonNotesTextNode {
            notes
          }
          speaker {
            name
            photo {
              file {
                url
              }
            }
          }
          mainScripture
          notes {
            notes
          }
        }
      }
    }
  }
`;
