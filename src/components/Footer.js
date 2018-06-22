import React from 'react';
import styled from 'react-emotion';

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
`;

const LeftColumn = styled.div`
  width: 33%;
`;

const GoogleMap = styled.div`
  position: relative;
  padding-bottom: 75%; // This is the aspect ratio
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
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

        <GoogleMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.893478502823!2d-111.97531858460084!3d40.52184547935291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528434534e1fd7%3A0x3011289953bd878e!2sLifestone+Church!5e0!3m2!1sen!2sus!4v1518562897965"
            style={{border: 0}}
            allowfullscreen=""
            width="600"
            height="450"
            frameborder="0"
          />
        </GoogleMap>
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
