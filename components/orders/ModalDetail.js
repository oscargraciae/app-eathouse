import React from 'react';
import { Modal } from 'react-bootstrap';

import { moneyThousand } from '../../utils/formatNumber';
import { formatDate } from '../../utils/formatDate';

import OrderDetailItem from './OrderDetailItem';

export default (props) => {
  const { order } = props;
  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>Orden #{order.info.id} <br /><span className="spanMessage">Fecha de compra:  {formatDate(order.info.createdAt).toString()}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-order-detail">
          { order.items.map((item, index) => {
            return (
              <OrderDetailItem key={item.id} {...item} />
            )
          }) }
          <div className="sidecart-footer">
            <dl className="estimated-total">
              <div className="line-item">
                <dt className="lbl-total">Subtotal</dt><dd className="lbl-total">${moneyThousand(order.info.subtotal)} MX</dd>
              </div>
              <div className="line-item">
                <dt className="lbl-total">Costo de envío</dt><dd className="lbl-total">$0 MX</dd>
              </div>
              <div className="line-item">
                <dt className="lbl-total">Total</dt><dd className="lbl-total">${moneyThousand(order.info.total)} MX</dd>
              </div>
            </dl>
            <a onClick={props.onToggle} className="btn btn-primary btn-large btn-block">Listo</a>
          </div>
        </Modal.Body>
      </Modal>
      <style>{`
        .modal-order-detail {
          padding: 20px 40px;
        }

        .spanMessage{
          font-weight: normal !important;
          color: #767676 !important;
          font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
          margin: 0px !important;
          word-wrap: break-word !important;
          font-size: 12px !important;
          line-height: 16px !important;
          letter-spacing: 0.4px !important;
          padding-top: 10px !important;
          padding-bottom: 0px !important;
          display: flex;
          flex: 1;
          justify-content: left;
        }

        .sidecart {
          box-sizing: border-box;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-flex: 0;
          -webkit-flex: 0 1 auto;
          -ms-flex: 0 1 auto;
          flex: 0 1 auto;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          position: fixed;
          width: 300px;
          height: 95%;
          top: 52px;
          right: 0px;
          background: white;
          z-index: 21;
          border-left: 1px solid rgba(217,219,224,0.5);
        }

        .sidecart-header {
          box-sizing: border-box;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-flex: 0;
          -webkit-flex: 0 1 auto;
          -ms-flex: 0 1 auto;
          flex: 0 1 auto;
          border-bottom: 1px solid rgba(217,219,224,0.5);
          margin: 17px 22px 0;
          padding-bottom: 22px;
          padding-top: 3px;
        }

        .sidecart-heading {
          font-weight: bold;
          font-size: 18px;
        }

        .sidecart-body {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 22px;
        }

        .sidecart-footer {
          padding: 15px 0px;
          background: white;
        }

        .estimated-total {
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          font-weight: 600;
          font-style: normal;
          letter-spacing: 0.5px;
          font-size: 14px;
          font-weight: normal;
          line-height: 1;
          letter-spacing: 1px;
          color: #42413E;
          margin-bottom: 20px;
        }

        .line-item {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -ms-justify-content: space-between;
          -ms-flex-pack: justify;
          -ms-flex-line-pack: center;
          -webkit-justify-content: space-between;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .lbl-total {
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}
