import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Text,
  Button,
  Stack,
  HStack,
  Spinner,
  Flex,
  ModalCloseButton,
  Divider,
  StackDivider,
} from '@chakra-ui/react';
import { AiOutlinePhone } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

// Local libraries
import { moneyThousand } from '../../utils/formatNumber';
import { formatDate } from '../../utils/formatDate';
import api from '../../api';

// Local components
import OrderDetailItem from './OrderDetailItem';

const ModalDetail = ({ show, orderId, onToggle }) => {
  const [order, setOrder] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initialFetch = async () => {
    setIsLoading(true);
    const data = await api.orders.getOrder(orderId);
    const dataProducts = await api.orders.getDetail(orderId);
    console.log("dataProducts", dataProducts);
    setOrder(data);
    setOrderProducts(dataProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    initialFetch();
  }, [orderId]);
  return (
    <Modal isOpen={show} size="lg" onClose={onToggle}>
      <ModalOverlay />
      { isLoading ? (
        <ModalContent>
          <ModalBody>
            <Flex align="center" justify="center" minHeight="400px" padding={8}>
              <Spinner color="brand.400" size="lg" />
            </Flex>
          </ModalBody>

        </ModalContent>
      )
        : (
          <ModalContent>
            <ModalHeader>
              <Text fontSize="lg" fontWeight="bold">
                Orden #
                {order.id}
                {' '}
              </Text>
              <Text color="gray.600" fontSize="sm" fontWeight="semibold">
                Fecha de compra:
                {' '}
                {formatDate(order.createdAt).toString()}
              </Text>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody className="modal-order-detail">
              <Stack spacing={1}>
                <Text fontSize="lg" fontWeight="bold">
                  {order.store.name}
                </Text>
                <Stack isInline fontSize="xs" align="center">
                  <GrLocation />
                  <Text>
                    {order.store.store_address.addressMap}
                  </Text>
                </Stack>
                <Stack isInline fontSize="xs" align="center">
                  <AiOutlinePhone />
                  <Text fontSize="xs">
                    {order.store.store_address.phone}
                  </Text>
                </Stack>
              </Stack>
              <Divider borderColor="gray.200" my={4} />
              <Stack divider={<StackDivider borderColor="gray.200" />}>
                { orderProducts.map((item) => (
                  <OrderDetailItem key={item.id} {...item} />
                )) }
                <Divider borderColor="gray.200" my={4} />
              </Stack>
              <Stack my={3} fontSize="md" fontWeight="bold">
                <HStack justify="space-between">
                  <Text fontSize="md" fontWeight="bold">Subtotal</Text>
                  <Text>
                    $
                    {moneyThousand(order.subtotal)}
                    {' '}
                    MX
                  </Text>
                </HStack>
                <HStack justify="space-between">
                  <Text fontSize="md" fontWeight="bold">Envío</Text>
                  <Text>
                    $
                    {moneyThousand(order.shippingPrice)}
                    {' '}
                    MX
                  </Text>
                </HStack>
                <HStack justify="space-between" fontSize="md" fontWeight="bold">
                  <Text fontSize="md" fontWeight="bold">Total</Text>
                  <Text>
                    $
                    {moneyThousand(order.total)}
                    {' '}
                    MX
                  </Text>
                </HStack>
              </Stack>

              <Button onClick={onToggle} bg="brand.400" color="#FFF" isFullWidth>Listo</Button>
            </ModalBody>
          </ModalContent>
        )}
    </Modal>
  );
};

export default ModalDetail;
