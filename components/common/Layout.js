// import libraries
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import {
  Box,
  useDisclosure,
} from '@chakra-ui/react';

// import components
import Header from './Header';
import ModalAddress from '../general/ModalAddress';
import Footer from './Footer';

const Layout = ({
  children, loggedUser, isAuthenticated, title = 'UORDER', user, tokenData, showHeaderAddress = false,
}) => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleShowAddressModal = () => {
    onOpen();
  };

  const { address } = useSelector((state) => state.user);

  const hideModal = () => {
    setShowAddressModal(false);
    onClose();
  };

  useEffect(() => {
    if (!address) {
      setShowAddressModal(true);
    }
  }, []);

  return (
    <div id="layout" className="layout">
      <Head>
        <title>{ title }</title>
      </Head>

      <Header
        loggedUser={loggedUser}
        isAuthenticated={isAuthenticated}
        user={user}
        userToken={tokenData}
        setShowAddressModal={handleShowAddressModal}
        showHeaderAddress={showHeaderAddress}
      />

      {/* { isAuthenticated && <ModalGeneralAddress show={!user.withAddress} /> } */}
      {/* { isAuthenticated && <ModalAddress isClosable={Boolean(address)} show={!address || showAddressModal} hide={!showAddressModal} hideModal={hideModal} /> } */}
      { isAuthenticated
        && (
        <ModalAddress
          isClosable={Boolean(address)}
          show={!address || isOpen}
          hideModal={hideModal}
        />
        )}
      <Box minHeight="700px">
        { children }
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
