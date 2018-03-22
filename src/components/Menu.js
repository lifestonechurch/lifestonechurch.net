import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "react-emotion";
import Burger from "./Burger";
import * as COLORS from "../constants/colors";
import logo from "../../assets/logo2.png";

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
      width: 1.2rem;
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

const Mobile = styled.ul`
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
  padding-top: 4rem;
  background: ${COLORS.BRAND};
  display: none;
  overflow-y: scroll;
  &.open {
    display: inherit;
  }
`;

const MobileNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  list-style: none;
  text-align: center;
  color: white;
  font-size: 3rem;
  line-height: 3.5rem;
  & li {
    cursor: pointer;
    & a {
      color: white;
      text-decoration: none;
    }
    & svg {
      width: 2rem;
      margin-right: -2rem;
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
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5rem;
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
  justify-content: center;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 20px;
  height 45px;
  padding: 4px 0;
  z-index: 1000;
  display: ${props => (props.isVisible ? "visible" : "none")};
`;

Image.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

class Menu extends React.Component {
  state = {
    openDesktopItem: null,
    openMobileItems: {},
    isOpen: false
  };

  handleMobileToggle = isOpen => {
    this.setState({ isOpen }, () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    });
  };

  handleDesktopItemClick = index => {
    this.setState({
      openDesktopItem: this.state.openDesktopItem === index ? null : index
    });
  };

  handleHomeClick = () => {
    this.setState({
      isOpen: false
    });
  };

  allowScroll() {
    document.body.style.overflow = "auto";
  }

  handleMobileItemClick = (item, i) => {
    const items = this.state.openMobileItems;
    this.allowScroll();
    this.setState({
      openMobileItems: items[i]
        ? Object.keys(items)
            .filter(a => a !== i)
            .reduce((a, c) => ({ ...a, c: true }), {})
        : { ...items, [i]: true },
      isOpen: item.children ? this.state.isOpen : false
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
                  className={this.state.openDesktopItem === i ? "open" : ""}
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
        <Mobile>
          <Burger
            isOpen={this.state.isOpen}
            color={this.state.isOpen ? "white" : COLORS.BRAND}
            onClick={this.handleMobileToggle}
          />
          <MobileContainer className={this.state.isOpen ? "open" : ""}>
            <Link to="/" onClick={() => this.handleHomeClick()}>
              <Image
                src={logo}
                alt="Logo"
                isVisible={this.state.isOpen}
                onClick={this.allowScroll}
              />
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
                      className={this.state.openMobileItems[i] ? "open" : ""}
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

Menu.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string
        })
      )
    })
  ).isRequired
};

export default Menu;
