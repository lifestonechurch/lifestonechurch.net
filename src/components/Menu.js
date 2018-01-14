import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Menu = ({ children, navigation }) => {
  return (
    <ul>
      {navigation.map((a, i) => (
        <li key={i}>
          {a.path ? <Link to={a.path}>{a.name}</Link> : a.name}
          {a.children && (
            <ul>
              {a.children.map((b, j) => (
                <li key={j}>
                  <Link to={b.path}>{b.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Menu;
