import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled.div`
  position: fixed;
  right: 20px;
  top: 10px;
  display: flex;
  align-items: center;
  z-index: 9001;
`;

const Icon = styled.div`
  display: block;
  transform: scale(0.7);
  transform-origin: top right;
  width: 30px;
  height: 30px;
  transform: rotate(0deg);
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: ${props => props.color};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    position: fixed;
  }

  & span:first-child {
    top: 0;
  }

  & span:nth-child(2),
  & span:nth-child(3) {
    top: 12px;
  }

  & span:nth-child(4) {
    top: 24px;
  }

  &.open span:first-child {
    top: 18px;
    width: 0;
    left: 50%;
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 18px;
    width: 0;
    left: 50%;
  }
`;

class Burger extends React.Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(!this.props.isOpen);
    }
  };

  render() {
    const { color } = this.props;
    return (
      <Container onClick={this.handleClick}>
        <Icon color={color} className={this.props.isOpen ? 'open' : ''}>
          <span />
          <span />
          <span />
          <span />
        </Icon>
      </Container>
    );
  }
}

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Burger;
