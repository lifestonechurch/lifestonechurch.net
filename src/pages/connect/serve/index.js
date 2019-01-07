import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import { H1, H2 } from '../../../components/headers';
import BreezeForm from '../../../components/BreezeForm';
import Breadcrumbs from '../../../components/Breadcrumbs';

const title = 'Serve';

const Image = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

const Page = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'Connect' }]}
      title={title}
    />
    <H1>{title}</H1>

    <Image>
      <Img sizes={data.volunteerImage.childImageSharp.sizes} />
    </Image>

    <p>
      We are excited to get you serving God and serving others in the role that
      fits you best! Check out descriptions below of the many service
      opportunities available to you.
    </p>

    <p>
      Please fill out the Volunteer Inquiry form at the link below to let us
      know which team you’re interested in serving alongside, and we’ll contact
      you with more information about volunteering soon!
    </p>

    <H2>Sunday Mornings</H2>

    <p>
      <b>1st Impressions</b> volunteers have the privilege of serving every
      person who attends our church. Our goal in every interaction is to exceed
      expectations of hospitality and to ensure a remarkable experience.
    </p>

    <p>
      <b>Kid’s Life</b> volunteers work to create a fun environment for
      elementary kids to learn who God is and how he wants them to live. Our
      goal is to ensure that kids LOVE coming to church at Lifestone and that
      they understand how much God really loves them.
    </p>

    <p>
      <b>Little Life</b> volunteers work to create a loving environment in our
      Birth-Age 2 class and our Age 3 Kindergarten class. Our goal is to make
      kids feel safe, loved, and teach them about God’s love for them.
    </p>

    <p>
      <b>Sunday Morning Media & Worship Team</b> volunteers produce a relevant,
      exciting, and inviting worship environment through playing music or
      serving in audio, video, or lighting.
    </p>

    <H2>Wednesday Evenings</H2>

    <p>
      <b>Wednesday Night Media</b> volunteers produce a student-friendly worship
      environment through audio, video, or lighting that is exciting and
      inviting.
    </p>

    <p>
      <b>Youth Group</b> volunteers serve as small group leaders and create
      environments where middle school and high school students prioritize their
      relationship with Christ, influence their friends, and experience personal
      ministry.
    </p>

    <H2>During the Week</H2>

    <p>
      <b>LifeGroup Hosts</b> open their homes and work to ensure that LifeGroup
      members are made to feel welcome in a clean, comfortable environment where
      they can connect with one another and God’s Word.
    </p>

    <p>
      <b>Grounds Maintenance</b> volunteers work to keep our church building and
      grounds beautiful, welcoming, functioning and safe through tasks like yard
      work and building maintenance.
    </p>

    <p>
      <b>Concern Center of Salt Lake</b> is the benevolence arm of the churches
      of the Salt Lake Baptist Association. Volunteers from Lifestone serve in
      various ways to help the center share food, clothes, and household items
      with people in need.
    </p>

    <p>
      <b>Administration/ Communication</b> volunteers communicate information
      regarding events and ministries through our website, church database,
      email, and social media in an effort to connect and assimilate current and
      potential Lifestone attendees into our church family.
    </p>

    <p>
      <b>Building Cleaning</b> volunteers serve on Saturdays to keep our
      building clean and beautiful for Sundays.
    </p>

    <p>
      <b>Prayer Team</b> volunteers pray during Sunday morning services that God
      would move in the hearts and lives of all in attendance.
    </p>

    <BreezeForm
      url="https://lifestonechurch.breezechms.com/form/db82a8"
      height={1500}
    />
  </Layout>
);

export default Page;

export const query = graphql`
  query ServeQuery {
    volunteerImage: file(
      relativePath: { eq: "pages/connect/serve/volunteer.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 900) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
