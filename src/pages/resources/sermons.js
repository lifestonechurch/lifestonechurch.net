import React from 'react';
import SermonCard from '../../components/SermonCard';
import Breadcrumbs from '../../components/Breadcrumbs';

import logo from '../../images/logo/logo2.jpg';

const title = 'Sermons';

const Page = ({ data }) => {
  const sermons = data.allContentfulSermon.edges;

  return (
    <div>
      <Breadcrumbs
        path={[{ title: 'Home', url: '/' }, { title: 'Resources' }]}
        title={title}
      />
      <h1>{title}</h1>

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
