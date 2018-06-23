import React from 'react';

import { moneyThousand } from '../../utils/formatNumber';
import { formatDateString, formatNormal } from '../../utils/formatDate';

function OrderDetailItem(props) {
  return (
    <li className="item">
      <div className="item-photo" style={{ backgroundImage: `url(${props.dish.image})` }} />
      <div className="item-details">
        <div className="item-name">
          {props.dish.name}
        </div>
        <div className="item-date">
          {/* Entrega: {formatDateString(props.deliveryDate, "DD MMMM YYYY")} */}
          Entrega: {formatDateString(props.deliveryDate, "DD MMMM YYYY")}
        </div>
        <div className="item-quntity">
          {/* <span className="lbl-quantity">Cant. 10 </span> */}
          <span className="lbl-subtotal">({props.quantity}) ${moneyThousand(props.total)}</span>
        </div>
      </div>

      <style jsx>{`
        .item {
          display: flex;
          margin: 10px 0;
          border-bottom: 1px solid #e8ebe9;
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
          font-weight: bold;
          font-style: normal;
          letter-spacing: 0.5px;
          line-height: 1.3;
          width: 100%;
          font-size: 12px;
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
          font-size: 14px;
        }
      `}</style>
    </li>
  )
}

export default OrderDetailItem;