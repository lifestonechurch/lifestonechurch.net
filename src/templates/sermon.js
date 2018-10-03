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
const SermonImage = styled('img')`
max-height: 45px;
margin-right: 5px;
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
            <H1><SermonImage src={ (sermon.sermonSeries.image ? sermon.sermonSeries.image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA7CAYAAAA+XsUpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDBENzMyQzlBRTMxMTFFNEJGNjJCQjhENjY4Q0Y3MjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDBENzMyQ0FBRTMxMTFFNEJGNjJCQjhENjY4Q0Y3MjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRkRFMDhCQUFFMzExMUU0QkY2MkJCOEQ2NjhDRjcyMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMEQ3MzJDOEFFMzExMUU0QkY2MkJCOEQ2NjhDRjcyMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiRzKBkAAA74SURBVHja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') } />
            {sermon.title}</H1>

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
