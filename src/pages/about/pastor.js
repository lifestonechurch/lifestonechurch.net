import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Meet the Pastor';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const Page = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <Image>
      <Img sizes={data.heltonFamily.childImageSharp.sizes} />
    </Image>

    <p>
      Lead Pastor Ben Helton, wife Kristen, children Karis, Rachel, & Jaxson
    </p>

    <p>
      Ben and Kristen Helton met in college in the panhandle of Texas. After
      graduating they got married and moved to the Dallas area where Ben
      attended seminary while Kristen taught elementary music. After serving in
      churches as a Pastor to Students for 12 years, Ben was asked to start a
      new church in Weatherford, Texas in 2009. After much prayer and research,
      the Helton's felt called to start a church in Herriman, Utah, where no
      Bible-based church had been started before. Ben, Kristen, children Rachel
      (14), Karis (12), and Jaxson (9), and a team of 3 additional families
      moved from the Fort Worth area to Herriman in August of 2013 start
      Lifestone Church. Growing this new church and connecting with new
      neighbors and friends here in Utah has been an exciting adventure the
      family has absolutely enjoyed. One of the Heltons' favorite things about
      Lifestone Church has been the opportunity to closely connect with others
      and grow spiritually through LifeGroups. It is their desire that you, too,
      get connected in a LifeGroup this season and experience spiritual growth
      while forging life-long friendships!
    </p>

    <p>
      Lifestone Church is supported by{' '}
      <a href="https://www.namb.net/" target="_blank" rel="noopener noreferrer">
        The North American Mission Board.
      </a>
    </p>
  </Layout>
);

export default Page;

export const query = graphql`
  query PastorQuery {
    heltonFamily: file(relativePath: { eq: "pages/about/helton-family.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
