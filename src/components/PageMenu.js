import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 700px;
  max-width: 100%;
  margin: 0 auto;

  > a {
    text-transform: uppercase;
    padding: 8px 12px;
  }
`;

const PageMenu = ({ items }) => (
  <Container>
    {items.map(
      (item, i) =>
        item.external ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={i}>
            {item.name}
          </a>
        ) : (
          <Link to={item.link} key={i}>
            {item.name}
          </Link>
        )
    )}
  </Container>
);

PageMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default PageMenu;
