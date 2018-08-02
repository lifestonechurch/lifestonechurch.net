import React from 'react';

import { H1 } from '../../../components/headers';
import Banner from '../../../components/Banner';
import LifeGroup from '../../../components/LifeGroup';
import Breadcrumbs from '../../../components/Breadcrumbs';

import lifegroupsImage from './lifegroups.jpg';

const title = 'LifeGroups';

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
    <div>
      <Breadcrumbs
        path={[{ title: 'Home', url: '/' }, { title: 'Connect' }]}
        title={title}
      />
      <H1>{title}</H1>

      <img src={lifegroupsImage} />

      <p>
        Connect to God by connecting to His people & His Word! LifeGroups are
        the heart of Lifestone Church. LifeGroups are small groups of people who
        meet once a week in order to connect to God by connecting to other
        people who love Him and to the Bible. This is where spiritual growth
        happens! Check out the details and select the group that works best for
        your family.
      </p>

      <b>Text the leader to sign up!</b>

      {lifegroups.sort(sortByDayOfWeek).map(({ node }, index, array) => (
        <div>
          {index === 0 || array[index - 1].node.day !== node.day ? (
            <Banner>{node.day}</Banner>
          ) : null}

          <LifeGroup
            name={node.name}
            description={node.description && node.description.description}
            day={node.day}
            time={node.time}
            address={node.address}
            hosts={
              node.hosts
                ? node.hosts.map(host => ({
                    id: host.id,
                    name: host.name,
                    description: host.description
                      ? host.description.description
                      : '',
                    photo: host.photo ? host.photo.file.url : '',
                    photoTitle: host.photo ? host.photo.title : '',
                  }))
                : []
            }
            leaders={
              node.leaders
                ? node.leaders.map(leader => ({
                    id: leader.id,
                    name: leader.name,
                    description: leader.description
                      ? leader.description.description
                      : '',
                    photo: leader.photo ? leader.photo.file.url : '',
                    photoTitle: leader.photo ? leader.photo.title : '',
                  }))
                : []
            }
            contact={node.fields.contactFormatted}
            hasChildcare={node.hasChildcare}
          />
        </div>
      ))}

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
    </div>
  );
};

export default Page;

export const query = graphql`
  query LifegroupsQuery {
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
              file {
                url
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
              file {
                url
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
