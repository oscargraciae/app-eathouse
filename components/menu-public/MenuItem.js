import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

import { toMoney, thousandSpace } from '../../utils/formatNumber';

class MenuItem extends React.Component {

  addItem = () => {
    const productToCart = this.props.cart.data.filter((item) => item.id === this.props.id && item.deliveryDate === this.props.deliveryDate)[0];
    this.props.addCart(this.props, productToCart.quantity + 1);
  }

  removeItem = () => {
    const productToCart = this.props.cart.data.filter((item) => item.id === this.props.id && item.deliveryDate === this.props.deliveryDate)[0];
    this.props.addCart(this.props, productToCart.quantity - 1);
  }

  render() {
    const productToCart = this.props.cart.data.filter((item) => item.id === this.props.id && item.deliveryDate === this.props.deliveryDate )[0];
    return (
      <div className="col-md-3 col-xs-6 menu-item">
        <ReactTooltip effect="solid" className="custom-tooltip" />
        <div className="menu-item-photo" style={{ backgroundImage: `url(${this.props.image})` }} />
        <div className="menu-item-details">
          <div className="menu-item-description">
            <div className="menu-item-name-link">
              <span className="text" data-tip={this.props.description}>{this.props.name}</span>
            </div>
          </div>
          <div className="menu-item-actions">
            <div className="menu-item-price">
              <span>${this.props.price}</span>
            </div>
            <div className="menu-item-buttons">
              { productToCart ? this.btnCart(productToCart) : this.btnAdd() }
            </div>
          </div>
        </div>

        <style global jsx>{`
          .menu-item-photo {
            background-color: rgba(231,228,218,0.9);
            background-repeat: no-repeat;
            background-size: auto 100%;
            box-sizing: border-box;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-left: 1px solid rgba(217,219,224,0.5);
            border-top: 1px solid rgba(217,219,224,0.5);
            border-right: 1px solid rgba(217,219,224,0.5);
            overflow: hidden;
            display: block;
            padding-top: 100%;
            height: 0;
            width: 100%;
            position: relative;
            z-index: 0;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: moz-none;
            -ms-user-select: none;
            user-select: none;
          }

          .menu-item-details {
            display: block;
            position: relative;
            width: 100%;
            background-color: white;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            border-left: 1px solid rgba(217,219,224,0.5);
            border-bottom: 1px solid rgba(217,219,224,0.5);
            border-right: 1px solid rgba(217,219,224,0.5);

            padding-top: 10px;
          }

          .menu-item-description {
            /* height: 110px; */
            /* height: 130px; */
            height: 55px;
          }

          .menu-item-featured {
            margin-left: 16px;
            font-family: "BentonSans", Helvetica, Arial, sans-serif;
            font-weight: 400;
            font-style: normal;
            letter-spacing: 0.2px;
            color: #79776B;
            font-size: 12px;
            line-height: 1.75em;
        }

          .menu-item-name-link {
            font-family: "BentonSans", Helvetica, Arial, sans-serif;
            font-weight: 600;
            font-style: normal;
            letter-spacing: 0.5px;
            margin-left: 16px;
            margin-right: 16px;
            font-size: 16px;
            line-height: 1.3em;
            letter-spacing: 0;
            color: #2D3138;
            overflow: visible;
            text-overflow: ellipsis;
            display: block;
            /* padding: 10px 0; */
            padding: 5px 0;
          }

          .menu-item-actions {
            height: 53px;
            border-top: 1px solid rgba(217,219,224,0.5);

            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .menu-item-price {
            font-size: 21px;
            letter-spacing: 0.2px;

            color: #333;
            float: left;
            border-right: 1px solid rgba(217,219,224,0.5);
            text-align: justify;
            padding-left: 16px;
            padding-right: 16px;

            height: 100%;
            display: flex;
            align-items: center;
          }

          .menu-item-buttons {
            margin-right: 12px;
            font-size: 16px;
            display: block;
            float: right;
          }

          .add-to-cart {
            border-color: #F27242;
            background-color: white;
            color: #F27242;
            border-width: 2px;
            font-size: 14px;
            text-transform: uppercase;
            overflow: hidden;
            line-height: 25px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100px;
            height: 28px;

            visibility: hidden;
            border-radius: 3px;
          }

          .add-to-cart:hover {
            background: #F27242;
            color: white;
          }

          .button-add-cart-small {
            color: #FF7901;
            */ color: #3BCF75; */
            background: 0 0;
            line-height: 33px;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            border: 1px solid #FF7901;

            font-size: 14px;
            margin: 13px 0 15px;
            padding: 0 20px;
            width: 50px;
            z-index: 1;
          }

          .button-add-cart-small:hover {
            background: #FF7901;
            color: white;
          }

          .menu-item:hover .button-add-cart-small, .menu-item:hover .button-add-cart {
            visibility: visible;
          }

          .button-add-cart {
            color: #FF7901;
            background: 0 0;
            line-height: 33px;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            border: 1px solid #FF7901;
            padding: 0 20px;
            font-size: 14px;
            margin: 13px 0 15px;
            width: 128px;
            z-index: 1;
            font-weight: bold;
          }

          .button-add-cart:hover {
            background: #FF7901;
            color: white;
          }

          .lbl-quantity {
            padding: 10px;
          }

          .col-md-3 {
            padding: 5px;
          }

          .custom-tooltip {
            width: 190px;
            text-align: center;
          }

          @media (max-width: 600px) {
            .menu-item-name-link {
              font-size: 12px;
              line-height: 1.3em;
              -webkit-letter-spacing: 0;
              -moz-letter-spacing: 0;
              -ms-letter-spacing: 0;
              letter-spacing: 0;
              color: #2D3138;
              overflow: visible;
              text-overflow: ellipsis;
              display: block;
              padding: 0px 0;
              /* height: 35px; */

            }
            .menu-item-featured {
              font-size: 10px;
            }

            .menu-item-description {
              height: 90px;
            }

            .menu-item-actions {
              height: 53px;
              border-top: 1px solid rgba(217,219,224,0.5);

              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .menu-item-price {
              font-size: 16px;
              letter-spacing: 0.2px;

              color: #333;
              float: left;
              border-right: 1px solid rgba(217,219,224,0.5);
              text-align: justify;
              padding-left: 12px;
              padding-right: 12px;

              height: 100%;
              align-items: center;
            }

            .menu-item-buttons {
              margin-right: 12px;
              font-size: 16px;
              display: block;
              float: right;
            }

            .button-add-cart {
              font-size: 12px;
              width: 90px;
            }

            .button-add-cart-small {
              width: 40px;
              margin: 13px 0 15px;
              padding: 0 10px;
              background: #FFF;
            }

            .lbl-quantity {
              padding: 3px;
            }
          }
        `}</style>
      </div>
    )
  }

  btnCart = (itemCart) => {
    return (
      <div>
        <button className="small button-add-cart-small" onClick={() => this.removeItem()}>
          <span className="add-icon"></span><span className="add-text">-</span>
        </button>
        <span className="lbl-quantity">{itemCart.quantity}</span>
        <button className="small button-add-cart-small" onClick={() => this.addItem()}>
          <span className="add-icon"></span><span className="add-text">+</span>
        </button>
      </div>
    )
  }

  btnAdd = () => {
    return (
      <a className="btn small button-add-cart" href="/signup">
        <span className="add-icon"></span><span className="add-text">Agregar</span>
      </a>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
};

export default connect(mapStateToProps)(MenuItem);

// export default MenuItem;
