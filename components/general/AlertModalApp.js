import React from 'react';
import { Modal } from 'react-bootstrap';

import ButtonApp from '../general/ButtonBlock';

export default (props) => {
  return (
    <Modal show={props.show}>
      <Modal.Body className="modal-confirmation">
        <div className="header-confirmation">
          <h3 className="text-center">{props.title}</h3>
          <br />
          <i className="fas fa-exclamation-triangle fa-7x"></i>
        </div>
        <div className="body-confirmation">
          <div className="orden-confirm-body">{props.description}</div>
          <br />
          <ButtonApp
            text="Aceptar"
            buttonStyle="btn btn-primary btn-large btn-block"
            click={props.onClick}
          />
        </div>
      </Modal.Body>

      <style>{`
        .modal-confirmation {
          text-align: center;
          font-family: "BentonSans",Helvetica,Arial,sans-serif;
          font-weight: 600;
          padding: 0;
        }

        .header-confirmation {
          background: #CA3B27;
          padding: 40px 20px;
          color: #FFF;
          margin-bottom: 20px;
        }

        .body-confirmation {
          padding: 10px 100px;
        }

        .header-confirmation > h3 {
          padding: 0;
          margin: 0;
        }

        .modal-confirmation > .fa-check-circle {
          color: #FFF;
        }

        .red {
          color: red;
        }

        .orden-confirm-title {
          padding-top: 20px;
          color: #2D3138;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orden-confirm-detail {
          color: #3BCF75;
          font-size: 16px;
          padding-left: 20px;
        }

        .orden-confirm-body {
          color: #79776B;
          font-size: 16px;
          font-weight: 300;
        }

      `}</style>
    </Modal>
  )
}