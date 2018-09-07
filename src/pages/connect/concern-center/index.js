import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import { H1 } from '../../../components/headers';
import Breadcrumbs from '../../../components/Breadcrumbs';

const title = 'Concern Center';

const Image = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const Page = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'Connect' }]}
      title={title}
    />
    <H1>{title}</H1>

    <Image>
      <Img sizes={data.concernCenterImage.childImageSharp.sizes} />
    </Image>

    <p>
      Want to make a difference in our valley? Why not give something that will
      have eternal rewards? Join us and our mission to show and share the love
      of Christ at the Concern Center. They're looking for volunteers to spend a
      few hours once a week, once a month, or whenever you can, in order to help
      those in need find food and clothing to get through the cold winter
      months. They've even set new hours to make it more convenient for you,
      your family, and our church community to join the mission by being open on
      Saturdays from 9am - Noon! You'll be the hands and feet of Jesus to many
      who are far from Him. Will you partner with us in doing something great in
      the name of Jesus?{' '}
      <a
        href="https://signup.com/client/invitation2/secure/2068795/false#/invitation"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join the mission
      </a>.
    </p>
  </Layout>
);

export default Page;

export const query = graphql`
  query ConcernCenterQuery {
    concernCenterImage: file(
      relativePath: { eq: "pages/connect/concern-center/concern-center.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;
