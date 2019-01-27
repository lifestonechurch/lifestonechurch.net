import React from 'react';
import styled from 'react-emotion';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import humanizeList from 'humanize-list';

import Banner from '../../../components/Banner';
import Card from '../../../components/Card';
import Layout from '../../../components/layout';
import { H2, H3, H4 } from '../../../components/headers';
import LifeGroup from '../../../components/LifeGroup';
import MultiSelect from '../../../components/MultiSelect';

const title = 'LifeGroups';

const guides = [
  {
    name: 'Week of 1/20',
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/lifegroup-notes/LG.Study.Week.of.1.20.pdf',
  },
  {
    name: 'Week of 1/27',
    pdf:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/lifegroup-notes/lifegroup-study-2019-01-27.pdf',
  },
];

const DatePickerContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 799px) {
    grid-template-columns: 1fr;
  }
`;

const InnerCard = styled.div`
  padding: 20px;
`;

const Image = styled.div`
  margin: 0 auto 40px;
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

const sortByAvailability = (a, b) =>
  a.node.reachedCapacity && !b.node.reachedCapacity
    ? 1
    : !a.node.reachedCapacity && b.node.reachedCapacity ? -1 : 0;

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

    const allDays = Object.keys(
      lifegroups.reduce(
        (days, { node }) => ({
          ...days,
          [node.day]: node.day,
        }),
        {}
      )
    ).map(x => ({
      name: x,
      id: x,
    }));

    return (
      <Layout>
        <Image>
          <Img sizes={data.lifegroupImage.childImageSharp.sizes} alt={title} />
        </Image>

        <p>
          LifeGroups, small groups who meet throughout the week, are the heart
          of Lifestone Church. They’re the place where the real ministry of the
          church takes place as we study God’s Word while supporting and sharing
          our lives with one another. We believe that meeting together on a
          regular basis is time well spent. Email{' '}
          <a href="mailto:lifestone@lifestonechurch.net">
            lifestone@lifestonechurch.net
          </a>{' '}
          with any questions.
        </p>

        <DatePickerContainer>
          <H3>Which days work best for you?</H3>

          <MultiSelect
            onChange={this.handleLifeGroupDayChange}
            items={allDays}
          />
        </DatePickerContainer>

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
            .sort(sortByAvailability)
            .map(({ node }, index, array) => (
              <LifeGroup
                isOpen={true}
                key={node.id}
                name={node.name}
                description={node.description && node.description.description}
                day={node.day}
                time={node.time}
                address={node.address || ''}
                hosts={node.hosts || null}
                leaders={node.leaders || null}
                contact={node.fields.contactFormatted}
                hasChildcare={node.hasChildcare}
                registrationLink={node.registrationLink}
                reachedCapacity={!!node.reachedCapacity}
              />
            ))}
        </CardContainer>

        <Banner>
          <H2>Discussion Guides</H2>
        </Banner>

        <CardContainer>
          {guides.map((c, i) => (
            <Card key={i}>
              <InnerCard>
                <H3>{c.name}</H3>
                {c.pdf && (
                  <p>
                    <a href={c.pdf} target="_blank" rel="noopener noreferrer">
                      Discussion Guide
                    </a>
                  </p>
                )}
                {c.video && (
                  <p>
                    <a href={c.video} target="_blank" rel="noopener noreferrer">
                      Video
                    </a>
                  </p>
                )}
              </InnerCard>
            </Card>
          ))}
        </CardContainer>

        <Link to="/lifegroup-leaders">LifeGroup Leader Resources</Link>
      </Layout>
    );
  }
}

export default Page;

export const query = graphql`
  query LifegroupsQuery {
    lifegroupImage: file(
      relativePath: { eq: "pages/connect/lifegroups/winter-registration.jpg" }
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
          registrationLink
          reachedCapacity
        }
      }
    }
  }
`;
