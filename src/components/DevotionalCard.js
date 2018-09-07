import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Card from './Card';
import * as COLORS from '../constants/colors';

const Container = styled.div`
  & a {
    text-decoration: none;
  }
`;

const Img = styled.img`
  width: 150px;
`;

const Title = styled.p`
  font-size: 1.5em;
  margin: 0 0 15px 0;
`;

const MetaData = styled.div`
  font-size: 14px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.6);
  line-height: 2em;
  margin-bottom: 10px;
`;

const ReadMore = styled.div`
  color: ${COLORS.BRAND};
`;

const SermonCard = ({ linkTo, title, date, author, description }) => (
  <Container>
    <Link to={linkTo}>
      <Card>
        <Title>{title}</Title>
        <MetaData>
          {date} - {author}
        </MetaData>
        <p>{description}</p>
        <ReadMore>Read more</ReadMore>
      </Card>
    </Link>
  </Container>
);

SermonCard.propTypes = {
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SermonCard;
