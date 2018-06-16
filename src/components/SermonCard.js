import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Link from "gatsby-link";
import Card from "./Card";

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
`;

const Img = styled.img`
  width: 150px;
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

const SermonCard = ({ linkTo, image, title, date, speakers, passage }) => (
  <Container>
    <Link to={linkTo}>
      <Card>
        <InnerContainer>
          <Img src={image} />
          <Text>
            <Title>{title}</Title>
            <MetaData>{date}</MetaData>
            <MetaData>{speakers.join("")}</MetaData>
            <MetaData>{passage}</MetaData>
          </Text>
        </InnerContainer>
      </Card>
    </Link>
  </Container>
);

SermonCard.propTypes = {
  linkTo: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  speakers: PropTypes.arrayOf(PropTypes.string),
  passage: PropTypes.string
};

export default SermonCard;
