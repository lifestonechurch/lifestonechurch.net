import styled from 'react-emotion';
import * as COLORS from '../constants/colors';

const Banner = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 35px;
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 2em;
  background-color: ${COLORS.BRAND};
  color: #fff;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    margin: 0;
  }
`;

export default Banner;
