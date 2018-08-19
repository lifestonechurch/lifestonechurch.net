import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.6);
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 4px;
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:active {
    box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
    transform: translateY(0);
    transition: -webkit-transform 50ms, transform 50ms;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 42px rgba(25, 17, 34, 0.1);
    -webkit-transform: translateY(-4px);
  }
`;

const HoverCard = ({ children }) => <Container>{children}</Container>;

export default HoverCard;
