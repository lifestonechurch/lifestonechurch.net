import React from 'react';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import Menu from './Menu';
import LoggedIn from '../../components/LoggedIn';

const title = 'LifeGroup Leader Resources';

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

const Page = () => (
  <Layout>
    <H1>{title}</H1>
    <LoggedIn>
      <div>
        <Menu />
        <h2>Fall Curriculum</h2>
        <ul>
          {curriculum.map((c, i) => (
            <li key={i}>
              <p>Week {i + 1}</p>
              <p>
                <a href={c.pdf} target="_blank" rel="noopener noreferrer">
                  Discussion Guide
                </a>{' '}
                <a href={c.video} target="_blank" rel="noopener noreferrer">
                  Video
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
      }
    </LoggedIn>
  </Layout>
);

export default Page;
