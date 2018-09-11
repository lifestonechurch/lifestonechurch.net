import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import * as COLORS from '../constants/colors';

const Click = styled.p`
  cursor: pointer;
  text-decoration: underline;
  color: ${COLORS.BRAND};
`;

const getWords = (str, numberOfWords) =>
  str
    .split(/\s+/)
    .slice(0, numberOfWords)
    .join(' ');

class ShowMore extends React.Component {
  state = {
    isExpanded: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isExpanded: !this.state.isExpanded,
    }));
  };

  render() {
    const { description } = this.props;

    return (
      <div>
        <p>
          {this.state.isExpanded
            ? description
            : `${getWords(description, 60)}...`}
        </p>
        <Click onClick={this.toggle}>
          {this.state.isExpanded ? 'Show Less' : 'Show More'}
        </Click>
      </div>
    );
  }
}

ShowMore.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ShowMore;
