import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import * as COLORS from '../constants/colors';

import './layoutFullWidth.css';

import { H1, H2, H3, H4 } from '../components/headers';
import Img from 'gatsby-image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${COLORS.LIGHT_GRAY};
`;

const Content = styled.div`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 16px;
`;

const Image = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

const ImgText = styled.div`
  position: absolute;
  text-align: center;
  color: white;
  text-shadow: 0 0 5px black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Layout = ({ children, imgSizes, title, subtitle }) => {
  return (
    <Container>
      <StaticQuery
        query={graphql`
          query LayoutFullWidthQuery {
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
            </Helmet>
            <Header navigation={data.site.siteMetadata.navigation} />
          </div>
        )}
      />
      <Image>
        <Img sizes={imgSizes} />
        <ImgText>
          <H1>{title}</H1>
          <p>{subtitle}</p>
        </ImgText>
      </Image>
      <Content>
        <div>{children}</div>
      </Content>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {};

export default Layout;
