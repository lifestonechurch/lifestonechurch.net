import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import { H1, H2 } from '../../components/headers';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import BibleQuote from '../../components/BibleQuote';
import Breadcrumbs from '../../components/Breadcrumbs';
import Card from '../../components/Card';
import Tag from '../../components/Tag';
import PayPalForm from '../../components/PayPalForm';

import * as COLORS from '../../constants/colors';

const title = 'Give';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const lastYear = new Date().getUTCFullYear() - 1;

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
  height: 100%;
  padding: 20px;
`;

const Footer = styled.div`
  p {
    font-size: 0.9em;
    font-style: italic;
  }
`;

const Page = ({ data }) => (
  <Layout>
    <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />
    <H1>{title}</H1>
    <p>
      Help support the work that we're doing to reach our community! Donations
      to Lifestone help support the local church and churches around the world.
    </p>
    <BibleQuote reference="2 Corinthians 9:7 (NIV)">
      "Each of you should give what you have decided in your heart to give, not
      reluctantly or under compulsion, for God loves a cheerful giver."
    </BibleQuote>

    <Banner>
      <H2>Ways to Give</H2>
    </Banner>
    <CardContainer>
      <Card>
        <InnerCard>
          <div>
            <H2>Online Bill Pay</H2>

            <Tag color={COLORS.BRAND}>Preferred</Tag>

            <p>
              Give to Lifestone through your checking account online. All you
              need is our mailing address:
            </p>

            <p>
              5526 W. 13400 S.<br />
              #352<br />
              Herriman UT 84096
            </p>
          </div>

          <Footer>
            <p>
              For every $100 you give: $100.00<br />
              Automatic bank check is no cost to us
            </p>
          </Footer>
        </InnerCard>
      </Card>

      <Card>
        <InnerCard>
          <div>
            <H2>PayPal</H2>
            <PayPalForm
              label="Donation Amount"
              itemName="Donation to Lifestone Church"
              payee="give@lifestonechurch.net"
            />
          </div>
          <Footer>
            <p>
              For every $100 you give: $97.50<br />
              2.2% + $0.30 per transaction
            </p>
          </Footer>
        </InnerCard>
      </Card>
    </CardContainer>
    <Banner>
      <H2>Reach More Land Fundraiser</H2>
    </Banner>
    <Image>
      <Img
        sizes={data.reachMoreImage.childImageSharp.sizes}
        alt="Reach More Land Fundraiser"
      />
    </Image>
    <p>How to give to reach more:</p>
    <p>
      Text 385-800-3135 amount + the word reach<br />Example: $50 reach
    </p>
    <p>OR</p>
    <p>Signify "REACH" in the memo of your check or online gift</p>
    <Banner>
      <H2>{lastYear} Giving Statement</H2>
    </Banner>
    <p>
      To view, print, or download your giving statement, follow the steps below.
      Remember, we are here to help!
    </p>
    <ol>
      <li>
        <a
          href="https://lifestonechurch.breezechms.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>{' '}
        to your account.
      </li>
      <li>Select "My Profile".</li>
      <li>Select "Giving" on the left side of your screen.</li>
      <li>
        Adjust the dates to 1/1/{lastYear} - 12/31/{lastYear}. (If your
        contributions do not appear, try changing the "Show For" drop down from
        your name to your family name or vise versa.)
      </li>
      <li>Print or download your giving statement from this screen.</li>
    </ol>
    <p>
      Feel free to email{' '}
      <a href="mailto:denise@lifestonechurch.net">
        Denise McGee (denise@lifestonechurch.net)
      </a>{' '}
      with any questions regarding your giving statement.
    </p>
    <Button linkTo="https://lifestonechurch.breezechms.com/">
      View Giving Statment
    </Button>
    <p>
      If you need help logging in, please email{' '}
      <a href="mailto:lifestone@lifestonechurch.net?subject=Please%20help%20me%20login%20to%20Lifestone's%20database!&body=First%20%26%20Last%20Name%3A">
        lifestone@lifestonechurch.net
      </a>{' '}
      for help.
    </p>
  </Layout>
);

export default Page;

export const query = graphql`
  query GiveQuery {
    reachMoreImage: file(relativePath: { eq: "pages/give/reach-more.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
