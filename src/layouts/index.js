import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Container from '../components/Container';

import './index.css';

const TemplateWrapper = ({ children, data }) => {
  const navigation = data.site.siteMetadata.navigation;
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header navigation={navigation} />
      <link
        href="http://fonts.googleapis.com/css?family=Lato:400,700|Droid+Serif:400,700,400italic"
        rel="stylesheet"
        type="text/css"
      />
      <Container>{children()}</Container>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        navigation {
          name
          path
          children {
            name
            path
          }
        }
      }
    }
  }
`;
