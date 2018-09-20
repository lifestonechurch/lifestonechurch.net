import React from 'react';
import PropTypes from 'prop-types';

class PayPalForm extends React.Component {
  state = {
    amount: null,
  };

  componentDidMount(props) {
    this.setState(prevProps => ({
      ...prevProps,
      amount: this.props.defaultAmount,
    }));
  }

  handleChange = e => {
    const amount = e.target.value;
    this.setState(prevProps => ({
      ...prevProps,
      amount,
    }));
  };

  render() {
    const { label, itemName, payee, isDonation } = this.props;

    return (
      <form
        id="paypalform"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        {isDonation ? (
          <input type="hidden" id="cmd" name="cmd" value="_donations" />
        ) : (
          <input type="hidden" id="cmd" name="cmd" value="_xclick" />
        )}
        <label htmlFor="amount">{label}:</label>
        <br />${' '}
        <input
          type="text"
          name="amount"
          id="amount"
          value={this.state.amount || ''}
          onChange={this.handleChange}
        />
        {isDonation && (
          <div>
            <br />
            <label htmlFor="cn">Memo:</label>
            <br />
            <input type="text" name="cn" id="cn" />
          </div>
        )}
        <input type="hidden" name="item_name" value={itemName} />
        <input type="hidden" name="business" value={payee} />
        <input type="hidden" name="lc" value="US" />
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
            src={
              isDonation
                ? 'https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif'
                : 'https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif'
            }
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
    );
  }
}

PayPalForm.propTypes = {
  label: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  payee: PropTypes.string.isRequired,
  isDonation: PropTypes.bool.isRequired,
  defaultAmount: PropTypes.number,
};

PayPalForm.defaultProps = {
  isDonation: true,
};

export default PayPalForm;
