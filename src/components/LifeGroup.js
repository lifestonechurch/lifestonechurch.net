import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import slug from 'slug';
import humanizeList from 'humanize-list';

import { H3 } from './headers';
import Card from './Card';
import Button from './Button';

const InnerCard = styled.div`
  padding: 20px;
`;

const ReachedCapacity = styled.p`
  text-transform: uppercase;
`;

const ImageStyles = {
  width: 200,
  marginRight: 20,
  marginBottom: 20,
  float: 'left',
};

const ClearFloat = styled.div`
  clear: both;
`;

const LifeGroup = ({
  name,
  isOpen,
  description,
  day,
  time,
  address,
  hosts,
  leaders,
  hasChildcare,
  registrationLink,
  reachedCapacity,
}) => (
  <Card>
    <InnerCard>
      <H3>{name}</H3>

      {isOpen ? (
        registrationLink && !reachedCapacity ? (
          <Button linkTo={registrationLink}>Register</Button>
        ) : (
          <ReachedCapacity>Reached Capacity</ReachedCapacity>
        )
      ) : null}
      <p>
        <b>
          {day}s {time}
        </b>
      </p>
      <p>{address && address}</p>
      <p>{description}</p>

      {leaders ? (
        <React.Fragment>
          <div>
            {leaders.map(leader => (
              <div key={leader.id}>
                {leader.photo && (
                  <Img
                    sizes={leader.photo.sizes}
                    alt={leader.photo.title}
                    style={ImageStyles}
                  />
                )}
              </div>
            ))}
          </div>
          <ClearFloat />

          <p>
            Leader{leaders.length === 1 && leaders[0].name.includes('&')
              ? 's'
              : ''}: {humanizeList(leaders.map(l => l.name))}
          </p>

          <p>
            <Link
              to={`/connect/lifegroups/leaders#${slug(name, {
                lower: true,
              })}-leaders`}
            >
              Meet the leaders
            </Link>
          </p>
        </React.Fragment>
      ) : null}

      {hosts ? (
        <p>
          Host{hosts.length === 1 && hosts[0].name.includes('&') ? 's' : ''}:{' '}
          {humanizeList(hosts.map(h => h.name))}
        </p>
      ) : null}
    </InnerCard>
  </Card>
);

LifeGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hosts: PropTypes.array,
  leaders: PropTypes.array,
  hasChildcare: PropTypes.bool.isRequired,
  registrationLink: PropTypes.string,
  reachedCapacity: PropTypes.bool.isRequired,
};

export default LifeGroup;
