import React from 'react';
import styled from 'react-emotion';

import LifeGroupLeaderLayout from './LifeGroupLeaderLayout';
import { H2, H3 } from '../../components/headers';
import Card from '../../components/Card';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
  margin-bottom: 40px;
`;

const InnerCard = styled.div`
  padding: 20px;
`;

export const curriculum = {
  current: {
    weeks: [
      {
        name: 'Week of 1/20',
        pdf:
          'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/lifegroup-notes/LG.Study.Week.of.1.20.pdf',
      },
      {
        name: 'Week of 1/27',
        pdf:
          'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/lifegroup-notes/lifegroup-study-2019-01-27.pdf',
      },
      {
        name: 'Week of 2/10',
        pdf:
          'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/lifegroup-notes/lifegroup-study-2019-02-10.pdf',
      },
    ],
  },
  previous: [
    {
      name: 'The Good Book',
      weeks: [
        {
          pdf:
            'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-1.pdf',
          video:
            'https://www.rightnowmedia.org/Content/Series/229881?episode=1 ',
        },
        {
          pdf:
            'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-2.pdf',
          video:
            'https://www.rightnowmedia.org/Content/Series/229881?episode=2 ',
        },
        {
          pdf:
            'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-3.pdf',
          video:
            'https://www.rightnowmedia.org/Content/Series/229881?episode=3 ',
        },
        {
          pdf:
            'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-4.pdf',
          video:
            'https://www.rightnowmedia.org/Content/Series/229881?episode=4 ',
        },
        {
          pdf:
            'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-5.pdf',
          video:
            'https://www.rightnowmedia.org/Content/Series/229881?episode=5 ',
        },
        {
          pdf:
            'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-6.pdf',
          video:
            'https://www.rightnowmedia.org/Content/Series/229881?episode=6 ',
        },
        {
          pdf:
            'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-7.pdf',
          video:
            'https://www.rightnowmedia.org/Content/Series/229881?episode=7 ',
        },
        {
          pdf:
            'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/library/the-good-book/the-good-book-week-8.pdf',
          video:
            'https://www.rightnowmedia.org/Content/Series/229881?episode=8 ',
        },
      ],
    },
  ],
};

const Page = () => (
  <LifeGroupLeaderLayout>
    <div>
      <H2>Curriculum</H2>
      <Container>
        {curriculum.current.weeks.length === 0 ? <p>Coming soon</p> : null}
        {curriculum.current.weeks.map((c, i) => (
          <Card key={i}>
            <InnerCard>
              <H3>{c.name}</H3>
              {c.pdf && (
                <p>
                  <a href={c.pdf} target="_blank" rel="noopener noreferrer">
                    Discussion Guide
                  </a>
                </p>
              )}
              {c.video && (
                <p>
                  <a href={c.video} target="_blank" rel="noopener noreferrer">
                    Video
                  </a>
                </p>
              )}
            </InnerCard>
          </Card>
        ))}
      </Container>
    </div>
  </LifeGroupLeaderLayout>
);

export default Page;
