// import libraries
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

// import local libraries
// import securePage from '../hocs/page';
import { Box, Divider, Heading } from '@chakra-ui/react';
import api from '../api';

// import componentes
import Layout from '../components/common/Layout';
import TableOrders from '../components/orders/TableOrders';
import ModalDetail from '../components/orders/ModalDetail';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const initialFetch = async () => {
    const data = await api.orders.getAll();
    setOrders(data);
  };
  useEffect(() => {
    initialFetch();
  }, []);

  const detailClick = async (id) => {
    // const response = await api.orders.getDetail(item.id);
    // setOrderDetaill(dataOrder);
    setOrderId(id);
    setIsOpenModalDetail(true);
  };

  return (
    <Layout {...props}>
      {(isOpenModalDetail && orderId)
        && (
        <ModalDetail
          show={(isOpenModalDetail && orderId)}
          orderId={orderId}
          onToggle={() => setIsOpenModalDetail(false)}
        />
        )}
      <Box mx="auto" maxWidth="1140px" mt={4}>
        <Heading textTransform="uppercase" as="h3" size="lg">Mis compras</Heading>
        <Divider borderColor="#DDD" my={4} />
        <Box>
          { orders ? <TableOrders data={orders} detailClick={detailClick} /> : <LoadingSpinner /> }
        </Box>
      </Box>
    </Layout>
  );
};

export default Orders;
