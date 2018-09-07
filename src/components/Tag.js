import React from 'react';
import styled from 'react-emotion';

const Container = styled.span`
  background-color: ${({ color }) => color};
  color: white;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 2px 4px;
  border-radius: 4px;
`;

const Tag = ({ children, color }) => {
  return <Container color={color}>{children}</Container>;
};

export default Tag;
