import React from 'react';
import SmallImage from '../../../components/SmallImage';
import Breadcrumbs from '../../../components/Breadcrumbs';

import concernCenter from './concern-center.jpg';

const title = 'Concern Center';

const Page = () => (
  <div>
    <Breadcrumbs
      path={[{title: 'Home', url: '/'}, {title: 'Connect'}]}
      title={title}
    />
    <h1>{title}</h1>

    <SmallImage src={concernCenter} />

    <p>
      Want to make a difference in our valley? Why not give something that will
      have eternal rewards? Join us and our mission to show and share the love
      of Christ at the Concern Center. They're looking for volunteers to spend a
      few hours once a week, once a month, or whenever you can, in order to help
      those in need find food and clothing to get through the cold winter
      months. They've even set new hours to make it more convenient for you,
      your family, and our church community to join the mission by being open on
      Saturdays from 9am - Noon! You'll be the hands and feet of Jesus to many
      who are far from Him. Will you partner with us in doing something great in
      the name of Jesus?{' '}
      <a
        href="https://signup.com/client/invitation2/secure/2068795/false#/invitation"
        target="_blank"
        rel="noopener"
      >
        Join the mission
      </a>.
    </p>
  </div>
);

export default Page;
