import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const SmallImage = styled.img`
  width: 100%;
  display: block;
  margin: ${({ center }) => (center ? '0 auto' : '')};
  @media (min-width: 767px) {
    width: 50%;
  }
`;

SmallImage.propTypes = {
  src: PropTypes.string.isRequired,
  center: PropTypes.bool.isRequired,
};

SmallImage.defaultProps = {
  center: false,
};

export default SmallImage;
