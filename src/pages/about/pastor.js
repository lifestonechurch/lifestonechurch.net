import React from 'react';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import { H1 } from '../../components/headers';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Meet the Pastor';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const Page = ({ data }) => (
  <div>
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
      Lifestone Church is supported by{' '}
      <a href="https://www.namb.net/" target="_blank" rel="noopener">
        The North American Mission Board.
      </a>
    </p>
  </div>
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
