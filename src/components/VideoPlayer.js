import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const VideoContainer = styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${({ maxWidth }) => `${maxWidth}px` || `inherit`};
`;

const Container = styled.div`
  height: 0;
  padding-top: 25px;
  padding-bottom: 67.5%;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  padding-bottom: 56.34%;

  iframe {
    border: none;
  }

  & embed,
  & iframe,
  & object,
  & video {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const VideoPlayer = ({ url, maxWidth }) => (
  <VideoContainer maxWidth={maxWidth}>
    <Container>
      <iframe
        src={url}
        width="560"
        height="315"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </Container>
  </VideoContainer>
);

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  maxWidth: PropTypes.number,
};

export default VideoPlayer;
