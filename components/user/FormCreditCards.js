import React, { useState } from 'react';
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import {
  Alert, AlertIcon, AlertTitle, Box, Button, Flex, HStack, Text, useToast,
} from '@chakra-ui/react';
import api from '../../api';

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

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const elm = elements.getElement(CardElement);
    setIsLoading(true);
    const elm = elements.getElement(CardNumberElement);
    const data = await stripe.createToken(elm);
    if (data.error) {
      setErrorMessage(data.error.message);
      setIsLoading(false);
      return;
    }
    // if (error) return;

    const response = await api.creditCard.create({ tokenCard: data.token.id });
    if (response.success) {
      if (props.onToggleModal) {
        props.onToggleModal();
        props.afterSave();
      }
      toast({
        title: 'Método de pago añadido correctamente',
        // description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } else {
      setErrorMessage(response.message);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" py={4}>
        { errorMessage
        && (
        <Alert status="error" mb={3}>
          <AlertIcon />
          <AlertTitle mr={2}>{errorMessage}</AlertTitle>
        </Alert>
        )}

        <Text fontSize="sm" fontWeight="bold">Número de tarjeta</Text>
        <Box bg="#FFF" borderWidth="1px" borderColor="#DDD" p={3} mb={3}>
          <CardNumberElement options={ELEMENT_OPTIONS} />
        </Box>

        <HStack justify="stretch">
          <Flex direction="column" flex={1}>
            <Text fontSize="sm" fontWeight="bold">Vencimiento</Text>
            <Box bg="#FFF" borderWidth="1px" borderColor="#DDD" p={3} mb={3}>
              <CardExpiryElement options={ELEMENT_OPTIONS} />
            </Box>
          </Flex>

          <Flex direction="column" flex={1}>
            <Text fontSize="sm" fontWeight="bold">CVC</Text>
            <Box bg="#FFF" borderWidth="1px" borderColor="#DDD" p={3} mb={3}>
              <CardCvcElement options={ELEMENT_OPTIONS} />
            </Box>
          </Flex>
        </HStack>
        <Button bg="brand.400" color="#FFF" size="lg" my={4} type="submit" isLoading={isLoading}>
          Guardar
        </Button>
      </Flex>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_qOTjYTWzFfowD4Gr7ebCewSU004Gkh7dAp');
// const stripePromise = loadStripe('pk_live_j1cDaf12GfRGd4b8Hyw2ZCdr00PEMXuPDS');

const FormCreditCard = (props) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm {...props} />
  </Elements>
);

export default FormCreditCard;
