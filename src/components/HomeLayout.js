import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import * as COLORS from '../constants/colors';

import './layout.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${COLORS.LIGHT_GRAY};
`;

const TemplateWrapper = ({ children }) => {
  return (
    <Container>
      <StaticQuery
        query={graphql`
          query HomeLayoutQuery {
            site {
              siteMetadata {
                title
                description
                keywords
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
        `}
        render={data => (
          <div>
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
              <meta name="keywords" content={data.site.siteMetadata.keywords} />
              <link rel="shortcut icon" href="/favicon.png" />
              <meta
                name="google-site-verification"
                content="XMuf5LTwJ1U1gFb0tK6lFFDys1hzPnhxR-mTWx6bn3o"
              />
            </Helmet>
            <Header navigation={data.site.siteMetadata.navigation} />
          </div>
        )}
      />
      <div>{children}</div>
      <Footer />
    </Container>
  );
};

TemplateWrapper.propTypes = {};

export default TemplateWrapper;
