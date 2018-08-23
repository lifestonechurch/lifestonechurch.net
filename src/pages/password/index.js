import React from 'react';

import { H1 } from '../../components/headers';

const title = 'LifeGroup Leader Resources';

class Page extends React.Component {
  state = {
    isLoggedIn: false,
    password: '',
  };

  handleChange = e => {
    const password = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      password,
    }));
  };

  handleKeyDown = e => {
    console.log(e.keyCode, this.state.password);
    if (e.keyCode === 13 && this.state.password === 'hello') {
      this.setState(prevState => ({
        ...prevState,
        isLoggedIn: true,
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
          </div>
        )}
      </div>
    );
  }
}

export default Page;
