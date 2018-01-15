import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const SmallImage = styled.img`
  width: 100%;
  @media (min-width: 767px) {
    width: 50%;
  }
`;

SmallImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default SmallImage;
