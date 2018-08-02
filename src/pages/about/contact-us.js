import React from 'react';
import { H1 } from '../../components/headers';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Contact Us';

const Page = () => (
  <div>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <p>
      We are so excited to connect with you soon and help you experience the
      very best God has for your life! Feel free to email us with any prayer
      requests, questions about joining, or any other queries.
    </p>
    <p>Mailing Address:</p>
    <p>
      5526W. 13400 S.<br />
      #352<br />
      Herriman UT 84096
    </p>
    <p>(801) 839-5420</p>

    <p>
      Email us at{' '}
      <a href="mailto:lifestone@lifestonechurch.net">
        lifestone@lifestonechurch.net
      </a>.
    </p>
  </div>
);

export default Page;
