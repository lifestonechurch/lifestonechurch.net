import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';

import * as COLORS from '../constants/colors';

import { login, logout } from '../state/actions';
import { selectIsLoggedIn } from '../state/selectors';

const Error = styled.div`
  margin-top: 20px;
  color: red;
`;

const LoggedOutContainer = styled.div`
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: no-wrap;
  margin-top: 20px;
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

  logout = () => {
    this.props.onLogout();
    localStorage.setItem('loggedIn', 'false');
  };

  submitForm = () => {
    if (this.state.password === process.env.GATSBY_LIFEGROUP_LEADER_PASSWORD) {
      this.props.onLogin();
      this.setState(prevState => ({
        ...prevState,
        error: '',
        password: '',
      }));
      localStorage.setItem('loggedIn', 'true');
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: 'Incorrect password',
        password: '',
      }));
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
          <div>
            {children}
            <Button onClick={this.logout}>Logout</Button>
          </div>
        ) : (
          <LoggedOutContainer>
            <p>You must be logged in to view this page.</p>
            <FormGroup>
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
          </LoggedOutContainer>
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
    onLogout: logout,
  }
)(LoggedIn);
