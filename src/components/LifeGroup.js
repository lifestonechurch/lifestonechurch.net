import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import Card from './Card';

const Container = styled.div`
  margin-bottom: 2.5em;
  padding-bottom: 1em;
  border-bottom: 5px solid #008f01;
`;

const Img = styled.img`
  max-width: 200px;
  border-radius: 50%;
  shape-outside: circle();
  float: left;
  margin-right: 2em;
`;

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
    <h3>
      {name} - {day}
    </h3>
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
    <h4>Hosts</h4>
    <div>
      {hosts.map(h => (
        <div key={h.id}>
          <p>{h.name}</p>
          <p>{h.description}</p>
        </div>
      ))}
    </div>
    <h4>Leaders</h4>
    <div>
      {leaders.map(h => (
        <div key={h.id}>
          <p>{h.name}</p>
          <Img src={h.photo} title={h.photoTitle} />
          <p>{h.description}</p>
        </div>
      ))}
    </div>
    <ClearFloat />
  </Container>
);

LifeGroup.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      photoTitle: PropTypes.string.isRequired,
    })
  ),
  leaders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      photoTitle: PropTypes.string.isRequired,
    })
  ),
  contact: PropTypes.string.isRequired,
  hasChildcare: PropTypes.bool.isRequired,
};

export default LifeGroup;
