// import libraries
import React from 'react';
import { connect } from 'react-redux';

// import local libraries
import { moneyThousand } from '../../utils/formatNumber';

// import componens
import ButtonBlock from '../general/ButtonBlock';
import CartItem from '../general/CartItem';

function CartDetail(props) {
  let total = 0;
  let subtotal = 0;
  let discount = 0;
  let quantityTotal = 0;
  
  props.cart.data.map((item, i) => {
    subtotal = subtotal + item.total;
  });

  if (props.user.bussinesId) {
    discount = subtotal * 0.20;
  }

  if (props.cart.data.length > 0) {
    props.cart.data.map((item, i) => {
      quantityTotal = quantityTotal + item.quantity;
    });

    if(quantityTotal >= 5) {
      discount = subtotal * 0.20;
    }
  }
  
  total = subtotal - discount;

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
            <dt>Subtotal</dt><dd>${moneyThousand(subtotal)}</dd>
          </div>        
          <div className="line-item">
            <dt>Gastos de envío</dt><dd>GRATIS</dd>
          </div>
          <div className="line-item">
            <dt>Descuento</dt><dd>-${moneyThousand(discount)}</dd>
          </div>
          <div className="line-item">
            <dt>Total</dt><dd>${moneyThousand(total)}</dd>
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
        .menu {
          margin: 20px 0px;
          width: calc(100% - 350px) !important;
        }

        .fluid-container {
          padding-left: 1.8rem;
          padding-right: 1.8rem;
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
          width: 350px;
          height: 95%;
          top: 52px;
          right: 0px;
          background: white;
          z-index: 21;
          border-left: 1px solid #e8ebe9;
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
          border-bottom: 1px solid #e8ebe9;
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
          border-top: 1px solid #e8ebe9;
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

          font-size: 16px;
        }

        .items {
          list-style: none;
          padding: 0;
          margin: 0;
        }

      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(CartDetail);