import React from "react";
import SermonCard from "../../components/SermonCard";

const Page = ({ data }) => {
  const sermons = data.allContentfulSermon.edges;

  return (
    <div>
      <h1>Sermons</h1>

      {sermons.map(({ node }) => (
        <SermonCard
          key={node.id}
          linkTo={node.fields.slug}
          image={
            node.sermonSeries &&
            node.sermonSeries.image &&
            node.sermonSeries.image.file.url
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
