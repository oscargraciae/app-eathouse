import React, { useState } from 'react';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import api from '../../api';

import ButtonBlock from '../general/ButtonBlock';

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const CheckoutForm = props => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const elm = elements.getElement(CardElement);
    setIsLoading(true);
    const elm = elements.getElement(CardNumberElement);
    const data = await stripe.createToken(elm);

    // if (error) return;

    const response = await api.creditCard.create({ tokenCard: data.token.id })
    if (response.success) {
      if(props.onToggleModal) {
        props.onToggleModal();
        props.afterSave();
      }
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="row">
        <div className="col-md-12">
          {/* <CardElement options={ELEMENT_OPTIONS} /> */}
          <div className="col-md-6">
            <label>Número de tarjeta</label>
            <CardNumberElement options={ELEMENT_OPTIONS} />
          </div>
          <div className="col-md-3">
            <label>Vencimiento</label>
            <CardExpiryElement options={ELEMENT_OPTIONS} />
          </div>
          <div className="col-md-3">
            <label>CVC</label>
            <CardCvcElement options={ELEMENT_OPTIONS} />
          </div>
        </div>
          <hr/>
          <div>
            <br /><br />
            <ButtonBlock
              text="Guardar"
              buttonStyle="btn btn-primary btn-large btn-block"
              type="submit"
              loading={isLoading}
            />
          </div>


        {/* <button type="submit" disabled={!stripe}>
          Pay
        </button> */}
      </div>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_qOTjYTWzFfowD4Gr7ebCewSU004Gkh7dAp');

const FormCreditCard = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  )
}

export default FormCreditCard;