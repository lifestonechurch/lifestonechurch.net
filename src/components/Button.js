import React from 'react';
import Link from 'gatsby-link';
import './Button.css';

const Button = ({ children = 'Ok', linkTo }) => {
  const isExternal = linkTo ? linkTo.slice(0, 4) === 'http' : false;
  return (
    <a className="Button" href={linkTo} target={isExternal ? '_blank' : ''}>
      {children}
    </a>
  );
};

export default Button;
