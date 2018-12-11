import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import { H3, H4 } from './headers';
import Card from './Card';

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
`;

const ImageStyles = {
  maxWidth: 200,
  marginRight: '2em',
  marginBottom: '28px',
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
}) => (
  <Card>
    <InnerCard>
      <div>
        <H3>{name}</H3>
        <p>
          {time} on {day}s {address && `at ${address}`}
        </p>
        <p>{description}</p>

        <H4>Hosts: {hosts.name}</H4>

        <H4>Leaders: {leaders.name}</H4>
        <div>
          <div key={leaders.id}>
            {leaders.photoSizes && (
              <Img
                sizes={leaders.photoSizes}
                alt={leaders.photoTitle}
                style={ImageStyles}
              />
            )}
          </div>
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
  hosts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    photoSizes: PropTypes.object,
    photoTitle: PropTypes.string,
  }),
  leaders: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    photoSizes: PropTypes.object,
    photoTitle: PropTypes.string,
  }),
  contact: PropTypes.string.isRequired,
  hasChildcare: PropTypes.bool.isRequired,
};

export default LifeGroup;
