import React from 'react';
import styled from 'react-emotion';
import Banner from '../../components/Banner';
import LifeGroup from '../../components/LifeGroup';
import Breadcrumbs from '../../components/Breadcrumbs';
import Card from '../../components/Card';

import littleLearnersImage from './little-learners.jpg';

const title = 'Little Learners';

const Curriculum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    width: 360px;
    max-width: 90%;
  }
`;

const Page = () => {
  return (
    <div>
      <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />
      <h1>{title}</h1>

      <img src={littleLearnersImage} />

      <p>
        Lifestone Little Learners provides a safe learning environment where 2-5
        year-olds discover God’s love, important social & life skills, and early
        math & reading skills in preparation for Pre-K and Kindergarten. Contact
        Little Learners Director Ali Gardner with any questions:{' '}
        <a href="mailto:ali@lifestonechurch.net">ali@lifestonechurch.net</a>
      </p>

      <Banner>
        <h2>Curriculum includes:</h2>
      </Banner>

      <Curriculum>
        <Card>
          <h3>2’s and 3’s</h3>
          <ul>
            <li>Bible Lessons</li>
            <li>Communication/Social Skills</li>
            <li>Exposure to letters, numbers, and colors</li>
            <li>Small & large motor skills</li>
            <li>Art</li>
            <li>Music</li>
            <li>Physical Education</li>
          </ul>
        </Card>

        <Card>
          <h3>4’s and 5’s</h3>
          <ul>
            <li>Bible Lessons</li>
            <li>Communication/Social Skills</li>
            <li>Early Math and Literacy</li>
            <li>Introduction to Writing</li>
            <li>Art</li>
            <li>Music</li>
            <li>Physical Education</li>
          </ul>
        </Card>
      </Curriculum>
    </div>
  );
};

export default Page;
