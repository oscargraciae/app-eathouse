import React, { useEffect } from 'react';
import {
  Flex, Spinner, Text,
} from '@chakra-ui/react';

import api from '../api';

const Active = (props) => {
  const initialFetch = async () => {
    const response = await api.user.active(props.pageProps.id);
    if (response.success) {
      if (!response.user.store) {
        window.location.href = '/login';
      } else {
        window.location.href = 'https://as-manager-uorder-qa';
      }
    }
  };

  useEffect(() => {
    initialFetch();
  });

  return (
    <Flex my="auto" direction="column" flex={1} justify="center" align="center" alignSelf="center" h="600px">
      <Text fontSize="2xl" fontWeight="bold" mb={8}>Activando tu cuenta</Text>
      <Spinner color="#e8441e" size="xl" />
    </Flex>
  );
};

Active.getInitialProps = async ({ req }) => ({
  id: req.query.id,
});

export default Active;
