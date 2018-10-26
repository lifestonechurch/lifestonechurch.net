import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import { H1, H2 } from '../../components/headers';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import VideoPlayer from '../../components/VideoPlayer';

const title = 'Grades 1-5';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const Page = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'Kids' }]}
      title={title}
    />
    <H1>{title}</H1>

    <Image>
      <Img sizes={data.kidsLifeImage.childImageSharp.sizes} />
    </Image>

    <p>
      The goal of Lifestone’s KID’S LIFE ministry is to teach kids truths of the
      Bible with age-appropriate, fun, interactive experiences taught by
      committed volunteers who serve Jesus by  serving you and your kids.
      Lifestone is committed not only to cementing the fundamentals of faith
      into the hearts and minds of children, but also equipping parents and
      getting families talking about Jesus together throughout their week.
    </p>

    <Banner>
      <H2>Current Series</H2>
    </Banner>

    <VideoPlayer
      url="https://www.youtube.com/embed/U6EkuGoMbZA"
      maxWidth={600}
      title="What's in the Bible Series"
    />

    <p>
      Calling all 1st-5th graders! Buck Denver and his friends are on an
      adventure through the whole Bible – and you’re invited to come along! Join
      us as we learn all about the Bible, the world’s most important book –what
      it is, who wrote it, and why can we trust it!
    </p>

    <Banner>
      <H2>What to Expect</H2>
    </Banner>

    <p>
      When you walk in the door at Lifestone on Sunday mornings, our greeters
      will direct you to the Kids Check In Station. There, you will be greeted
      by a volunteer who will help you sign in your child and give you a tag so
      that you can securely check your child out after the service ends. Your
      child will enjoy an hour long, kid-friendly Bible experience while you
      join other adults in the worship room for live worship music and to listen
      to Pastor Ben's message.
    </p>

    <p>
      *** Our secure environments are staffed with loving volunteers who have
      all passed extensive background checks and interviews.
    </p>
  </Layout>
);

export default Page;

export const query = graphql`
  query LittleLifeQuery {
    kidsLifeImage: file(relativePath: { eq: "pages/kids/kids-life.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`;
