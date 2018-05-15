// import libraries
import React from 'react';
import { Modal } from 'react-bootstrap';

// import componentes
import CreditCardForm from '../user/CreditCardForm';

class ModalCreditCard extends React.Component {

  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Body className="modal-credit-card">
            <h3 className="text-center">Agrega una tarjeta de crédito/débito</h3>
            <br />
            <CreditCardForm afterSave={this.props.afterSave} onToggleModal={this.props.onToggle} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ModalCreditCard;