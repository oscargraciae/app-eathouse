import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Box, Heading, SimpleGrid, Stack, Flex,
} from '@chakra-ui/react';
import api from '../api';
import { addToCart, clearCart } from '../actions/cart';

import Layout from '../components/common/Layout';
import MenuItem from '../components/menu/MenuItem';
import Cart from '../components/general/Cart';

const Store = (props) => {
  const [store, setStore] = useState({});
  const [products, setProducts] = useState([]);

  const initialFetch = async () => {
    const [dataProducts, data] = await Promise.all([
      api.product.getAll(props.pageProps.id),
      api.store.get(props.pageProps.id),
    ]);

    setStore(data);
    setProducts(dataProducts);
  };

  useEffect(() => {
    const { data } = props.cart;
    initialFetch();

    if (data.length > 0) {
      if (data[0].storeId != props.pageProps.id) {
        props.clearCart();
      }
    }
  }, []);

  const addCart = (dish, quantity, productPrice) => {
    const { data } = props.cart;

    if (data.length > 0) {
      if (data[0].storeId !== dish.storeId) {
        alert('Sólo puedes agregar productos de un restaurante cada vez. Vacia tu carrito si quieres añadir este producto.');
        return;
      }
    }

    props.addToCart(dish, quantity, '', productPrice, props.pageProps.id, store);
  };

  const categories = products;
  // let total = 0;
  // let subtotal = 0;
  // const discount = 0;
  // props.cart.data.map((item, i) => {
  //   subtotal += item.total;
  // });

  // total = subtotal - discount;
  return (
    <Layout {...props}>
      <Flex direction="row" align="center" mx="auto" maxWidth="1140px" mt={4}>
        <Box w="calc(100% - 300px)">
          <Stack spacing={10}>
            { categories.map((category) => (
              <Stack key={category.id}>
                <Heading textTransform="uppercase" mb={4} textAlign="left" as="h3" size="sm" isTruncated fontWeight="bold">{category.name}</Heading>
                <SimpleGrid columns={2} spacingX={4} spacingY={8}>
                  { category.products.map((item, index) => (
                    <MenuItem
                      {...item}
                      addCart={addCart}
                      key={index}
                      selectDetailProduct={() => console.log('Click donde no debe')}
                    />
                  )) }
                </SimpleGrid>
              </Stack>
            )) }
          </Stack>
        </Box>

        <Cart user={props.user} {...props} />
      </Flex>

    </Layout>
  );
};

Store.getInitialProps = async ({ query }) => {
  return {
    id: query.id,
  };
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addToCart, clearCart })(Store);
