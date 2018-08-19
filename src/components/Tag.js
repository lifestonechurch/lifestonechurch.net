import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import * as COLORS from '../constants/colors';

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
