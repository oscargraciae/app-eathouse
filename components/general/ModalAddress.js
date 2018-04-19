import React from 'react';
import { Modal } from 'react-bootstrap';

import AddressForm from '../user/AddressForm';

class ModalAddress extends React.Component {

  // state = {
  //   show: ,
  // }

  afterSave = () => {
    if(this.props.responseModal) {
      this.props.responseModal();
    }
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Body>
            <h3 className="text-center">¡Ingresa tu dirección y empieza a ordenar!</h3>
            <br />
            <AddressForm afterSave={this.afterSave} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ModalAddress;