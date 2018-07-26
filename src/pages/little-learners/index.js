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
    width: 500px;
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
        <h2>Class Descriptions</h2>
      </Banner>

      <Curriculum>
        <Card>
          <h3>2’s and 3’s</h3>
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
          <h3>4’s and 5’s</h3>
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
        <h2>Student Enrollment</h2>
      </Banner>

      <p>
        Space is limited. Students will be accepted on a first come, first serve
        basis. To reserve your spot, please fill out the form below and submit
        $75 enrollment fee. Enrollment fee also covers a Little Learners tote
        bag!
      </p>

      <Banner>
        <h2>Director/Staff Bios</h2>
      </Banner>

      <p>Coming Soon</p>

      <Banner>
        <h2>Monthly Payment Options</h2>
      </Banner>

      <p>Coming Soon</p>

      <Banner>
        <h2>Calendar of Events</h2>
      </Banner>

      <p>Coming Soon</p>
    </div>
  );
};

export default Page;
