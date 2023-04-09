import React, { useState } from "react";
import Stripe from "stripe";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const stripe = new Stripe("your_stripe_api_key_here");
    const result = await stripe.createToken({
      card: {
        number: cardNumber,
        exp_month: expMonth,
        exp_year: expYear,
        cvc: cvc,
      },
    });

    if (result.error) {
      setError(result.error.message);
      return;
    }

    // TODO: handle successful payment
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <label className="payment-label">
        Card Number
        <input
          className="payment-input"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </label>
      <div className="payment-row">
        <label className="payment-label payment-expiration-label">
          Expiration Month
          <input
            className="payment-input payment-expiration-input"
            type="text"
            value={expMonth}
            onChange={(e) => setExpMonth(e.target.value)}
          />
        </label>
        <label className="payment-label payment-expiration-label">
          Expiration Year
          <input
            className="payment-input payment-expiration-input"
            type="text"
            value={expYear}
            onChange={(e) => setExpYear(e.target.value)}
          />
        </label>
        <label className="payment-label payment-cvc-label">
          CVC
          <input
            className="payment-input payment-cvc-input"
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </label>
      </div>
      <button className="payment-button" type="submit">
        Pay
      </button>
      {error && <div className="payment-error">{error}</div>}
    </form>
  );
};

export default PaymentPage;
