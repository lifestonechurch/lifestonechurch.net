import React from 'react';
import styled from 'react-emotion';

import Layout from '../../components/layout';
import { H1, H2, H3 } from '../../components/headers';
import LoggedIn from '../../components/LoggedIn';
import Card from '../../components/Card';
import Menu from './Menu';

const title = 'LifeGroup Leader Resources';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
`;

const InnerCard = styled.div`
  padding: 20px;
`;

const curriculum = [
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-1.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=1 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-2.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=2 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-3.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=3 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-4.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=4 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-5.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=5 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-6.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=6 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-7.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=7 ',
  },
  {
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-8.pdf',
    video: 'https://www.rightnowmedia.org/Content/Series/229881?episode=8 ',
  },
];

const Page = () => (
  <Layout>
    <H1>{title}</H1>
    <LoggedIn>
      <div>
        <Menu />
        <H2>Fall Curriculum</H2>
        <Container>
          {curriculum.map((c, i) => (
            <Card key={i}>
              <InnerCard>
                <H3>Week {i + 1}</H3>
                <p>
                  <a href={c.pdf} target="_blank" rel="noopener noreferrer">
                    Discussion Guide
                  </a>
                </p>
                <p>
                  <a href={c.video} target="_blank" rel="noopener noreferrer">
                    Video
                  </a>
                </p>
              </InnerCard>
            </Card>
          ))}
        </Container>
      </div>
    </LoggedIn>
  </Layout>
);

export default Page;
