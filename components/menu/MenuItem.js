import React from 'react';
import { connect } from 'react-redux';
import { Flex } from '@chakra-ui/react';

import { toMoney, thousandSpace } from '../../utils/formatNumber';

class MenuItem extends React.Component {

  state = {
    productPriceSelected: this.props.productPrice[0],
  }

  addItem = () => {
    const productToCart = this.props.cart.data.filter((item) => item.id === this.props.id && item.unidType.id === this.state.productPriceSelected.unidType.id,)[0];
    this.props.addCart(this.props, productToCart.quantity + 1, this.state.productPriceSelected); // Producto, cantidad, (precio de productio y tipo de unidad)
  }

  removeItem = () => {
    const productToCart = this.props.cart.data.filter((item) => item.id === this.props.id && item.unidType.id === this.state.productPriceSelected.unidType.id,)[0];
    this.props.addCart(this.props, productToCart.quantity - 1, this.state.productPriceSelected);  // Producto, cantidad, (precio de productio y tipo de unidad)
  }

  btnCart = (itemCart) => {
    return (
      <div>
        <button  className="small button-add-cart-small" onClick={() => this.removeItem()}>
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
      <button className="small button-add-cart" onClick={() => this.props.addCart(this.props, 1, this.state.productPriceSelected)}>
        <span className="add-icon"></span><span className="add-text">Agregar</span>
      </button>
    )
  }

  onChangePrice = (e) => {
    const productPrice = this.props.productPrice.filter((item) => item.id === Number(e.target.value))[0];
    this.setState({ productPriceSelected: productPrice });
  }

  render() {
    const productToCart = this.props.cart.data.filter(
      (item) => item.id === this.props.id
      && item.unidType.id === this.state.productPriceSelected.unidType.id,
    )[0];
    return (
      <Flex flex={1} w='100%' h='180px' borderWidth='1px' borderColor='rgba(217, 219, 224, 0.5)' >
        <div className="menu-item-details">
          <div className="menu-item-content" onClick={this.props.selectDetailProduct}>
            <div className="menu-item-description">
              <div className="menu-item-name-link" >
                <span className="text">{this.props.name}</span>
              </div>
              <div className="menu-item-featured">
                <p>{this.props.description}</p>
              </div>
            </div>
            <div className="menu-item-image">
              {this.props.image && <div className="menu-item-photo" style={{ backgroundImage: `url(${this.props.image})` }} /> }

            </div>
          </div>
          <div className="menu-item-actions">
            <div>
              <div className="menu-item-price">
                <span>${this.state.productPriceSelected.price}</span>
              </div>
              <div className="menu-item-price">
                {/* <span>{this.props.productPrice[0].unidType.name}</span> */}
                <select onChange={this.onChangePrice} className="unid-type-select">
                  {this.props.productPrice.map((item) => (
                    <option value={item.id} key={item.id}>{item.unidType.name}</option>
                  ))}
                </select>
              </div>
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
            /* border-left: 1px solid rgba(217,219,224,0.5);
            border-bottom: 1px solid rgba(217,219,224,0.5);
            border-right: 1px solid rgba(217,219,224,0.5); */
            /* border: 1px solid rgba(217, 219, 224, 0.5); */
          }

          .menu-item-content {
            display: flex;
          }

          .menu-item-description {
            display: flex;
            flex-direction: column;
            flex: 1 1 0%;
            padding: 15px;
            padding-bottom: 0px;
          }

          .menu-item-image {
            width: 130px;
            height: 130px;
            display: flex;
          }

          .menu-item-featured {
            margin-left: 0px;
            font-family: "BentonSans", Helvetica, Arial, sans-serif;
            font-weight: 400;
            font-style: normal;
            letter-spacing: 0.2px;
            color: rgba(143, 149, 163, 0.9);
            font-size: 12px;
            line-height: 1.75em;
        }

          .menu-item-name-link {
            font-family: "BentonSans", Helvetica, Arial, sans-serif;
            font-weight: 500;
            font-style: normal;
            letter-spacing: 0.5px;
            margin-left: 0px;
            margin-right: 16px;
            font-size: 16px;
            line-height: 1.3em;
            letter-spacing: 0;
            color: rgb(45, 49, 56);
            overflow: visible;
            text-overflow: ellipsis;
            display: block;
            /* padding: 10px 0; */
            padding: 5px 0;
          }

          .menu-item-actions {
            height: 50px;
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
            color: #3BCF78;
            background: #FFFFFF;
            line-height: 25px;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            border: 1px solid #3BCF78;

            font-size: 14px;
            margin: 13px 0 15px;
            padding: 0 10px;
            width: 40px;
            z-index: 1;
          }

          .button-add-cart-small:hover {
            background: #3BCF78;
            color: white;
          }

          .menu-item:hover .button-add-cart-small, .menu-item:hover .button-add-cart {
            visibility: visible;
          }

          .button-add-cart {
            color: #3BCF78;
            background: 0 0;
            line-height: 26px;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            border: 1px solid #3BCF78;
            padding: 0 10px;
            font-size: 12px;
            margin: 7px 0 8px;
            width: 75px;
            z-index: 1;
            font-weight: bold;
          }

          .button-add-cart:hover {
            background: #3BCF78;
            color: white;
          }

          .lbl-quantity {
            padding: 10px;
          }

          .col-md-3 {
            /* padding: 5px; */
            padding-right: 0px;
            padding-bottom: 15px;
          }

          .custom-tooltip {
            width: 190px;
            text-align: center;
          }

          .unid-type-select {
            background: transparent;
            border: 1px solid transparent;
            color: #333;
          }

          @media (max-width: 600px) {
            .menu-item {
              display: flex;
              cursor: pointer;
              box-sizing: content-box;
              width: 100%;
              height: 150px;
              /* height: 128px; */
              margin: 8px 0px;
              padding: 0px;
              border-width: 1px;
              border-style: solid;
              border-color: rgba(217, 219, 224, 0.5);
              border-image: initial;
            }

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

            .menu-item-image {
              width: 100px;
              height: 100px;
              display: flex;
            }

            .menu-item-description {
              /* height: 90px; */
              height: 40px;
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
      </Flex>
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
