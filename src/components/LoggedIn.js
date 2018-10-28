import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';

import * as COLORS from '../constants/colors';

import { login } from '../state/actions';
import { selectIsLoggedIn } from '../state/selectors';

const Error = styled.div`
  color: red;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: no-wrap;
`;

const FormInput = css`
  height: 40px;
  width: 200px;
  margin: 0;
  padding: 20px 14px;
  border-radius: 0;
  font-size: 16px;
`;

const Input = styled.input`
  ${FormInput};
  margin-left: 20px;
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

  &:hover {
    background-color: ${COLORS.BRAND_LIGHTER};
  }

  &:active,
  &:focus {
    background-color: ${COLORS.BRAND_DARKER};
  }
`;

class LoggedIn extends React.Component {
  state = {
    password: '',
    error: '',
  };

  handleChange = e => {
    const password = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      password,
      error: '',
    }));
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.submitForm();
    }
  };

  submitForm = () => {
    if (this.state.password === process.env.GATSBY_LIFEGROUP_LEADER_PASSWORD) {
      this.props.onLogin();
      this.setState(prevState => ({
        ...prevState,
        error: '',
      }));
      localStorage.setItem('loggedIn', 'true');
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: 'Incorrect password',
      }));
      localStorage.setItem('loggedIn', 'false');
    }
  };

  componentDidMount() {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.props.onLogin();
    }
  }

  render() {
    const { isLoggedIn, children } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          children
        ) : (
          <div>
            <p>You must be logged in to view this page.</p>
            <FormGroup>
              <label htmlFor="password">Password:</label>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
              <Button onClick={this.submitForm}>Submit</Button>
            </FormGroup>
            <Error>{this.state.error}</Error>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: selectIsLoggedIn(state),
  }),
  {
    onLogin: login,
  }
)(LoggedIn);
