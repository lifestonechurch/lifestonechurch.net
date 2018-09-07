import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import { H3, H4 } from './headers';

const Container = styled.div`
  margin-bottom: 2.5em;
  padding-bottom: 1em;
  border-bottom: 5px solid #008f01;
`;

const ImageStyles = {
  maxWidth: 200,
  borderRadius: '50%',
  shapeOutside: 'circle()',
  marginRight: '2em',
};

const ClearFloat = styled.div`
  clear: both;
`;

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
  <Container>
    <H3>
      {name} - {day}
    </H3>
    <p>{description}</p>
    <blockquote>
      <div>{time}</div>
      <div>{address}</div>
      {contact && (
        <div
          dangerouslySetInnerHTML={{
            __html: contact,
          }}
        />
      )}
    </blockquote>
    {hasChildcare && <p>Free on-site childcare</p>}
    <H4>Hosts</H4>
    <div>
      {hosts.map(h => (
        <div key={h.id}>
          <p>{h.name}</p>
          <p>{h.description}</p>
        </div>
      ))}
    </div>
    <H4>Leaders</H4>
    <div>
      {leaders.map(h => (
        <div key={h.id}>
          <p>{h.name}</p>
          {h.photoSizes && (
            <Img sizes={h.photoSizes} alt={h.photoTitle} style={ImageStyles} />
          )}
          <p>{h.description}</p>
        </div>
      ))}
    </div>
    <ClearFloat />
  </Container>
);

LifeGroup.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      photoSizes: PropTypes.object,
      photoTitle: PropTypes.string,
    })
  ),
  leaders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      photoSizes: PropTypes.object,
      photoTitle: PropTypes.string,
    })
  ),
  contact: PropTypes.string.isRequired,
  hasChildcare: PropTypes.bool.isRequired,
};

export default LifeGroup;
