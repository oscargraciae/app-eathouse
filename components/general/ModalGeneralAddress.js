import React from 'react';
import { Modal } from 'react-bootstrap';

import AddressForm from '../user/AddressForm';

class ModalGeneralAddress extends React.Component {

  state = {
    show: this.props.show,
  }

  afterSave = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show}>
          <Modal.Body>
            <h4 className="text-center">¡Ingresa tu dirección y empieza a ordenar!</h4>
            <br />
            <AddressForm afterSave={this.afterSave} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ModalGeneralAddress;