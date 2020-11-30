import React from 'react';

import {
  Badge, Box, Flex, Spacer, Stack, Text,
} from '@chakra-ui/react';
import { moneyThousand } from '../../utils/formatNumber';

const OrderDetailItem = ({
  quantity, productPrice, product, total,
}) => (
  <Box>
    <Stack justify="stretch" flex={1} direction="row" isInline align="center">
      <Badge>
        {quantity}
        {' '}
        {productPrice.unidType.name}
      </Badge>
      <Text fontSize="xs" fontWeight="semibold">{product.name}</Text>
      <Spacer />
      <Text text="right" fontWeight="bold" fontSize="xs" color="rgb(59, 207, 117)" alignSelf="flex-end">
        $
        {moneyThousand(total)}
      </Text>
    </Stack>
  </Box>
);

export default OrderDetailItem;
