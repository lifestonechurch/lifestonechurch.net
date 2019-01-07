import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Tag from '../../components/Tag';
import PayPalForm from '../../components/PayPalForm';
import { H1, H2, H3 } from '../../components/headers';
import * as COLORS from '../../constants/colors';

const title = 'Little Learners';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;

  > div {
    width: 500px;
    max-width: 90%;
  }
`;

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 20px;
`;

const FloatLeft = styled.div`
  float: left;
  width: 300px;
  margin: 0 20px 20px 0;

  @media (max-width: 530px) {
    float: inherit;
    margin: 0 auto;
  }
`;

const CardInner = styled.div`
  padding: 20px;
`;

const Director = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const ClearFloat = styled.div`
  clear: both;
`;

const Page = ({ data }) => (
  <Layout>
    <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />
    <H1>{title}</H1>

    <Img
      sizes={data.littleLearnersImage.childImageSharp.sizes}
      style={{
        maxWidth: '100%',
      }}
    />

    <p>
      Lifestone Little Learners provides a safe learning environment where 2-5
      year-olds discover God’s love, important social & life skills, and early
      math & reading skills in preparation for Pre-K and Kindergarten. Contact
      Little Learners Director Ali Gardner with any questions:{' '}
      <a href="mailto:ali@lifestonechurch.net">ali@lifestonechurch.net</a>
    </p>

    <Button linkTo="/little-learners/#enrollment-form">Enroll now</Button>

    <Banner>
      <H2>Class Descriptions</H2>
    </Banner>

    <CardContainer>
      <Card>
        <CardInner>
          <H3>2-3 ½ Year Olds</H3>
          <p>Tuesday, Thursday 8:30am-11:30am</p>

          <p>$120/Month September-May</p>

          <ul>
            <li>Bible Lessons</li>
            <li>Communication/Social Skills</li>
            <li>Exposure to letters, numbers, and colors</li>
            <li>Small & large motor skills</li>
            <li>Art</li>
            <li>Music</li>
            <li>Physical Education</li>
          </ul>
        </CardInner>
      </Card>

      <Card>
        <CardInner>
          <H3>3 ½-5 Year Olds</H3>
          <p>Tuesday, Thursday 8:30am-11:30am</p>

          <p>$120/Month September-May</p>

          <ul>
            <li>Bible Lessons</li>
            <li>Communication/Social Skills</li>
            <li>Early Math and Literacy</li>
            <li>Introduction to Writing</li>
            <li>Art</li>
            <li>Music</li>
            <li>Physical Education</li>
          </ul>
        </CardInner>
      </Card>
    </CardContainer>

    <Banner>
      <H2>Meet the Director</H2>
    </Banner>

    <Director>
      <FloatLeft>
        <Img
          sizes={data.directorImage.childImageSharp.sizes}
          alt="Ali Gardner"
        />
      </FloatLeft>

      <p>
        Ali Gardner has served in the education field for over 9 years. For 7
        years she taught elementary school including Kindergarten, 4th, 5th, and
        6th grades. During her time teaching, Ali also served on a curriculum
        planning team which helped create a character development program in
        partnership with the Medal of Honor Foundation. Ali currently teaches
        English online for a Christian based school that outreaches to families
        in China. She earned her Bachelor’s Degree in Sociology from the
        University of California Santa Barbara, a Master’s Degree in Education
        with emphasis in Professional Learning Communities from Grand Canyon
        University, and has a Multiple Subject Teaching Credential. Ali’s goal
        for the students at Lifestone Little Learners is that they discover
        God’s love while also developing a love of academic learning!
      </p>

      <ClearFloat />
    </Director>

    <Banner>
      <H2>Enrollment Form</H2>
    </Banner>

    <iframe
      src="https://lifestonechurch.breezechms.com/form/1eb0c6"
      title="Enrollment form"
      style={{
        width: `100%`,
        height: 3100,
        margin: `0 auto`,
        border: `1px solid #fff`,
      }}
    />

    <Banner>
      <H2>Tuition Payment Options</H2>
    </Banner>

    <CardContainer>
      <Card>
        <InnerCard>
          <div>
            <H2>Pay Directly</H2>

            <Tag color={COLORS.BRAND}>Preferred</Tag>

            <p>Make payment directly to Lifestone Little Learners</p>

            <Button linkTo="https://lifestonechurch.breezechms.com/form/LLLTuition">
              Make Payment
            </Button>
          </div>
        </InnerCard>
      </Card>

      <Card>
        <InnerCard>
          <div>
            <H2>PayPal</H2>
            <PayPalForm
              label="Payment Amount"
              itemName="Little Learners"
              payee="ali@lifestonechurch.net"
              isDonation={false}
              defaultAmount={120}
            />
          </div>
        </InnerCard>
      </Card>
    </CardContainer>
  </Layout>
);

export default Page;

export const query = graphql`
  query LittleLearnersQuery {
    littleLearnersImage: file(
      relativePath: { eq: "pages/little-learners/little-learners.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    directorImage: file(
      relativePath: { eq: "pages/little-learners/ali-gardner.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 384) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
