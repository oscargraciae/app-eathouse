// import libraries
import React from 'react';
import { Modal } from 'react-bootstrap';

// import componentes
// import CreditCardForm from '../user/CreditCardForm';
import FormCreditCard from '../user/FormCreditCards';

class ModalCreditCard extends React.Component {

  render() {
    return (
      <div>
        {/* <Modal show={this.props.show} bsSize="sm"> */}
        <Modal show={this.props.show}>
          <Modal.Body className="modal-credit-card">
            <h3 className="text-center title-modal-card">Agrega una tarjeta de crédito/débito</h3>
            <br />
            <FormCreditCard afterSave={this.props.afterSave} onToggleModal={this.props.onToggle} />
            {/* <CreditCardForm afterSave={this.props.afterSave} onToggleModal={this.props.onToggle} /> */}
          </Modal.Body>
        </Modal>
        <style jsx>{`
          .title-modal-card {
            font-size: 18px;
          }
        `}</style>
      </div>
    )
  }
}

export default ModalCreditCard;
