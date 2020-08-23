import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalProductDetail = ({ product, onHide }) => {
  return (
    <Modal show bsSize="sm" onHide={onHide}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div className="row">
        <div className="col-sm-12">
          <div className="thumbnail">
            <img src={product.image}/>
            <div className="caption">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalProductDetail;
