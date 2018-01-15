import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled.div`
  font: 14px/22px normal helvetica, sans-serif;
  margin: 20px 50px;
  padding-left: 15px;
  border-left: 3px solid #ccc;
  max-width: 500px;
`;

const BibleQuoteTitle = styled.div`
  font-style: normal;
  font-size: 1.2em;
`;

const BibleQuote = ({ children, reference }) => (
  <Container>
    <BibleQuoteTitle>{reference}</BibleQuoteTitle>
    {children}
  </Container>
);

BibleQuote.propTypes = {
  reference: PropTypes.string.isRequired,
};

export default BibleQuote;
