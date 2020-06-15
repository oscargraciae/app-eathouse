import React from 'react';

import { formatDateString } from '../../utils/formatDate';

function CartItem({ item, addItem, removeItem }) {
  return (
    <li className="item">
      {/* <div className="item-photo" style={{ backgroundImage: `url(${props.image})` }} /> */}
      <div className="item-details">
        <div className="item-name">
          {item.name}
        </div>
        <div className="item-date">
          {/* <span className="lbl-quantity">Cant. 10 </span> */}
          <span className="">({item.quantity}) ${item.total}/{item.unidType.name}</span>
        </div>
        <div className="lbl-subtotal">
          Entrega: { formatDateString(item.deliveryDate, "DD MMMM YYYY") }
        </div>
        { addItem &&
          <div className="item-options">
            <button  className="small button-add-cart-small" onClick={() => removeItem(item)}>
              <span className="add-icon"></span><span className="add-text">-</span>
            </button>
            <span className="lbl-quantity">{item.quantity}</span>
            <button className="small button-add-cart-small" onClick={() => addItem(item)}>
              <span className="add-icon"></span><span className="add-text">+</span>
            </button>
          </div>
        }
      </div>

      <style jsx>{`
        .item {
          display: flex;
          margin: 10px 0;
          border-bottom: 1px solid rgba(217,219,224,0.5);
          padding-bottom: 8px;
        }

        .item-details {
          width: 100%;
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

        .item-options {
          text-align: right;
        }

        .button-add-cart-small {
          color: #3BCF78;
          background: #FFFFFF;
          line-height: 25px;
          cursor: pointer;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          text-align: center;
          border: 1px solid #3BCF78;

          font-size: 16px;
          margin: 0px 5px;
          padding: 0;
          width: 40px;
          z-index: 1;
        }

        .button-add-cart-small:hover {
          background: #3BCF78;
          color: white;
        }

      `}</style>
    </li>
  )
}

export default CartItem;
