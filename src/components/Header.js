import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Menu from '../components/Menu';
import * as COLORS from '../constants/colors';
import logo from '../../assets/logo.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-color: #e7e7e7;
  border-width: 0 0 1px;
  border-style: solid;
  background: #f8f8f8;
  padding: 0 20px;
`;

const Image = styled.img`
  height 45px;
  padding: 4px 0;
`;

const Header = ({ navigation }) => (
  <Container>
    <Link to="/">
      <Image src={logo} alt="Logo" />
    </Link>
    <Menu navigation={navigation} />
  </Container>
);

Header.propTypes = {
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

export default Header;
