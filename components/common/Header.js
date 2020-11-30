import React from 'react';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import { GrLocation } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import {
  Box, Button, Flex, Text, Link, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const menuGuest = () => {
  const router = useRouter();
  return (
    <Flex flex={1} justify="flex-end">
      <Button onClick={() => router.push('/login')} size="sm" variant="link" ml={4}>Iniciar sesion</Button>
      <Button onClick={() => router.push('/signup')} size="sm" variant="link" ml={4}>Regístrate</Button>
      {/* <Button onClick={() => router.push('http://localhost:3000/signup')} size="sm" variant="link" ml={4}>Registrar tienda</Button> */}
    </Flex>
  );
};

const menuAuth = (props) => {
  const {
    user, setShowAddressModal, showHeaderAddress,
  } = props;
  const { address } = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <>
      { (user && showHeaderAddress)
        && (
        <Box>
          <Button size="md" onClick={() => setShowAddressModal(true)}>
            <GrLocation size={21} />
            <Text pl={2}>
              { address
                ? address.addressMap.substr(0, 50)
                : <Text>Busca una dirección nueva</Text>}
            </Text>
          </Button>
        </Box>
        )}
      <Flex flex={1} justify="flex-end">
        <Menu>
          <MenuButton as={Button} variant="ghost" rightIcon={FiChevronDown()}>
            Hola,
            {' '}
            {user.firstName}
          </MenuButton>
          <MenuList zIndex={3} borderColor="#DDD">
            <MenuItem onClick={() => router.push('/account')}>Ajustes de cuenta</MenuItem>
            <MenuItem onClick={() => router.push('/orders')}>Mis compras</MenuItem>
            <MenuItem onClick={() => router.push('/logout')}>Salir</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

const Header = (props) => {
  const onSignup = () => {
    // if (props.isAuthenticated) {
    //   window.location.href = `http://localhost:3000/signup/${props.loggedUser}`;
    // } else {
    //   window.location.href = 'http://localhost:3000/signup';
    // }
    if (props.isAuthenticated) {
      window.location.href = `https://as-manager-uorder-qa/signup/${props.loggedUser}`;
    } else {
      window.location.href = 'https://as-manager-uorder-qa/signup';
    }
  };

  return (
    <header>

      <Box boxShadow="md">
        <Flex direction="row" align="center" mx="auto" maxWidth="1200px" height="70px">
          <Box mr={4}>
            <a href="/">
              <img src="/static/urder-black-logo.png" alt="eathouse" width="100" height="70" />
            </a>
          </Box>
          <Flex flex={1} justify="space-between" align="center">
            { props.isAuthenticated ? menuAuth(props) : menuGuest() }
          </Flex>
          <Box>
            <Button onClick={onSignup} size="sm" variant="link" ml={4}>Publica tu tienda</Button>
          </Box>
        </Flex>
      </Box>

    </header>
  );
};

export default Header;
