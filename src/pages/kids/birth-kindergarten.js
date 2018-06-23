import React from 'react';
import Banner from '../../components/Banner';
import SmallImage from '../../components/SmallImage';
import Breadcrumbs from '../../components/Breadcrumbs';

import littleLife from './little-life.png';

const title = 'Birth-Kindergarten';

const Page = () => (
  <div>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'Resources' }]}
      title={title}
    />
    <h1>{title}</h1>

    <SmallImage src={littleLife} />

    <p>
      The goal of Lifestone’s LITTLE LIFE ministry is to teach kids truths of
      the Bible with age-appropriate, fun, interactive experiences taught by
      committed volunteers who serve Jesus by serving you and your kids.
      Lifestone is committed not only to cementing the fundamentals of faith
      into the hearts and minds of children, but also equipping parents and
      getting families talking about Jesus together throughout their week.
    </p>

    <Banner>
      <h2>What to Expect</h2>
    </Banner>

    <p>
      When you walk in the door you’ll see signage directing you to your child’s
      check in. At the check in area, you will be greeted by a volunteer who
      will help you sign in your child. Your child is sure to have a blast and
      learn a lot through their kid-sized Bible lesson!
    </p>

    <p>
      *** Our secure environments are staffed with loving volunteers who have
      all submitted to extensive background checks and interviews.
    </p>
  </div>
);

export default Page;
