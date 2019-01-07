import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import PageMenu from '../../components/PageMenu';
import LoggedIn from '../../components/LoggedIn';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const title = 'LifeGroup Leader Resources';

const menuItems = [
  {
    name: 'Curriculum',
    link: '/lifegroup-leaders',
    external: false,
  },
  {
    name: 'Attendance',
    link:
      'https://lifestonechurch.breezechms.com/events/overview#/?start_date=2018-10-19&view=month',
    external: true,
  },
  {
    name: 'Resources',
    link: '/lifegroup-leaders/resources',
    external: false,
  },
];

const LifeGroupLeaderLayout = ({ children, data, onLogout }) => (
  <Layout>
    <H1>{title}</H1>
    <Image>
      <StaticQuery
        query={graphql`
          query LifeGroupLeaderLayoutQuery {
            lifeGroupLeaderImage: file(
              relativePath: { eq: "pages/lifegroup-leaders/lifegroups.jpg" }
            ) {
              childImageSharp {
                sizes(maxWidth: 700) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        `}
        render={data => (
          <Img sizes={data.lifeGroupLeaderImage.childImageSharp.sizes} />
        )}
      />
    </Image>
    <LoggedIn>
      <div>
        <PageMenu items={menuItems} />
        {children}
      </div>
    </LoggedIn>
  </Layout>
);

export default LifeGroupLeaderLayout;
