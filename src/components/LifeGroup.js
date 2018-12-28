import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import humanizeList from 'humanize-list';

import { H3, H4 } from './headers';
import Card from './Card';
import Button from './Button';

const InnerCard = styled.div`
  padding: 20px;
`;

const ReachedCapacity = styled.p`
  text-transform: uppercase;
`;

const Description = styled.p``;

const ImageStyles = {
  width: 200,
  marginRight: 20,
  marginBottom: 20,
  float: 'left',
};

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
        {day}s {time}
      </p>
      <p>{address && address}</p>
      <p>{description}</p>

      {hosts && <H4>Hosts: {humanizeList(hosts.map(h => h.name))}</H4>}

      <H4>Leaders: {humanizeList(leaders.map(l => l.name))}</H4>
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
            {leader.description && (
              <Description>{leader.description.description}</Description>
            )}
          </div>
        ))}
      </div>
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
