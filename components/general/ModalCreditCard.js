// import libraries
import React from 'react';
import { Modal } from 'react-bootstrap';

// import componentes
import CreditCardForm from '../user/CreditCardForm';

class ModalCreditCard extends React.Component {

  afterSave = () => {
    console.log("Guardando tarjeta");
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Body className="modal-credit-card">
            <h3 className="text-center">Agrega una tarjeta de crédito/débito</h3>
            <br />
            <CreditCardForm afterSave={this.afterSave} onToggleModal={this.props.onToggle} />
          </Modal.Body>
        </Modal>
        <style jsx>{`
         
        `}</style>
      </div>
    )
  }
}

export default ModalCreditCard;