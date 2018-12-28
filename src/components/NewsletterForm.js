import React from 'react';
import styled, { css } from 'react-emotion';

import * as COLORS from '../constants/colors';

const Title = styled.h2`
  color: white;
  font-size: 1em;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
`;

const FormInput = css`
  height: 40px;
  width: 200px;
  margin: 0;
  padding: 20px 14px;
  border: none;
  border-radius: 0;
  font-size: 16px;
`;

const Input = styled.input`
  ${FormInput};
  color: ${COLORS.LIGHT_TEXT};

  &::placeholder {
    color: ${COLORS.BRAND};
  }
`;

const Button = styled.button`
  ${FormInput};
  flex: 0;
  background-color: ${COLORS.BRAND};
  border: none;
  border-radius: 0;
  padding: 0 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1px;

  &:hover {
    background-color: ${COLORS.BRAND_LIGHTER};
  }

  &:active,
  &:focus {
    background-color: ${COLORS.BRAND_DARKER};
  }
`;

const NewsletterForm = () => (
  <div>
    <form
      action="https://lifestonechurch.us7.list-manage.com/subscribe/post?u=5919b0cbca5b75fa92408b802&amp;id=77d3bd46c0"
      method="post"
      target="_blank"
      noValidate
    >
      <div>
        <Title>Sign up for our newsletter</Title>
        <FormGroup>
          <Input
            class="form-control"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="Email Address"
            type="text"
            aria-label="Sign up for our newsletter"
          />
          <Button>Subscribe</Button>
        </FormGroup>
      </div>
    </form>
  </div>
);

export default NewsletterForm;
