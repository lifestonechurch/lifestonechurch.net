import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Link from "gatsby-link";
import Card from "./Card";

const Container = styled.div``;

const Img = styled.img`
  max-width: 200px;
  border-radius: 50%;
  shape-outside: circle();
  float: left;
  margin-right: 2em;
`;

const LifeGroup = ({
  name,
  day,
  time,
  address,
  hosts,
  leaders,
  contact,
  hasChildcare
}) => (
  <Container>
    <h3>
      {name} - {day}
    </h3>
    <blockquote>
      <div>{time}</div>
      <div>{address}</div>
      {contact && (
        <div
          dangerouslySetInnerHTML={{
            __html: contact
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
          <Img src={h.photo} title={h.photoTitle} />
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
  </Container>
);

LifeGroup.propTypes = {
  name: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      photoTitle: PropTypes.string.isRequired
    })
  ),
  leaders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      photoTitle: PropTypes.string.isRequired
    })
  ),
  contact: PropTypes.string.isRequired,
  hasChildcare: PropTypes.bool.isRequired
};

export default LifeGroup;