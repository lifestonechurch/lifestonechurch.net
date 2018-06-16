import React from "react";
import styled from "react-emotion";
import PropTypes from "prop-types";

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

const VimeoPlayer = ({ id }) => (
  <Container>
    <iframe
      src="https://player.vimeo.com/video/124588710"
      width="640"
      height="360"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    />
  </Container>
);

VimeoPlayer.propTypes = {
  id: PropTypes.string.isRequired
};

export default VimeoPlayer;
