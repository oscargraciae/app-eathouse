import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

import generateName from '../../utils/generateName';
import { useRouter } from 'next/router';

{/* <a href={`/store/${generateName(name)}/${id}`} className="menu-item-details"></a> */}
const StoreItem = ({ id, name, description, cover, store_address, store_type }) => {
  const router = useRouter();
  return (
    <>
      <Box
        borderRadius='3px'
        boxShadow='rgba(0, 0, 0, 0.1) 0px 0.5em 1.5em 0px'
        borderWidth='1px'
        borderColor='rgba(217, 219, 224, 0.5)'
        cursor='pointer'
        onClick={() => router.push(`/store/${generateName(name)}/${id}`)}
      >
        <Image src={cover} objectFit="cover" height="150px" w='100%' />
        <Box textAlign='left' px={3} py={4} height='135px'>
          <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short" pb={3}>
            {name}
          </Text>
          <Text color='gray.600' fontSize='sm' isTruncated>Insurgentes 123, Vista Hermosa, Monterrey</Text>
        </Box>
      </Box>
    </>
  )
};

export default StoreItem;


{/* <Box className="menu-item-details" borderRadius='md' boxShadow='md'>
        <Image borderRadius="md" src={cover} />
        <div className="menu-item-description">
          <div className="menu-item-name-link" >
            <span className="text">{name}</span>
          </div>
          <div className="store-item-category">
            {store_type && `${store_type.name}`}
          </div>
          <div className="store-item-address">
            {store_address && `${store_address.street}, ${store_address.area}, ${store_address.city}`}
          </div>

        </div>
      </Box> */}
