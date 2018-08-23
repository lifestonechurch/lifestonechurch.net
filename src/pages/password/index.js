import React from 'react';
import styled from 'react-emotion';

import { H1 } from '../../components/headers';

const title = 'LifeGroup Leader Resources';

const Error = styled.div`
  color: red;
`;

class Page extends React.Component {
  state = {
    isLoggedIn: false,
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
    if (this.state.password === 'hello') {
      this.setState(prevState => ({
        ...prevState,
        isLoggedIn: true,
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
    return (
      <div>
        <H1>{title}</H1>
        {this.state.isLoggedIn ? (
          <div>Secret stuff</div>
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

export default Page;
