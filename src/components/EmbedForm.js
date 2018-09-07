import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Registration = styled.iframe`
  display: block;
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
  height: 700px;
  border: 1px solid #fff;
`;

Registration.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Registration;
