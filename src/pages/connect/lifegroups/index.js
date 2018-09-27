import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import humanizeList from 'humanize-list';

import Layout from '../../../components/layout';
import { H1, H2, H3, H4 } from '../../../components/headers';
import Banner from '../../../components/Banner';
import LifeGroup from '../../../components/LifeGroup';
import Breadcrumbs from '../../../components/Breadcrumbs';
import VideoPlayer from '../../../components/VideoPlayer';
import MultiSelect from '../../../components/MultiSelect';

const title = 'LifeGroups';

const Center = styled.div`
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

class Page extends React.Component {
  state = {
    selectedDays: [],
  };

  handleLifeGroupDayChange = days => {
    this.setState(prevState => ({
      ...prevState,
      selectedDays: days.map(d => d.name),
    }));
  };

  render() {
    const { data } = this.props;
    const { selectedDays } = this.state;

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
          <H2>Preview Our Fall Series</H2>
        </Banner>

        <VideoPlayer
          url="https://player.rightnow.org/241480"
          maxWidth={600}
          title="The Good Book LifeGroup Series"
        />

        <Banner>Check Out Our Groups</Banner>

        <Center>
          <H3>Which days work best for you?</H3>
        </Center>

        <MultiSelect onChange={this.handleLifeGroupDayChange} />

        {!!this.state.selectedDays.length && (
          <H4>
            LifeGroups on{' '}
            {humanizeList(this.state.selectedDays, { oxfordComma: true })}
          </H4>
        )}

        <CardContainer>
          {lifegroups
            .filter(
              lifegroup =>
                selectedDays.includes(lifegroup.node.day) ||
                selectedDays.length === 0
            )
            .sort(sortByDayOfWeek)
            .map(({ node }, index, array) => (
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
      </Layout>
    );
  }
}

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
