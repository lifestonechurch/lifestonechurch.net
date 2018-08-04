import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.6);
  box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.3);
`;

const Card = ({ children }) => <Container>{children}</Container>;

export default Card;
