import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Link from "gatsby-link";
import EventCard from "./EventCard";
import {
  getMonthNumber,
  getMonthName,
  shortFormatDate
} from "../utils/formatDate";

const Item = styled.div`
  margin: 8px 0;
`;

const SmallCalendar = ({ events }) => (
  <div>
    {events.map((event, i) => (
      <Item>
        {shortFormatDate(event.startDate)} -{" "}
        <Link to={`/events/${event.slug}`}>{event.name}</Link>
      </Item>
    ))}
  </div>
);

SmallCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired
    })
  )
};

export default SmallCalendar;
