import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'react-emotion';
import Burger from './Burger';
import * as COLORS from '../constants/colors';
import { MIN_DESKTOP_SIZE } from '../constants';

import logo from '../images/logo/logo-white.png';

const Container = styled.div``;

const Mobile = styled.ul`
  @media (min-width: ${MIN_DESKTOP_SIZE}px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding-top: 4rem;
  background: ${COLORS.BRAND};
  display: none;
  overflow-y: scroll;
  z-index: 10;

  &.open {
    display: inherit;
  }

  @media (min-width: 700px) {
    width: 400px;
  }
`;

const MobileNav = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 0.25em 24px 0 0;
  list-style: none;
  text-align: right;
  color: white;
  font-size: 2.2rem;
  line-height: 3rem;
  font-weight: 800;
  text-transform: uppercase;

  & li {
    cursor: pointer;

    & a {
      color: white;
      text-decoration: none;
    }
    & svg {
      width: 24px;
      height: 24px;
      margin-right: -24px;
      fill: white;
    }
  }
`;

const MobileSubNav = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  list-style: none;
  display: none;
  text-align: right;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4rem;
  & li:hover {
    background: ${COLORS.BRAND};
    & a {
      color: white;
    }
  }
  & a:last-child li {
    margin-bottom: 0;
  }
  &.open {
    display: inherit;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 20px;
  height 45px;
  padding: 4px 0;
  z-index: 10;
  display: ${props => (props.isVisible ? 'visible' : 'none')};

  @media (min-width: 700px) {
    display: none;
  }
`;

Image.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

class MobileMenu extends React.Component {
  state = {
    openMobileItems: {},
    isOpen: false,
  };

  escapeListener = ({ key, keyCode }) => {
    if (key === 'Escape' || keyCode === 27) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.escapeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeListener);
  }

  handleMobileToggle = isOpen => {
    this.setState({ isOpen });
  };

  handleHomeClick = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleMobileItemClick = (item, i) => {
    const items = this.state.openMobileItems;
    this.setState({
      openMobileItems: items[i]
        ? { ...items, [i]: !items[i] }
        : { ...items, [i]: true },
      isOpen: item.children ? this.state.isOpen : false,
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Mobile>
          <Burger
            isOpen={this.state.isOpen}
            color={this.state.isOpen ? 'white' : COLORS.BRAND}
            onClick={this.handleMobileToggle}
          />
          <MobileContainer className={this.state.isOpen ? 'open' : ''}>
            <Link to="/" onClick={() => this.handleHomeClick()}>
              <Image src={logo} alt="Logo" isVisible={this.state.isOpen} />
            </Link>
            <MobileNav>
              {navigation.map((a, i) => (
                <li key={i}>
                  {a.path ? (
                    <Link
                      to={a.path}
                      onClick={() => this.handleMobileItemClick(a, i)}
                    >
                      {a.name}
                    </Link>
                  ) : (
                    <Item onClick={() => this.handleMobileItemClick(a, i)}>
                      <div>{a.name}</div>
                      <svg viewBox="0 0 64 64">
                        <path d="M18.4 28.6L32 42.2l13.6-13.6H18.4z" />
                      </svg>
                    </Item>
                  )}
                  {a.children && (
                    <MobileSubNav
                      className={this.state.openMobileItems[i] ? 'open' : ''}
                    >
                      {a.children.map((b, j) => (
                        <Link
                          to={b.path}
                          key={j}
                          onClick={() => this.handleMobileItemClick(b, i)}
                        >
                          <li>{b.name}</li>
                        </Link>
                      ))}
                    </MobileSubNav>
                  )}
                </li>
              ))}
            </MobileNav>
          </MobileContainer>
        </Mobile>
      </Container>
    );
  }
}

MobileMenu.propTypes = {
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

export default MobileMenu;
