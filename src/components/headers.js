import React from 'react';
const slug = require(`slug`);

export const H1 = ({ children }) => (
  <h1 id={slug(children, { lower: true })}>{children}</h1>
);

export const H2 = ({ children }) => (
  <h2 id={slug(children, { lower: true })}>{children}</h2>
);

export const H3 = ({ children }) => (
  <h3 id={slug(children, { lower: true })}>{children}</h3>
);
export const H4 = ({ children }) => (
  <h4 id={slug(children, { lower: true })}>{children}</h4>
);
export const H5 = ({ children }) => (
  <h5 id={slug(children, { lower: true })}>{children}</h5>
);
export const H6 = ({ children }) => (
  <h6 id={slug(children, { lower: true })}>{children}</h6>
);
