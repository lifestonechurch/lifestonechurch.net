import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import {
  shortFormatDate,
  getDayOfWeek,
  getFirstStartDate,
  getLastEndDate,
} from '../utils/formatDate';
import * as COLORS from '../constants/colors';
import Card from './Card';
import Tag from './Tag';
import { H3 } from './headers';

const LifeGroupCard = ({ title }) => (
  <Container>
    <Card>{title}</Card>
  </Container>
);

// LifeGroupCard.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   linkTo: PropTypes.string.isRequired,
//   startDate: PropTypes.string,
//   dates: PropTypes.arrayOf(
//     PropTypes.shape({
//       startDate: PropTypes.string,
//       endDate: PropTypes.string,
//       repeatingSchedule: PropTypes.string,
//       timeDescription: PropTypes.string,
//     })
//   ),
// };

export default LifeGroupCard;
