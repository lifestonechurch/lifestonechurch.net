import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import { H1, H2 } from '../../../components/headers';
import Banner from '../../../components/Banner';
import LifeGroup from '../../../components/LifeGroup';
import Breadcrumbs from '../../../components/Breadcrumbs';

const title = 'LifeGroups';

const VideoContainer = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 600px;
`;

const Video = styled.div`
  position: relative;
  padding-bottom: 53%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-bottom: 20px;

  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 600px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    width: 500px;
    max-width: 90%;
  }
`;

const Image = styled.div`
  margin: 0 auto;
  max-width: 1170px;
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

const Page = ({ data }) => {
  const lifegroups = data.allContentfulSmallGroup.edges;

  return (
    <Layout>
      <Breadcrumbs
        path={[{ title: 'Home', url: '/' }, { title: 'Connect' }]}
        title={title}
      />
      <H1>{title}</H1>

      <Image>
        <Img sizes={data.lifegroupImage.childImageSharp.sizes} />
      </Image>

      <Banner>
        <H2>Preview Our Fall Series!</H2>
      </Banner>

      <VideoContainer>
        <Video>
          <iframe
            src="https://player.rightnow.org/241480"
            width="640"
            height="360"
            style={{
              display: 'block',
              margin: '0 auto',
              maxWidth: '100%',
            }}
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </Video>
      </VideoContainer>

      <Banner>Check Out Our Groups!</Banner>

      <CardContainer>
        {lifegroups.sort(sortByDayOfWeek).map(({ node }, index, array) => (
          <div key={node.id}>
            <LifeGroup
              name={node.name}
              description={node.description && node.description.description}
              day={node.day}
              time={node.time}
              address={node.address || ''}
              hosts={
                node.hosts
                  ? {
                      id: node.hosts[0].id,
                      name: node.hosts[0].name,
                      description: node.hosts[0].description
                        ? node.hosts[0].description.description
                        : '',
                      photoSizes: node.hosts[0].photo
                        ? node.hosts[0].photo.sizes
                        : undefined,
                      photoTitle: node.hosts[0].photo
                        ? node.hosts[0].photo.title
                        : '',
                    }
                  : {}
              }
              leaders={
                node.leaders
                  ? {
                      id: node.leaders[0].id,
                      name: node.leaders[0].name,
                      description: node.leaders[0].description
                        ? node.leaders[0].description.description
                        : '',
                      photoSizes: node.leaders[0].photo
                        ? node.leaders[0].photo.sizes
                        : undefined,
                      photoTitle: node.leaders[0].photo
                        ? node.leaders[0].photo.title
                        : '',
                    }
                  : {}
              }
              contact={node.fields.contactFormatted}
              hasChildcare={node.hasChildcare}
            />
          </div>
        ))}
      </CardContainer>

      <Banner>5 Reasons to Join a LifeGroup!</Banner>

      <ol>
        <li>You will begin to really feel like part of God´s family.</li>
        <li>You will understand the Bible better in a small group.</li>
        <li>Prayer will become more meaningful to you.</li>
        <li>
          You will have friends with whom to share both your joys and burdens.
        </li>
        <li>
          You will have a natural way to share Jesus with neighbors, friends,
          relatives, and co-workers.
        </li>
      </ol>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query LifegroupsQuery {
    lifegroupImage: file(
      relativePath: { eq: "pages/connect/lifegroups/fall-session.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 1170) {
          ...GatsbyImageSharpSizes
        }
      }
    }
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
        }
      }
    }
  }
`;
