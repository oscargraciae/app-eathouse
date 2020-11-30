import React from 'react';
import {
  Modal, ModalContent, ModalBody, ModalOverlay, Alert, AlertIcon, AlertTitle, AlertDescription, Button, Stack, Text,
} from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillWarning } from 'react-icons/ai';

const ModalAlert = ({
  confirm, show, error, onClose,
}) => {
  const successView = () => (
    <Stack justify="center" align="center" spacing={4}>
      <AiFillCheckCircle size={52} color="#3BCF75" />
      <Text mt={4} mb={1} fontWeight="bold" fontSize="lg">ORDEN CONFIRMADA</Text>
      <Text fontSize="sm">
        Gracias por tu orden, vamos a preparar tu pedido.
      </Text>
      <Button size="lg" isFullWidth bg="brand.400" color="#FFF" onClick={confirm}>
        Aceptar
      </Button>
    </Stack>
  );

  const errorView = () => (
    <Stack justify="center" align="center" spacing={4}>
      <AiFillWarning size={52} color="#CA3B27" />
      <Text mt={4} mb={1} fontWeight="bold" fontSize="lg">Oops :(</Text>
      <Text fontSize="sm">
        {error}
      </Text>
      <Button size="lg" isFullWidth bg="brand.400" color="#FFF" onClick={onClose}>
        Aceptar
      </Button>
    </Stack>
  );

  return (
    <Modal isOpen={show}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={8}>
          { !error ? successView() : errorView() }
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalAlert;
