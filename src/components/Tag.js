import React from 'react';
import styled from 'react-emotion';

const Container = styled.span`
  background-color: ${({ color }) => color};
  color: white;
  padding: 2px 4px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Tag = ({ children, color }) => {
  return <Container color={color}>{children}</Container>;
};

export default Tag;
