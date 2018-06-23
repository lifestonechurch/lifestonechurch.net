import React from 'react';

export default ({ data }) => {
  const event = data.contentfulEvent;
  return (
    <div>
      <h1>{event.name}</h1>
      {event.image && <img src={event.image.file.url} />}
      {event.fields.descriptionFormatted && (
        <div
          dangerouslySetInnerHTML={{
            __html: event.fields.descriptionFormatted,
          }}
        />
      )}
    </div>
  );
};

export const query = graphql`
  query SermonEventQuery($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      id
      name
      startDate
      endDate
      startTime
      endTime
      repeatingSchedule
      blockOutDates
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
    }
  }
`;
