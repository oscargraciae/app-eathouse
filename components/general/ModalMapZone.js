import React from 'react';
import dynamic from 'next/dynamic'
import { Modal } from 'react-bootstrap';

// const MapZone = dynamic(import('../map/MapZone'));

class ModalMapZone extends React.Component {

  render() {
    return (
      <div>
        <Modal {...this.props}>
          <Modal.Header closeButton>
            <h4 className="text-center">Zonas de entrega disponibles</h4>
          </Modal.Header>
          <Modal.Body className="modal-credit-card">
            {/* <MapZone /> */}
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ModalMapZone;
