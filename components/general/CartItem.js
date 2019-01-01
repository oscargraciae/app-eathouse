import React from 'react';

import { formatDateString } from '../../utils/formatDate';

function CartItem(props) {
  return (
    <li className="item">
      {/* <div className="item-photo" style={{ backgroundImage: `url(${props.image})` }} /> */}
      <div className="item-details">
        <div className="item-name">
          {props.name}
        </div>
        <div className="item-date">
          {/* <span className="lbl-quantity">Cant. 10 </span> */}
          <span className="">({props.quantity}) ${props.total}</span>
        </div>
        <div className="lbl-subtotal">
          Entrega: { formatDateString(props.deliveryDate, "DD MMMM YYYY") }
        </div>
      </div>

      <style jsx>{`
        .item {
          display: flex;
          margin: 10px 0;
          border-bottom: 1px solid rgba(217,219,224,0.5);
          padding-bottom: 8px;
        }

        .item-photo {
          display: table-cell;
          min-width: 45px;
          width: 45px;
          height: 45px;
          background-size: 45px;
          background-position: center center;
          background-repeat: no-repeat;
          margin-right: 12px;
        }

        .item-name {
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-style: normal;
          letter-spacing: 0.5px;
          line-height: 1.3;
          width: 100%;
          font-size: 14px;
        }

        .item-date {
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          font-weight: 300;
          font-style: normal;
          letter-spacing: 0.5px;
          line-height: 1.3;
          width: 100%;
          font-size: 12px;
          color: #79776B;
        }

        .item-quntity {
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          font-weight: 400;
          font-style: normal;
          letter-spacing: 0.2px;
        }

        .lbl-quantity {
          padding-right: px;
        }

        .lbl-subtotal {
          color: #3BCF75;
          font-size: 12px;
        }
      `}</style>
    </li>
  )
}

export default CartItem;
