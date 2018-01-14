import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Icon = styled.div`
  display: block;
  transform: scale(0.7);
  transform-origin: top right;
  z-index: 9001;
  width: 50px;
  height: 45px;
  position: absolute;
  right: 32px;
  top: 34px;
  transform: rotate(0deg);
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 7px;
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
    top: 14px;
  }

  & span:nth-child(4) {
    top: 28px;
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
  state = { isOpen: false };

  handleClick = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen,
      },
      () => {
        this.props.onClick(this.state.isOpen);
      }
    );
  };

  render() {
    const { color } = this.props;
    return (
      <div onClick={this.handleClick}>
        <Icon color={color} className={this.state.isOpen ? 'open' : ''}>
          <span />
          <span />
          <span />
          <span />
        </Icon>
      </div>
    );
  }
}

Burger.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Burger;
