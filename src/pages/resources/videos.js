import React from 'react';
import VimeoPlayer from '../../components/VimeoPlayer';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Videos';

const Page = () => (
  <div>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'Resources' }]}
      title={title}
    />
    <h1>{title}</h1>

    <VimeoPlayer id="124588710" />
  </div>
);

export default Page;
