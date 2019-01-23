import React from 'react';
import styled from 'react-emotion';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import slug from 'slug';

import Layout from '../../../components/layout';
import Card from '../../../components/Card';
import { H1, H2, H3 } from '../../../components/headers';
import Breadcrumbs from '../../../components/Breadcrumbs';

const title = 'LifeGroup Leaders';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  > div {
    margin-bottom: 20px;
    padding: 20px;
  }
`;

const ImageWrapper = styled.span`
  float: left;

  @media (max-width: 400px) {
    float: none;
  }
`;

const ImageStyles = {
  width: 200,
  marginRight: 20,
  marginBottom: 20,
};

const ClearFloat = styled.div`
  clear: both;
`;

const sortByDayOfWeek = (a, b) => {
  const days = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };
  return days[a.node.day] - days[b.node.day];
};

class Page extends React.Component {
  render() {
    const { data } = this.props;

    const lifegroups = data.allContentfulSmallGroup.edges;

    return (
      <Layout>
        <Breadcrumbs
          path={[
            { title: 'Home', url: '/' },
            { title: 'Connect' },
            { title: 'LifeGroups', url: '/connect/lifegroups' },
          ]}
          title={title}
        />
        <H1>{title}</H1>

        <CardContainer>
          {lifegroups
            .sort(sortByDayOfWeek)
            .filter(
              ({ node }) =>
                node.leaders &&
                node.leaders.reduce(
                  (accum, leader) => accum || leader.description,
                  false
                )
            )
            .map(({ node }, index, array) => (
              <Card key={node.id}>
                <H2>{node.name} Leaders</H2>
                {node.leaders &&
                  node.leaders.map(leader => (
                    <div key={leader.id}>
                      <H3>{leader.name}</H3>

                      {leader.photo && (
                        <ImageWrapper>
                          <Img
                            sizes={leader.photo.sizes}
                            alt={leader.photo.title}
                            style={ImageStyles}
                          />
                        </ImageWrapper>
                      )}
                      <p>
                        {leader.description
                          ? leader.description.description
                          : null}
                      </p>
                      <ClearFloat />
                    </div>
                  ))}

                {
                  <Link
                    to={`/connect/lifegroups#${slug(node.name, {
                      lower: true,
                    })}`}
                  >
                    Back to LifeGroups
                  </Link>
                }
              </Card>
            ))}
        </CardContainer>
      </Layout>
    );
  }
}

export default Page;

export const query = graphql`
  query LifegroupsLeadersQuery {
    allContentfulSmallGroup {
      edges {
        node {
          id
          name
          description {
            description
          }
          day
          time
          address
          hosts {
            id
            name
            description {
              description
            }
            photo {
              title
              sizes(maxWidth: 200) {
                ...GatsbyContentfulSizes
              }
            }
          }
          leaders {
            id
            name
            description {
              description
            }
            photo {
              title
              sizes(maxWidth: 200) {
                ...GatsbyContentfulSizes
              }
            }
          }
          hasChildcare
          fields {
            contactFormatted
          }
          registrationLink
          reachedCapacity
        }
      }
    }
  }
`;
