import React from 'react';

import { H1, H2 } from '../../components/headers';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import BibleQuote from '../../components/BibleQuote';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Give';

// https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/
// Return method: 1 - redirect to the return url by using the GET method with no variables included

const lastYear = new Date().getUTCFullYear() - 1;

const Page = () => (
  <div>
    <Breadcrumbs path={[{ title: 'Home', url: '/' }]} title={title} />
    <H1>{title}</H1>
    <form
      id="donateplusform"
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
    >
      <input type="hidden" id="cmd" name="cmd" value="_donations" />
      <label htmlFor="amount">Donation Amount:</label>
      <br />$ <input type="text" name="amount" id="amount" />
      <input
        type="hidden"
        name="item_name"
        value="Donation to Lifestone Church"
      />
      <input type="hidden" name="business" value="give@lifestonechurch.net" />
      <input type="hidden" name="lc" value="US" />
      <input type="hidden" name="no_note" value="1" />
      <input type="hidden" name="no_shipping" value="1" />
      <input type="hidden" name="rm" value="1" />
      <input
        type="hidden"
        name="return"
        value="https://www.lifestonechurch.net/support/thank-you/"
      />
      <input type="hidden" name="currency_code" value="USD" />
      <p>
        <input
          type="image"
          src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif"
          name="submit"
          alt=""
        />
        <img
          alt=""
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </p>
    </form>
    <p>Mailing Address:</p>
    <p>
      5526 W. 13400 S.<br />
      #352<br />
      Herriman UT 84096
    </p>
    <BibleQuote reference="2 Corinthians 9:7 (NIV)">
      "Each of you should give what you have decided in your heart to give, not
      reluctantly or under compulsion, for God loves a cheerful giver."
    </BibleQuote>
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
          rel="noopener"
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
      <a href="mailto:ashley@lifestonechurch.net">
        Ashley Smith (ashley@lifestonechurch.net)
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
  </div>
);

export default Page;
