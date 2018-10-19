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
    external: true,
  },
  {
    name: 'Attendance',
    link:
      'https://lifestonechurch.breezechms.com/events/overview#/?start_date=2018-10-19&view=month',
    external: true,
  },
  {
    name: 'FAQ',
    link: '',
    external: true,
  },
  {
    name: 'Resources',
    link: '',
    external: true,
  },
];

const curriculum = [
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-1.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=1 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-2.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=2 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-3.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=3 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-4.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=4 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-5.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=5 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-6.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=6 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-7.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=7 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/the-good-book-week-8.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=8 ',
  },
];

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
              {curriculum.map((c, i) => (
                <li>
                  <p>Week {i + 1}</p>
                  <p>
                    <a href={c.pdf} target="_blank" rel="noopener noreferrer">
                      PDF
                    </a>{' '}
                    <a href={c.video} target="_blank" rel="noopener noreferrer">
                      Video
                    </a>
                  </p>
                </li>
              ))}
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
