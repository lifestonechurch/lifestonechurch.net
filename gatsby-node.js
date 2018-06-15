const path = require(`path`);
const slug = require(`slug`);
const Remarkable = require("remarkable");
const markdown = new Remarkable({ html: true });

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  const types = {
    EVENT: `ContentfulEvent`,
    SERMON: `ContentfulSermon`
  };

  if (node.internal.type === types.EVENT) {
    createNodeField({
      node,
      name: `slug`,
      value: slug(node.name, { lower: true })
    });
  } else if (node.internal.type === types.SERMON) {
    createNodeField({
      node,
      name: `slug`,
      value: slug(node.title, { lower: true })
    });
    const notes = getNode(node.notes___NODE);
    if (notes && notes.internal) {
      createNodeField({
        node,
        name: "notesFormatted",
        value: markdown.render(notes.internal.content)
      });
    }
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulEvent {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
        allContentfulSermon {
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
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.allContentfulEvent.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/event.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id
          }
        });
      });

      result.data.allContentfulSermon.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/sermon.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id
          }
        });
      });

      resolve();
    });
  });
};
