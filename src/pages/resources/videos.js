import React from 'react';
import { H1 } from '../../components/headers';
import VimeoPlayer from '../../components/VimeoPlayer';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Videos';

const Page = () => (
  <div>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'Resources' }]}
      title={title}
    />
    <H1>{title}</H1>

    <VimeoPlayer id="124588710" />
  </div>
);

export default Page;
