import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import AddressForm from '../user/AddressForm';
import AddressList from '../user/AddressList';

import api from '../../api';
import { addUserData } from '../../actions/user';

const ModalAddress = ({ show, hideModal, addUserData, hide }) => {
  const [selectItemId, setSelectItemId] = useState(0);
  const [address, setAddress] = useState([]);
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
    <div>
      <Modal show={show} onHide={hideModal}>
        <Modal.Header closeButton>
        <h4 className="text-left">Ingresa tu dirección</h4>
        </Modal.Header>
        <Modal.Body>
          <AddressForm afterSave={afterSave} />
          <hr />
          <AddressList address={address} selectItemId={selectItemId} handleSelectedItem={handleSelectedItem} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default connect(null, { addUserData })(ModalAddress);
