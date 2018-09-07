import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { H1, H2 } from '../components/headers';
import Breadcrumbs from '../components/Breadcrumbs';
import formatDate from '../utils/formatDate';

// TODO: use OtherStuff on page
// const OtherStuff = ({ data }) => {
//   const sermon = data.contentfulSermon;
//   return (
//     <div>
//       {sermon.speaker.map(
//         s => s.photo && s.photo.file && <img src={s.photo.file.url} />
//       )}
//       <div>{sermon.audioDuration}</div>
//       <div>{sermon.sermonSeries && sermon.sermonSeries.name}</div>
//       <img
//         src={
//           sermon.sermonSeries &&
//           sermon.sermonSeries.image &&
//           sermon.sermonSeries.image.file.url
//         }
//       />
//     </div>
//   );
// };

const Audio = styled.audio`
  width: 100%;
  margin: 40px 0;
`;

export default ({ data }) => {
  const sermon = data.contentfulSermon;

  return (
    <Layout>
      <Breadcrumbs
        path={[
          { title: 'Home', url: '/' },
          { title: 'Resources', url: '/resources' },
          { title: 'Sermons' },
        ]}
        title={sermon.title}
      />
      <H1>{sermon.title}</H1>

      <div>{formatDate(sermon.date)}</div>
      <div>{sermon.speaker.map(s => <span key={s.id}>{s.name}</span>)}</div>
      <div>{sermon.mainScripture}</div>
      <Audio controls src={sermon.audioUrl} />
      {sermon.fields.notesFormatted && (
        <div>
          <H2>Sermon Notes</H2>
          <div
            dangerouslySetInnerHTML={{
              __html: sermon.fields.notesFormatted,
            }}
          />
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query SermonTemplateQuery($id: String!) {
    contentfulSermon(id: { eq: $id }) {
      title
      date
      audioUrl
      audioDuration
      sermonSeries {
        name
        image {
          title
          file {
            url
          }
        }
      }
      speaker {
        id
        name
        photo {
          file {
            url
          }
        }
      }
      mainScripture
      fields {
        notesFormatted
      }
    }
  }
`;
