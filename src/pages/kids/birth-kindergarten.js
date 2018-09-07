import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import { H1, H2 } from '../../components/headers';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Birth-Kindergarten';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const Page = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'Kids' }]}
      title={title}
    />
    <H1>{title}</H1>

    <Image>
      <Img sizes={data.littleLifeImage.childImageSharp.sizes} />
    </Image>

    <p>
      The goal of Lifestone’s LITTLE LIFE ministry is to teach kids truths of
      the Bible with age-appropriate, fun, interactive experiences taught by
      committed volunteers who serve Jesus by serving you and your kids.
      Lifestone is committed not only to cementing the fundamentals of faith
      into the hearts and minds of children, but also equipping parents and
      getting families talking about Jesus together throughout their week.
    </p>

    <Banner>
      <H2>What to Expect</H2>
    </Banner>

    <p>
      When you walk in the door you’ll see signage directing you to your child’s
      check in. At the check in area, you will be greeted by a volunteer who
      will help you sign in your child. Your child is sure to have a blast and
      learn a lot through their kid-sized Bible lesson!
    </p>

    <p>
      *** Our secure environments are staffed with loving volunteers who have
      all submitted to extensive background checks and interviews.
    </p>
  </Layout>
);

export default Page;

export const query = graphql`
  query BirthKindergartenQuery {
    littleLifeImage: file(relativePath: { eq: "pages/kids/little-life.png" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`;
