import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import humanizeList from 'humanize-list';

import { H3, H4 } from './headers';
import Card from './Card';
import Button from './Button';

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
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
  description,
  day,
  time,
  address,
  hosts,
  leaders,
  contact,
  hasChildcare,
  registrationLink,
}) => (
  <Card>
    <InnerCard>
      <div>
        <H3>{name}</H3>
        {registrationLink && (
          <Button linkTo={registrationLink}>Register</Button>
        )}
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
      </div>

      <div>
        {contact && (
          <div
            dangerouslySetInnerHTML={{
              __html: contact,
            }}
          />
        )}
      </div>
    </InnerCard>
  </Card>
);

LifeGroup.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hosts: PropTypes.array,
  leaders: PropTypes.array,
  contact: PropTypes.string.isRequired,
  hasChildcare: PropTypes.bool.isRequired,
  registrationLink: PropTypes.string,
};

export default LifeGroup;
