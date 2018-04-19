import React from 'react';
import { Modal } from 'react-bootstrap';

import ButtonApp from '../general/ButtonBlock';

function Confirmation(props) {
  return (
    <Modal show={props.show}>
      <Modal.Body className="modal-confirmation">
        <div className="header-confirmation">
          <h3 className="text-center">ORDEN CONFIRMADA</h3>
          <br />
          <i className="far fa-check-circle fa-7x"></i>
        </div>
        <div className="body-confirmation">
          <div className="orden-confirm-body">Gracias por tu orden Oscar, vamos a preparar tu pedido con mucho <i className="fas fa-heart fa-sm red"></i></div>
          <div className="orden-confirm-title">Número de orden: <div className="orden-confirm-detail"> #2387</div></div>

          <br />
          <ButtonApp
            text="Aceptar"
            buttonStyle="btn btn-primary btn-large btn-block"
            click={props.confirm}
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
          background: #3BCF75;
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
          color: #515252;
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

export default Confirmation;