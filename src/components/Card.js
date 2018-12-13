import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.6);
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 4px;
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const Card = ({ children }) => <Container>{children}</Container>;

export default Card;
