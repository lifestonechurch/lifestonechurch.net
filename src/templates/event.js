import React from 'react';
import styled from 'react-emotion';
import { H1 } from '../components/headers';
import Breadcrumbs from '../components/Breadcrumbs';

const Image = styled.img`
  max-height: 400px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
`;

const Registration = styled.iframe`
  display: block;
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
  height: 700px;
  border: 1px solid #fff;
`;

export default ({ data }) => {
  const event = data.contentfulEvent;
  return (
    <div>
      <Breadcrumbs
        path={[
          { title: 'Home', url: '/' },
          { title: 'Events', url: '/events' },
        ]}
        title={event.name}
      />
      <H1>{event.name}</H1>

      {event.image && <Image src={event.image.file.url} />}
      {event.fields.descriptionFormatted && (
        <div
          dangerouslySetInnerHTML={{
            __html: event.fields.descriptionFormatted,
          }}
        />
      )}

      <Registration src={event.registrationLink} />
    </div>
  );
};

export const query = graphql`
  query SermonEventQuery($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      id
      name
      startDate
      startTime
      endTime
      fields {
        descriptionFormatted
      }
      image {
        title
        file {
          url
          fileName
          contentType
        }
      }
      registrationLink
    }
  }
`;
