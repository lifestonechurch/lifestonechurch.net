import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import humanizeList from 'humanize-list';

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
          {day}s {time}
        </p>
        <p>{address && address}</p>
        <p>{description}</p>

        {hosts.name && <H4>Hosts: {hosts.name}</H4>}

        <H4>Leaders: {humanizeList(leaders.map(l => l.name))}</H4>
        <div>
          {leaders.map(
            leader =>
              console.log(leader) || (
                <div key={leader.id}>
                  {leader.photo && (
                    <Img
                      sizes={leader.photo.sizes}
                      alt={leader.photo.title}
                      style={ImageStyles}
                    />
                  )}
                </div>
              )
          )}
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
};

export default LifeGroup;
