import React from 'react';
import styled from 'react-emotion';

import Facebook from '../images/social/facebook.svg';
import Instagram from '../images/social/instagram.svg';
import Twitter from '../images/social/twitter.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialMediaIcon = styled.img`
  margin-right: 10px;
`;

const SocialMedia = () => (
  <Container>
    <div>
      <p>
        <a
          href="https://www.facebook.com/lifestonechurchutah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialMediaIcon src={Facebook} width="15px" height="15px" alt="facebook" />lifestonechurchutah
        </a>
      </p>
      <p>
        <a
          href="https://www.instagram.com/lifestonechurchutah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialMediaIcon src={Instagram} width="15px" height="15px" alt="instagram" />@lifestonechurchutah
        </a>
      </p>
      <p>
        <a
          href="https://twitter.com/lifestoneutah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialMediaIcon src={Twitter} width="15px" height="15px" alt="twitter" />@lifestoneutah
        </a>
      </p>
    </div>
  </Container>
);

export default SocialMedia;
