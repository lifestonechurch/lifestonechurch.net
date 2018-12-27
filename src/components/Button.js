import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

import * as COLORS from '../constants/colors';

const Container = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  background-color: ${COLORS.BRAND};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  a {
    display: block;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    letter-spacing: 1px;
  }

  a.Button__Link:hover {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background-color: ${COLORS.BRAND_LIGHTER};
  }

  &:active,
  &:focus {
    background-color: ${COLORS.BRAND_DARKER};
  }
`;

const Button = ({ children = 'Ok', linkTo }) => {
  const isExternal = linkTo
    ? linkTo.startsWith('http://') ||
      linkTo.startsWith('https://') ||
      linkTo.startsWith('mailto:')
    : false;
  return (
    <Container>
      {isExternal ? (
        <a
          className="Button__Link"
          href={linkTo}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link to={linkTo}>{children}</Link>
      )}
    </Container>
  );
};

export default Button;
