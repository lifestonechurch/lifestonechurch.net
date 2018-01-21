const path = require(`path`);
const slug = require(`slug`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  const types = {
    EVENT: `ContentfulEvent`,
  };

  if (node.internal.type === types.EVENT) {
    createNodeField({
      node,
      name: `slug`,
      value: slug(node.name, { lower: true }),
    });
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
            id: node.id,
          },
        });
      });
      resolve();
    });
  });
};
