import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
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

const GoogleMap = () => (
  <Container>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.893478502823!2d-111.97531858460084!3d40.52184547935291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528434534e1fd7%3A0x3011289953bd878e!2sLifestone+Church!5e0!3m2!1sen!2sus!4v1518562897965"
      title="Google Map"
      style={{ border: 0 }}
      allowFullScreen=""
      width="600"
      height="450"
      frameBorder="0"
    />
  </Container>
);

export default GoogleMap;
