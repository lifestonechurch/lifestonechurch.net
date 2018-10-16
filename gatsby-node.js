const path = require(`path`);
const slug = require(`slug`);
const Remarkable = require('remarkable');
const markdown = new Remarkable({ html: true });

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  const types = {
    POST: `ContentfulPost`,
    EVENT: `ContentfulEvent`,
    SERMON: `ContentfulSermon`,
    SMALL_GROUP: `ContentfulSmallGroup`,
  };

  if (node.internal) {
    if (node.internal.type === types.EVENT) {
      createNodeField({
        node,
        name: `slug`,
        value: slug(node.name, { lower: true }),
      });
      const description = getNode(node.description___NODE);
      if (description && description.internal) {
        createNodeField({
          node,
          name: 'descriptionFormatted',
          value: markdown.render(description.internal.content),
        });
      }
      if (node.shortDescription) {
        createNodeField({
            node,
            name: `shortDescriptionFormatted`,
            value: markdown.render(node.shortDescription),
        });
      }
    } else if (node.internal.type === types.SERMON) {
      createNodeField({
        node,
        name: `slug`,
        value: slug(node.title, { lower: true }),
      });
      const notes = getNode(node.notes___NODE);
      if (notes && notes.internal) {
        createNodeField({
          node,
          name: 'notesFormatted',
          value: notes.internal.content
            ? markdown.render(notes.internal.content)
            : ``,
        });
      }
    } else if (node.internal.type === types.SMALL_GROUP) {
      const contact = getNode(node.contact___NODE);
      if (contact && contact.internal && contact.internal.content) {
        createNodeField({
          node,
          name: 'contactFormatted',
          value: markdown.render(contact.internal.content),
        });
      }
    } else if (node.internal.type === types.POST) {
      createNodeField({
        node,
        name: `slug`,
        value: slug(node.title, { lower: true }),
      });
      const body = getNode(node.body___NODE);
      if (body && body.internal) {
        createNodeField({
          node,
          name: 'bodyFormatted',
          value: markdown.render(body.internal.content),
        });
      }
    }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
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
            }
          }
        }
        allContentfulPost {
          edges {
            node {
              id
              title
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
          path: `events/${node.fields.slug}`,
          component: path.resolve(`./src/templates/event.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id,
          },
        });
      });

      result.data.allContentfulSermon.edges.forEach(({ node }) => {
        createPage({
          path: `resources/sermons/${node.fields.slug}`,
          component: path.resolve(`./src/templates/sermon.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id,
          },
        });
      });

      result.data.allContentfulPost.edges.forEach(({ node }) => {
        createPage({
          path: `resources/devotionals/${node.fields.slug}`,
          component: path.resolve(`./src/templates/devotional.js`),
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
