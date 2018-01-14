import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Burger from './Burger';
import * as COLORS from '../constants/colors';

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
    }
    &:hover svg {
      fill: ${COLORS.HOVER};
    }
  }
  @media (max-width: ${MIN_DESKTOP_SIZE - 1}px) {
    display: none;
  }
`;
const SubNav = styled.ul`
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
  }
`;

const Mobile = styled.div`
  @media (min-width: ${MIN_DESKTOP_SIZE}px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${COLORS.BRAND};
  display: none;
  overflow-y: scroll;
  &.open {
    display: inherit;
  }
`;

const Item = styled.div`
  display: flex;
`;

const Caret = styled.div`
  width: 1.2rem;
`;

class Menu extends React.Component {
  state = {
    openItem: -1,
    isOpen: false,
  };

  handleMobileToggle = isOpen => {
    this.setState({ isOpen });
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  };

  handleItemClick = openItem => {
    this.setState({
      openItem: this.state.openItem === openItem ? -1 : openItem,
    });
  };

  render() {
    const { children, navigation } = this.props;
    return (
      <Container>
        <DesktopNav>
          {navigation.map((a, i) => (
            <li key={i}>
              {a.path ? (
                <Link to={a.path} onClick={() => this.handleItemClick(i)}>
                  {a.name}
                </Link>
              ) : (
                <Item>
                  <div onClick={() => this.handleItemClick(i)}>{a.name}</div>
                  <Caret>
                    <svg viewBox="0 0 64 64">
                      <title>Icons 100</title>
                      <path d="M18.4 28.6L32 42.2l13.6-13.6H18.4z" />
                    </svg>
                  </Caret>
                </Item>
              )}
              {a.children && (
                <SubNav className={this.state.openItem === i ? 'open' : ''}>
                  {a.children.map((b, j) => (
                    <li key={j}>
                      <Link to={b.path}>{b.name}</Link>
                    </li>
                  ))}
                </SubNav>
              )}
            </li>
          ))}
        </DesktopNav>
        <Mobile>
          <Burger
            color={this.state.isOpen ? 'white' : COLORS.BRAND}
            onClick={this.handleMobileToggle}
          />
          <MobileContainer className={this.state.isOpen ? 'open' : ''}>
            <ul>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <ul>
                <li>hi</li>
                <li>hi</li>
              </ul>
              <ul>
                <li>hi</li>
                <li>hi</li>
              </ul>
              <ul>
                <li>hi</li>
                <li>hi</li>
              </ul>
              <ul>
                <li>hi</li>
                <li>hi</li>
              </ul>
            </ul>
          </MobileContainer>
        </Mobile>
      </Container>
    );
  }
}

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
