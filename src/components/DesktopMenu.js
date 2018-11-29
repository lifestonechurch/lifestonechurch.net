import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { css } from 'react-emotion';

import * as COLORS from '../constants/colors';
import { MIN_DESKTOP_SIZE } from '../constants';

const menuGap = '15px';

const Container = styled.div``;

const DesktopNav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  margin: 0;
  & li {
    position: relative;
    padding: ${menuGap};
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
  & li:hover {
    background: ${COLORS.BRAND};
    & a {
    color: white;
    }
  }
  &.open {
    z-index: 1;
    max-height: 1000px;
    opacity: 1;
    > li {
      padding: 0;
      > a {
        padding: ${menuGap};
        display: block;
      }
    }
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
  margin-bottom: 0;
  padding: 4px 0;
  z-index: 1000;
  display: ${props => (props.isVisible ? 'visible' : 'none')};
`;

const active = css`
  &::after {
    display: block;
    content: '';
    height: 2px;
    background: #008f01;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

const childSubActive = css`
  color: #fff !important;
  background-color: #008f01;
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
      this.setState({
        isOpen: false,
        openDesktopItem: null,
      });
    }
  };

  onClickOutside = e => {
    if (this.menuRef && !this.menuRef.contains(e.target)) {
      this.setState({
        openDesktopItem: null,
      });
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.escapeListener);
    document.addEventListener('mousedown', this.onClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeListener);
    document.removeEventListener('mousedown', this.onClickOutside);
  }

  handleDesktopItemHover = openDesktopItem => {
    clearTimeout(this.hoverTimer);

    this.setState({
      openDesktopItem,
    });
  };

  handleDesktopItemHoverOff = () => {
    this.hoverTimer = setTimeout(() => {
      this.setState({
        openDesktopItem: null,
      });
    }, 500);
  };

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

  render() {
    const { navigation } = this.props;
    return (
      <div ref={node => (this.menuRef = node)}>
        <Container>
          <DesktopNav>
            {navigation.map((a, i) => (
              <li key={i}>
                {a.path ? (
                  <Link
                    to={a.path}
                    onClick={() => this.handleDesktopItemClick(i)}
                    onMouseEnter={() => this.handleDesktopItemHover(i)}
                    activeClassName={active}
                  >
                    {a.name}
                  </Link>
                ) : (
                  <Item>
                    <div onMouseEnter={() => this.handleDesktopItemHover(i)}>
                      {a.name}
                    </div>
                    <svg viewBox="0 0 64 64">
                      <path d="M18.4 28.6L32 42.2l13.6-13.6H18.4z" />
                    </svg>
                  </Item>
                )}
                {a.children && (
                  <div
                    onMouseEnter={() => this.handleDesktopItemHover(i)}
                    onMouseLeave={() => this.handleDesktopItemHoverOff()}
                  >
                    <DesktopSubNav
                      className={this.state.openDesktopItem === i ? 'open' : ''}
                    >
                      {a.children.map((b, i) => (
                        <li key={i}>
                          <Link
                            to={b.path}
                            onClick={() => this.handleDesktopItemClick(i)}
                            activeClassName={childSubActive}
                          >
                            {b.name}
                          </Link>
                        </li>
                      ))}
                    </DesktopSubNav>
                  </div>
                )}
              </li>
            ))}
          </DesktopNav>
        </Container>
      </div>
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
