import React from 'react';
import { H1 } from '../../components/headers';
import Breadcrumbs from '../../components/Breadcrumbs';

import heltonFamily from './helton-family.jpg';

const title = 'Meet the Pastor';

const Page = () => (
  <div>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <img src={heltonFamily} alt="Helton family" />

    <p>
      Lead Pastor Ben Helton, wife Kristen, children Karis, Rachel, & Jaxson
    </p>

    <p>
      Lifestone Church is supported by{' '}
      <a href="https://www.namb.net/" target="_blank" rel="noopener">
        The North American Mission Board.
      </a>
    </p>
  </div>
);

export default Page;
