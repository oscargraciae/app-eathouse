import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import AddressForm from '../user/AddressForm';
import AddressList from '../user/AddressList';

import api from '../../api';
import { addUserData } from '../../actions/user';



const ModalAddress = ({ show, setShowAddressModal, addUserData }) => {
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
    setShowAddressModal(false);
    addUserData(address);
  };

  const handleSelectedItem = (address) => {
    setSelectItemId(address.id);
    setShowAddressModal(false);
    addUserData(address);
  }

  return (
    <div>
      <Modal show={show} onHide={() => setShowAddressModal(false)}>
        <Modal.Header closeButton>
        <h4 className="text-left">Ingresa tu nueva dirección</h4>
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
