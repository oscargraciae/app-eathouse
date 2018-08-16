// import libraries
import React from 'react';
import { connect } from 'react-redux';

// import local libraries
import api from '../api';
import securePage from '../hocs/page';
import { addToCart } from '../actions/cart';

// import components
import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonApp from '../components/general/ButtonApp';
import MenuCalendar from '../components/menu/MenuCalendar';
import Cart from '../components/general/Cart';

class MenuItemDetail extends React.Component {
  static async getInitialProps({ query }) {
    const dish = await api.dish.get(query.id);
    return {
      dish,
    };
  }

  state = {
    option: 1,
  }

  addItem = () => {
    const productToCart = this.props.cart.data.filter((item) => item.id === this.props.dish.id)[0];
    this.props.addToCart(this.props.dish, productToCart.quantity + 1);
  }

  removeItem = async () => {
    const productToCart = await this.props.cart.data.filter((item) => item.id === this.props.dish.id)[0];
    this.props.addToCart(this.props.dish, productToCart.quantity - 1);
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
      <button className="small button-add-cart" onClick={() => this.props.addToCart(this.props.dish, 1)}>
        <span className="add-icon"></span><span className="add-text">Agregar</span>
      </button>
    )
  }

  render() {
    const { dish } = this.props;
    const { option } = this.state;
    const productToCart = this.props.cart.data.filter((item) => item.id === dish.id)[0];
    return (
      <Layout {...this.props}>
        <div className="fluid-container">
          <div className="top-bar">
            <a href="/menu"><i className="fas fa-chevron-left" /> Regresar al Menu</a>
          </div>
          <div className="menu">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-photo" style={{ backgroundImage: `url(${dish.image})` }} />
              </div>
              <div className="col-md-6">
                <div className="detail-info">
                  <h1>{dish.name}</h1>
                  <h3>${dish.price}</h3>
                  { productToCart ? this.btnCart(productToCart) : this.btnAdd() }

                  <div className="container-box detail-description">
                    <div className="tabs">
                      <div className={option === 1 ? "tabOption selected": "tabOption"} onClick={() => this.setState({ option: 1 })}>Detalle</div>
                      {/* <div className={option === 2 ? "tabOption selected": "tabOption"} onClick={() => this.setState({ option: 2 })}>Ingredientes</div> */}
                    </div>

                    <div className="container-info">
                      { this.state.option === 1 && <p>{dish.description}</p> }
                      { this.state.option === 2 && <p>{dish.ingredients}</p> }
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <Cart />
        </div>

        <style global jsx>{`
          .menu {
            margin: 20px 0px;
            width: calc(100% - 300px) !important;

            padding-left: 1.8rem;
            padding-right: 1.8rem;
          }

          .detail-photo {
            background-color: rgba(231,228,218,0.9);
            background-repeat: no-repeat;
            background-size: auto 100%;
            box-sizing: border-box;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-left: 1px solid #e8ebe9;
            border-top: 1px solid #e8ebe9;
            border-right: 1px solid #e8ebe9;
            overflow: hidden;
            cursor: pointer;
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

          .detail-info {

          }

          .detail-info h1, .detail-info h3 {
            padding-left: 5px;
          }

          .detail-info h3 {
            color: #3BCF75;
          }

          .container-box {
            border-radius: 3px;
            background-color: #fff;
            border: 1px solid #DDD;
            margin-top: 30px;
          }

          .detail-description {

          }

          .tabs {
            display: flex;
            justify-content: space-between;
          }

          .tabOption {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            padding: 15px;
            border-bottom: 3px solid #DDD;
            cursor: pointer;
          }

          .selected {
            border-bottom: 3px solid #3BCF75;
          }

          .container-info {
            padding: 10px;
            padding-bottom: 30px;
          }

          .top-bar {
            background: white;
            width: 100%;
            border-bottom: 1px solid #EEE;
            display: flex;
          }

          .top-bar > a {
            padding: 20px 1.8rem;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            color: #42413E;
          }

          .button-add-cart-small {
            color: #3BCF75;
            background: 0 0;
            line-height: 33px;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            border: 1px solid #3BCF75;
            padding: 0 20px;
            font-size: 14px;
            margin: 13px 0 15px;
            width: 50;
            z-index: 1;
          }
  
          .button-add-cart-small:hover {
            background: #3BCF75;
            color: white;
          }

          .menu-item:hover .button-add-cart-small, .menu-item:hover .button-add-cart {
            visibility: visible;
          }

          .button-add-cart {
            color: #3BCF75;
            background: 0 0;
            line-height: 33px;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            border: 1px solid #3BCF75;
            padding: 0 20px;
            font-size: 14px;
            margin: 13px 0 15px;
            width: 128px;
            z-index: 1;
          }
  
          .button-add-cart:hover {
            background: #3BCF75;
            color: white;
          }

          .lbl-quantity {
            padding: 10px;
          }
        `}</style>
      </Layout>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default securePage(connect(mapStateToProps, { addToCart })(MenuItemDetail));