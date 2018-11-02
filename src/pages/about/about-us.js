import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import { H1, H2 } from '../../components/headers';
import BibleQuote from '../../components/BibleQuote';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'About Us';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const AboutUs = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <p>
      A church in Riverton Utah excited about bringing the amazing message of
      God’s grace to our community. We are a Bible based church dedicated to
      doing whatever it takes to share the good news that has radically changed
      our lives to everyone possible.
    </p>

    <Image>
      <Img sizes={data.worship.childImageSharp.sizes} />
    </Image>

    <H2>Life discovered. Life shared.</H2>

    <BibleQuote reference="1 John 5:12 NLT">
      “Whoever has the Son has life; whoever does not have God’s Son does not
      have life.”
    </BibleQuote>

    <p>
      <b>Mission</b>: “Jesus came and told his disciples, “I have been given all
      authority in heaven and on earth. Therefore, go and make disciples of all
      the nations, baptizing them in the name of the Father and the Son and the
      Holy Spirit. Teach these new disciples to obey all the commands I have
      given you. And be sure of this: I am with you always, even to the end of
      the age.” Matthew 28:18-20 NLT
    </p>

    <p>
      <b>Mission Motto</b>: Life discovered. Life Shared.
    </p>

    <p>
      <b>Vision</b>: To establish a local church family committed to loving God,
      loving people, and sharing with everyone in our community and beyond, real
      life in Christ.
    </p>

    <p>
      <b>Strategy</b>:
    </p>
    <ul>
      <li>GET CONNECTED on Sundays at 9:30am or 11:00am.</li>
      <li>GET HEALTHY by committing to a LifeGroup.</li>
      <li>GET GOING! Serve, support, meet needs & share Jesus.</li>
    </ul>

    <p>
      <b>Values</b>:
    </p>

    <ul>
      <li>
        <b>Focus</b> – We will be guided by focusing on the mission Jesus gave
        His followers and the callings of the church to Evangelism, Ministry,
        Worship, Discipleship, and Fellowship, aware of our natural tendency to
        focus on self, those reached, and to slip in to maintenance mode, or
        busy church programming.
      </li>
      <li>
        <b>Grace</b> – We will humbly serve and love one another and both the
        easy to love and difficult outside our church family. We will humbly
        submit and support the imperfect leadership of the church and put others
        first.
      </li>
      <li>
        <b>Joy</b> – As we celebrate Jesus and live a life in God’s family our
        lives should be full of authentic joy than is attractive to those
        without God’s peace and forgiveness. We will have fun as a church
        family.
      </li>
    </ul>

    <p>
      We are partnered with the{' '}
      <a href="https://www.namb.net" target="_blank" rel="noopener noreferrer">
        NAMB
      </a>, the{' '}
      <a href="http://www.uisbc.org" target="_blank" rel="noopener noreferrer">
        UISBC
      </a>, and the{' '}
      <a href="https://slba.org" target="_blank" rel="noopener noreferrer">
        Salt Lake Baptist Association
      </a>.
    </p>
  </Layout>
);

export default AboutUs;

export const query = graphql`
  query AboutUsQuery {
    worship: file(relativePath: { eq: "pages/about/worship.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
