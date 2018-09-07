import React from 'react';
import PropTypes from 'prop-types';

const BreezeForm = ({ url, height }) => (
  <iframe
    src={url}
    title="Registration form"
    style={{ marginBottom: 20 }}
    width="100%"
    height={`${height}px`}
  />
);

BreezeForm.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

BreezeForm.defaultProps = {
  height: 1000,
};

export default BreezeForm;
