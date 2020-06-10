// import libraries
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// import local libraries
import { moneyThousand } from '../../utils/formatNumber';

// import componens
import ButtonBlock from '../general/ButtonBlock';
import CartItem from '../general/CartItem';

const CartDetail = props => {
  const [shippingSelected, setShippingSelected] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotalPrice, setSubtotalPrice] = useState(0);

  let total = 0;
  let subtotal = 0;
  let discount = 0;
  let quantityTotal = 0;
  let shippingPrice = 0;

  useEffect(() => {
    props.cart.data.map((item, i) => {
      subtotal = subtotal + item.total;
    });

    if (props.cart.data.length > 0) {
      props.cart.data.map((item, i) => {
        quantityTotal = quantityTotal + item.quantity;
      });
    }

    console.log("props.shipping--->", props.shipping);
    if (props.shipping && props.shipping.id !== 0) {
      setShippingSelected(props.shipping);
        shippingPrice = Number(props.shipping.price);

    }
    total = (subtotal - discount) + shippingPrice;
    setTotalPrice(total);
    setSubtotalPrice(subtotal);
  }, [props]);

  return (
    <div className="sidecart">
      <div className="sidecart-header">
        <div className="sidecart-heading">Resumen de tu orden</div>
      </div>
      <div className="sidecart-body">
        <div className="items-group">
          <ul className="items">
            { props.cart.data.map((item, i) => {
              return (
                <CartItem key={i} {...item} />
              )
            }) }

          </ul>
        </div>
      </div>
      <div className="sidecart-footer">
        <dl className="estimated-total">
          <div className="line-item">
            <dt>Subtotal</dt><dd>${moneyThousand(subtotalPrice)}</dd>
          </div>
          <div className="line-item">
            <dt>Gastos de envío</dt>
            { !shippingSelected ?
              <dd>-</dd> :
              <dd>${shippingSelected.price}</dd>
            }
          </div>
          {/* <div className="line-item">
            <dt>Descuento</dt><dd>-${moneyThousand(discount)}</dd>
          </div> */}
          <div className="line-item">
            <dt>Total</dt><dd>${moneyThousand(totalPrice)}</dd>
          </div>
        </dl>
        <br/>
        {/* <a className="btn btn-primary btn-large btn-block" onClick={props.sendOrder}>Ordenar</a> */}
        <ButtonBlock
          text="Ordenar"
          buttonStyle="btn btn-primary btn-large btn-block"
          loading={props.loading}
          disabled={props.disabled}
          click={props.sendOrder}
        />
      </div>
      <style jsx>{`
        .fluid-container {
          padding-left: 1.8rem;
          padding-right: 1.8rem;
        }

        .sidecart {
          box-sizing: border-box;
          display: flex;
          flex: 0 1 auto;
          flex-direction: column;
          position: fixed;
          width: 350px;
          height: 95%;
          top: 52px;
          right: 0px;
          background: white;
          z-index: 21;
          border-left: 1px solid rgba(217,219,224,0.5);
        }

        .sidecart-header {
          box-sizing: border-box;
          display: flex;
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
          padding: 22px;
          border-top: 1px solid rgba(217,219,224,0.5);
          background: white;
        }

        .estimated-total {
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          font-weight: 600;
          font-style: normal;
          letter-spacing: 0.5px;
          font-size: 12px;
          font-weight: normal;
          line-height: 1;
          letter-spacing: 1px;
          color: #42413E;
          margin-bottom: 20px;
        }

        .line-item {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 16px;
        }

        .items {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media (max-width: 600px) {
          .sidecart {
            display: flex;
            position: static;
            width: 100%;
            height: 95%;
            top: 52px;
            right: 0px;
            background: white;
            z-index: 21;
            border-left: 1px solid rgba(217,219,224,0.5);
          }
        }
      `}</style>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   }
// }

export default CartDetail;
