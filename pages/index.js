// import libraries
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// import local libraries
// import securePage from '../hocs/page';
import {
  Text, Box, Heading, SimpleGrid, Divider,
} from '@chakra-ui/react';
import api from '../api';

// import components
import Layout from '../components/common/Layout';
import StoreItem from '../components/stores/StoreItem';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = (props) => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { address } = useSelector((state) => state.user);

  const fetchStores = async () => {
    setIsLoading(true);

    let params = {};
    if (address) {
      params = { lat: address.lat, lng: address.lng };
    }

    const { stores } = await api.store.getAll(params);

    setIsLoading(false);
    setStores(stores);
  };

  useEffect(() => {
    fetchStores();
  }, [address]);

  return (
    <Layout {...props} showHeaderAddress>
      <main>
        <Box bg="brand.400" textAlign="center">
          <Heading as="h1" size="xl" isTruncated fontWeight="bold" py={10} color="#FFF">ENCUENTRA TIENDAS Y RESTAURANTES CERCA DE TI</Heading>
        </Box>

        <Box align="center" mx="auto" maxWidth="1140px">
          <Box py={8}>
            <Heading textTransform="uppercase" mb={4} textAlign="left" as="h2" size="md" isTruncated fontWeight="bold">Negocios Principales</Heading>
            {/* <Divider my={4} /> */}
            { isLoading && <LoadingSpinner /> }
            { !isLoading
              && (
              <SimpleGrid columns={4} spacingX={4} spacingY={8}>
                {stores.map((item) => (
                  <StoreItem key={item.id} {...item} />
                ))}
              </SimpleGrid>
              )}
          </Box>
        </Box>
      </main>
    </Layout>
  );
};

export default Home;
