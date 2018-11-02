import React from 'react';
import styled from 'react-emotion';

import GoogleMap from './GoogleMap';
import NewsletterForm from './NewsletterForm';
import SocialMedia from './SocialMedia';

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

  @media (max-width: 899px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Footer = () => (
  <Container>
    <InnerContainer>
      <Column>
        <p>Sundays 9:30am or 11:00am</p>

        <p>3443 W 12600 S, Riverton, UT 84065</p>

        <GoogleMap />
      </Column>
      <Column>
        <SocialMedia />
      </Column>
      <Column>
        <NewsletterForm />
      </Column>
    </InnerContainer>
  </Container>
);

export default Footer;
