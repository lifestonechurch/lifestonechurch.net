import React from 'react';
import styled from 'react-emotion';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import PageMenu from '../../components/PageMenu';

const title = 'LifeGroup Leader Resources';

const menuItems = [
  {
    name: 'LifeGroup Report',
    link: 'https://lifestonechurch.breezechms.com/form/5652c5',
    target: '_blank',
  },
  {
    name: 'Attendance',
    link: '',
    target: '_blank',
  },
  {
    name: 'FAQ',
    link: '',
    target: '_blank',
  },
  {
    name: 'Resources',
    link: '',
    target: '_blank',
  },
];

const Error = styled.div`
  color: red;
`;

class Page extends React.Component {
  state = {
    isLoggedIn: true,
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
      <Layout>
        <H1>{title}</H1>
        {this.state.isLoggedIn ? (
          <div>
            <PageMenu items={menuItems} />
            <h2>Fall Curriculum</h2>
            <ul>
              <li>
                <p>Week 1</p>
                <ul>
                  <li>
                    <a href="https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-1.pdf">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rightnowmedia.org/Content/Series/229881?episode=1 ">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Week 2</p>
                <ul>
                  <li>
                    <a href="https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-2.pdf">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rightnowmedia.org/Content/Series/229881?episode=2 ">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Week 3</p>
                <ul>
                  <li>
                    <a href="https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-3.pdf">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rightnowmedia.org/Content/Series/229881?episode=3 ">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Week 4</p>
                <ul>
                  <li>
                    <a href="https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-4.pdf">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rightnowmedia.org/Content/Series/229881?episode=4 ">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Week 5</p>
                <ul>
                  <li>
                    <a href="https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-5.pdf">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rightnowmedia.org/Content/Series/229881?episode=5 ">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Week 6</p>
                <ul>
                  <li>
                    <a href="https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-6.pdf">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rightnowmedia.org/Content/Series/229881?episode=6 ">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Week 7</p>
                <ul>
                  <li>
                    <a href="https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-7.pdf">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rightnowmedia.org/Content/Series/229881?episode=7 ">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <p>Week 8</p>
                <ul>
                  <li>
                    <a href="https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-8.pdf">
                      PDF
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rightnowmedia.org/Content/Series/229881?episode=8 ">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
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
      </Layout>
    );
  }
}

export default Page;
