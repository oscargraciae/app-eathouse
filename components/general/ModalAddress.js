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
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
          <h4 className="text-left">Ingresa tu nueva dirección</h4>
          </Modal.Header>
          <Modal.Body>
            <AddressForm afterSave={this.afterSave} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ModalAddress;