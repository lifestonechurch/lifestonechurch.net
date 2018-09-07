import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import formatDate from '../utils/formatDate';
import HoverCard from './HoverCard';

const Container = styled.div`
  & a {
    text-decoration: none;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0 20px 0;

  @media (max-width: 421px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  margin-left: 20px;
`;

const Title = styled.p`
  font-size: 1.5em;
  margin: 0 0 15px 0;
`;

const MetaData = styled.div`
  margin-bottom: 5px;
`;

const SermonCard = ({ linkTo, imageSizes, title, date, speakers, passage }) => (
  <Container>
    <Link to={linkTo}>
      <HoverCard>
        <InnerContainer>
          <Img
            sizes={imageSizes}
            style={{
              width: 150,
              height: 150,
              margin: 20,
            }}
          />
          <Text>
            <Title>{title}</Title>
            <MetaData>{formatDate(date)}</MetaData>
            <MetaData>{speakers.join('')}</MetaData>
            <MetaData>{passage}</MetaData>
          </Text>
        </InnerContainer>
      </HoverCard>
    </Link>
  </Container>
);

SermonCard.propTypes = {
  linkTo: PropTypes.string.isRequired,
  imageSizes: PropTypes.object.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  speakers: PropTypes.arrayOf(PropTypes.string),
  passage: PropTypes.string,
};

export default SermonCard;
