import React from "react";
import styled from "react-emotion";
import GoogleMap from "./GoogleMap";

const Container = styled.div`
  margin-top: 40px;
  padding: 40px;
  background-color: #484848;
  color: #fff;

  h4 {
    color: #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  width: 33%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SocialMediaIcon = styled.img`
  margin-right: 10px;
`;

const Footer = () => (
  <Container>
    <InnerContainer>
      <LeftColumn>
        <h4>Sundays 9:00 am or 10:30 am</h4>

        <p>3443 W 12600 S, Riverton, UT 84065</p>

        <GoogleMap></GoogleMap>
      </LeftColumn>
      <div>
        <p>
          <a
            href="https://www.facebook.com/lifestonechurchutah/"
            target="_blank"
          >
            <SocialMediaIcon
              src="/assets/images/facebook.svg"
              width="15px"
              height="15px"
            />lifestonechurchutah
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/lifestonechurchutah/"
            target="_blank"
          >
            <SocialMediaIcon
              src="/assets/images/instagram.svg"
              width="15px"
              height="15px"
            />@lifestonechurchutah
          </a>
        </p>
        <p>
          <a href="https://twitter.com/lifestoneutah" target="_blank">
            <SocialMediaIcon
              src="/assets/images/twitter.svg"
              width="15px"
              height="15px"
            />@lifestoneutah
          </a>
        </p>
      </div>
    </InnerContainer>
  </Container>
);

export default Footer;
