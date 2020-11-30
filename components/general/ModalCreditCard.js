// import libraries
import React from 'react';
import {
  Modal, ModalBody, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton,
} from '@chakra-ui/react';

// import components
import FormCreditCard from '../user/FormCreditCards';

const ModalCreditCard = ({ show, onToggle, afterSave }) => (
  <Modal isOpen={show} onClose={onToggle}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Nuevo método de pago</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormCreditCard afterSave={afterSave} onToggleModal={onToggle} />
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ModalCreditCard;
