import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import { login } from '../state/actions';
import { selectIsLoggedIn } from '../state/selectors';

const Error = styled.div`
  color: red;
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
        // isLoggedIn: true,
        error: '',
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: 'Incorrect password',
      }));
    }
  };

  render() {
    const { isLoggedIn, children } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          children
        ) : (
          <div>
            <p>You must be logged in to view this page.</p>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <button onClick={this.submitForm}>Submit</button>
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
