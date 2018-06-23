import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Burger from './Burger';
import * as COLORS from '../constants/colors';
import logo from '../../assets/logo2.png';

const MIN_DESKTOP_SIZE = 1163;

const Container = styled.div``;

const DesktopNav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  margin: 0;
  & li {
    position: relative;
    padding: 15px;
    margin: 0;
    color: ${COLORS.BRAND};
    cursor: pointer;
    & a {
      text-decoration: none;
      color: ${COLORS.BRAND};
    }
    & a:hover,
    & div:hover {
      color: ${COLORS.HOVER};
    }
    & svg {
      fill: ${COLORS.BRAND};
      width: 24px;
      height: 24px;
    }
    &:hover svg {
      fill: ${COLORS.HOVER};
    }
  }
  @media (max-width: ${MIN_DESKTOP_SIZE - 1}px) {
    display: none;
  }
`;

const DesktopSubNav = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  padding: 0;
  min-width: 160px
  list-style: none;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  background: white;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  & a:hover {
    background: ${COLORS.BRAND};
    & li {
    color: white;
    }
  }
  &.open {
    z-index: 1;
    max-height: 1000px;
    opacity: 1;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 20px;
  height 45px;
  padding: 4px 0;
  z-index: 1000;
  display: ${props => (props.isVisible ? 'visible' : 'none')};
`;

Image.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

class DesktopMenu extends React.Component {
  state = {
    openDesktopItem: null,
    isOpen: false,
  };

  escapeListener = ({ key, keyCode }) => {
    if (key === 'Escape' || keyCode === 27) {
      this.allowScroll();
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.escapeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeListener);
  }

  handleDesktopItemClick = index => {
    this.setState({
      openDesktopItem: this.state.openDesktopItem === index ? null : index,
    });
  };

  handleHomeClick = () => {
    this.setState({
      isOpen: false,
    });
  };

  allowScroll() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const { children, navigation } = this.props;
    return (
      <Container>
        <DesktopNav>
          {navigation.map((a, i) => (
            <li key={i}>
              {a.path ? (
                <Link
                  to={a.path}
                  onClick={() => this.handleDesktopItemClick(i)}
                >
                  {a.name}
                </Link>
              ) : (
                <Item>
                  <div onClick={() => this.handleDesktopItemClick(i)}>
                    {a.name}
                  </div>
                  <svg viewBox="0 0 64 64">
                    <path d="M18.4 28.6L32 42.2l13.6-13.6H18.4z" />
                  </svg>
                </Item>
              )}
              {a.children && (
                <DesktopSubNav
                  className={this.state.openDesktopItem === i ? 'open' : ''}
                >
                  {a.children.map((b, j) => (
                    <Link
                      to={b.path}
                      key={j}
                      onClick={() => this.handleDesktopItemClick(i)}
                    >
                      <li>{b.name}</li>
                    </Link>
                  ))}
                </DesktopSubNav>
              )}
            </li>
          ))}
        </DesktopNav>
      </Container>
    );
  }
}

DesktopMenu.propTypes = {
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

export default DesktopMenu;
