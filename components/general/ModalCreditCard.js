// import libraries
import React from 'react';
import { Modal } from 'react-bootstrap';

// import components
import FormCreditCard from '../user/FormCreditCards';

const ModalCreditCard = ({ show, onToggle, afterSave }) => {
  return (
    <>
      <Modal show={show} onHide={onToggle}>
        <Modal.Header closeButton>
          <h3 className="text-center title-modal-card">Agrega una tarjeta de crédito/débito</h3>
        </Modal.Header>
        <Modal.Body className="modal-credit-card">
          <br />
          <FormCreditCard afterSave={afterSave} onToggleModal={onToggle} />
        </Modal.Body>
      </Modal>
      <style jsx>{`
        .title-modal-card {
          font-size: 18px;
        }
      `}</style>
    </>
  )
}

export default ModalCreditCard;
