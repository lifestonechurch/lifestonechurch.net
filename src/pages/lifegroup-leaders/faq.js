import React from 'react';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import Menu from './Menu';
import LoggedIn from '../../components/LoggedIn';

const title = 'LifeGroup Leader Resources';

const Page = () => (
  <Layout>
    <H1>{title}</H1>
    <LoggedIn>
      <div>
        <Menu />
        <h2>FAQ</h2>
      </div>
    </LoggedIn>
  </Layout>
);

export default Page;
