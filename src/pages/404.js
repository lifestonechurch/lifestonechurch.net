import React from 'react';

import Layout from '../components/layout';
import { H1 } from '../components/headers';

const NotFoundPage = () => (
  <Layout>
    <H1>Page not found</H1>
    <p>
      You just found a page that doesn't exist... Try looking in the menu for
      the page you're looking for.
    </p>
  </Layout>
);

export default NotFoundPage;
