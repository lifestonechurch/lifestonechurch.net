import React from 'react';
import PropTypes from 'prop-types';

const BreezeForm = () => <div>TODO: BreezeForm Component</div>;

BreezeForm.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

BreezeForm.defaultProps = {
  height: 1000,
};

export default BreezeForm;
