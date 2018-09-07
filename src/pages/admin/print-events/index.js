import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../../components/layout';

class PrintEvents extends React.Component {
  state = {
    hiddenImages: {},
  };

  hideImage = id => {
    this.setState(state => ({
      ...state,
      hiddenImages: {
        ...state.hiddenImages,
        [id]: true,
      },
    }));
  };

  shouldShowImage = id => !!this.state.hiddenImages[id];

  render() {
    const { data } = this.props;
    return (
      <Layout>
        {data.allContentfulEvent.edges.map(
          ({ node }) =>
            node.image &&
            !this.shouldShowImage(node.id) && (
              <img
                src={node.image.file.url}
                alt={node.image.description}
                onClick={() => this.hideImage(node.id)}
              />
            )
        )}
      </Layout>
    );
  }
}

export default PrintEvents;

export const query = graphql`
  query PrintEventsQuery {
    allContentfulEvent(sort: { fields: [startDate], order: ASC }) {
      edges {
        node {
          id
          image {
            description
            file {
              url
            }
          }
        }
      }
    }
  }
`;
