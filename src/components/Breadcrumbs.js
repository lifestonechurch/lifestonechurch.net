import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled.div`
  margin-top: 16px;
`;

const Breadcrumbs = ({ path, title }) => {
  return (
    <Container>
      {path.map((item, i) => (
        <span key={i}>
          {item.url ? <Link to={item.url}>{item.title}</Link> : `${item.title}`}{' '}
          ›{' '}
        </span>
      ))}
      <span>{title}</span>
    </Container>
  );
};

Breadcrumbs.propTypes = {
  path: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ),
  title: PropTypes.string.isRequired,
};

export default Breadcrumbs;
