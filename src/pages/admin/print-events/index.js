import React from 'react';
import styled from 'react-emotion';

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
      <div>
        {data.allContentfulEvent.edges.map(
          ({ node }) =>
            node.image &&
            !this.shouldShowImage(node.id) && (
              <img
                src={node.image.file.url}
                onClick={() => this.hideImage(node.id)}
              />
            )
        )}
      </div>
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
            file {
              url
            }
          }
        }
      }
    }
  }
`;
