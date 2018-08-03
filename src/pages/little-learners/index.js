import React from 'react';
import styled from 'react-emotion';

import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { H1, H2, H3 } from '../../components/headers';
import LifeGroup from '../../components/LifeGroup';

import littleLearnersImage from './little-learners.jpg';

const title = 'Little Learners';

const Curriculum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    width: 500px;
    max-width: 90%;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const Page = () => {
  const isEnrolling = true;

  return (
    <div>
      <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />
      <H1>{title}</H1>

      <img src={littleLearnersImage} />

      <p>
        Lifestone Little Learners provides a safe learning environment where 2-5
        year-olds discover God’s love, important social & life skills, and early
        math & reading skills in preparation for Pre-K and Kindergarten. Contact
        Little Learners Director Ali Gardner with any questions:{' '}
        <a href="mailto:ali@lifestonechurch.net">ali@lifestonechurch.net</a>
      </p>

      <Button linkTo="#enrollment-form">Enroll now</Button>

      <p>
        Lifestone Church is currently hiring teachers and teacher’s assistants
        for our Lifestone Little Learners program.
      </p>

      <Button linkTo="https://docs.google.com/document/d/1D3bT-6dOcHE9YDJnXG6Bq0eVAiIOElGKLyfCrAhafks/edit?usp=sharing">
        View Positions
      </Button>

      <Banner>
        <H2>Class Descriptions</H2>
      </Banner>

      <Curriculum>
        <Card>
          <H3>2’s and 3’s</H3>
          <p>Tuesday, Thursday 8:30am-11:30am</p>

          <p>$135/ Month September - May</p>

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
          <H3>4’s and 5’s</H3>
          <p>Choose from 2 options:</p>

          <ul>
            <li>Tuesday, Thursday 8:30am-11:30am</li>
            <li>Tuesday, Thursday 12:00pm-3:00pm</li>
          </ul>

          <p>$135/ Month September - May</p>

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

      <Banner>
        <H2>Enrollment Form</H2>
      </Banner>

      <iframe
        src="https://lifestonechurch.breezechms.com/form/1eb0c6"
        style={{
          width: `100%`,
          height: 3100,
          margin: `0 auto`,
          border: `1px solid #fff`,
        }}
      />

      <Banner>
        <H2>Monthly Payment Options</H2>
      </Banner>

      <p>Coming Soon</p>

      <Banner>
        <H2>Calendar of Events</H2>
      </Banner>

      <p>Coming Soon</p>
    </div>
  );
};

export default Page;
