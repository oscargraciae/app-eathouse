import React, { useState, useEffect } from 'react';
// import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';


import AddressForm from '../user/AddressForm';
import AddressList from '../user/AddressList';

import api from '../../api';
import { addUserData } from '../../actions/user';
import { Modal, ModalBody, ModalHeader, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter, Button, useDisclosure, Divider } from '@chakra-ui/react';

const ModalAddress = ({ show, hideModal, addUserData, hide, isClosable }) => {
  const [selectItemId, setSelectItemId] = useState(0);
  const [address, setAddress] = useState([]);
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const [showModal, setShowModal] = useState(show);

  const getAddress = async () => {
    const addresses = await api.user.getAddress();
    setAddress(addresses);
    if (addresses.length > 0) {
      setSelectItemId(addresses[0].id);
    }

  }

  useEffect(() => {
    getAddress();
  }, []);

  const afterSave = (address) => {
    getAddress();
    setSelectItemId(address.id);
    hideModal();
    addUserData(address);
    // location.href = "/";
  };

  const handleSelectedItem = (address) => {
    setSelectItemId(address.id);
    hideModal();
    addUserData(address);
    // location.href = "/";
  }

  return (
    <Modal isOpen={show} onClose={hideModal} size='lg'>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>¿Donde quieres recibir tu pedido?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddressForm afterSave={afterSave} />
            <Divider my={3} borderColor='#DDD' />
            <AddressList address={address} selectItemId={selectItemId} handleSelectedItem={handleSelectedItem} />
          </ModalBody>

        </ModalContent>
      {/* <ModalHeader>
        <h4 className="text-center">¿Donde quieres recibir tu pedido?</h4>
      </ModalHeader>
      <ModalBody>
        <AddressForm afterSave={afterSave} />
        <hr />
        <AddressList address={address} selectItemId={selectItemId} handleSelectedItem={handleSelectedItem} />
      </ModalBody> */}
    </Modal>
  )
}

export default connect(null, { addUserData })(ModalAddress);
