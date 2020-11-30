// import libraries
import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

// import local libraries
// import securePage from '../hocs/page';
import api from '../api';
import { clearCart, addToCart } from '../actions/cart';
import { moneyThousand } from '../utils/formatNumber';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';

// import components
import Layout from '../components/common/Layout';
import CartDetail from '../components/checkout/CartDetail';
import ModalCreditCard from '../components/general/ModalCreditCard';

import LoadingSpinner from '../components/common/LoadingSpinner';
import { Box, Select, useToast } from '@chakra-ui/react';
import ModalAlert from '../components/checkout/ModalAlert';

class Checkout extends React.Component {
  static async getInitialProps(context) {
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    if(!loggedUser) {
      redirect('/login', context);
    }

    return {
      id: context.query.id,
    };
  }

  constructor() {
    super();
    this.state = {
      store: {},
      creditCards: null,
      showModalCreditCard: false,
      showModalAlert: false,
      paymentError: null,
      creditCardId: 0,
      subtotal: 0,
      total: 0,
      errors: {},

      loadingPage: true,

      // alertShow: false,
      isSendingOrder: false,
      methodPaymentId: 1,
      paymentChange: 0,
      shippingId: null,
      shippingSelected: null,
      shippings: [],
    }
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const { address } = this.props.userState;
    const [creditCards, shippings, store] = await Promise.all([
      api.creditCard.getAll(),
      api.shipping.getAll(this.props.pageProps.id),
      api.store.get(this.props.pageProps.id),
    ]);
    this.setState({ store, userAddressId: address.id, creditCards, loadingPage: false, shippings }, () => {
      if (!shippings || shippings.length === 0) {
        this.setState({ shippingId: -1, shippingSelected: { id: 0 } });
      }
    });
  }

  // Metodo que envía la orden al API
  sendOrder = async () => {
    const { methodPaymentId } = this.state;

    this.setState({ isSendingOrder: true });

    if (methodPaymentId === 1) {
      this.orderCard();
    } else {
      this.orderCash();
    }
  }

  confirm = () => {
    this.setState({ confirmation: false }, () => {
      Router.push('/orders');
    })
  }

  afterSave = async () => {
    const creditCards = await api.creditCard.getAll();
    this.setState({ creditCards }, () => {
      this.setState({ creditCardId: creditCards[0].id });
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  async orderCard() {
    const { userAddressId, creditCardId, shippingId } = this.state;
    const { data } = this.props.cart;

    let isDiscount = false;
    let quantityTotal = 0;
    if (data.length > 0) {
      data.map((item) => {
        quantityTotal = quantityTotal + item.quantity;
      });

    }
    const order = {
      userAddressId,
      creditCardId,
      deviceType: 'web',
      paymentMethodId: 1,
      paymentChange: 0,
      isDiscount: isDiscount,
      storeId: this.props.pageProps.id,
      shippingId: shippingId === -1 ? null : shippingId,
      orderDetails: data,
    }
    const response = await api.orders.create(order);
    if(response.success) {
      this.setState({ paymentError: null,  isSuccess: true, showModalAlert: true, isSendingOrder: false }, () => {
        this.props.clearCart();
      });
    } else {
      this.setState({ isSuccess: false, showModalAlert: true, paymentError: response.message, isSendingOrder: false });
    }
  }

  async orderCash() {
    const { userAddressId, shippingId } = this.state;
    const { data } = this.props.cart;

    let isDiscount = false;
    let quantityTotal = 0;
    if (data.length > 0) {
      data.map((item) => {
        quantityTotal = quantityTotal + item.quantity;
      });
    }
    const order = {
      userAddressId,
      creditCardId: null,
      deviceType: 'web',
      paymentMethodId: 2,
      paymentChange: 0,
      isDiscount: isDiscount,
      storeId: this.props.pageProps.id,
      shippingId: shippingId === -1 ? null : shippingId,
      orderDetails: data,
    }
    const response = await api.orders.createCash(order);
    if(response.success) {
      this.setState({ confirmation: true, isSendingOrder: false }, () => {
        this.props.clearCart();
      });
    } else {
      this.setState({ paymentError: response.message, alertShow: true, isSendingOrder: false });
    }
  }

  onSelectShipping = (shippingId) => {
    const shippingSelected = this.state.shippings.filter(item => item.id === shippingId)[0];
    this.setState({ shippingId, shippingSelected });
  }

  render() {
    const { creditCards, loadingPage, shippings, shippingId } = this.state;
    const { userState } = this.props;
    const { address } = userState; // Dirección del estado en REDUX

    return (
      <Layout {...this.props}>
        { loadingPage ? <LoadingSpinner /> :
          <Box mx="auto" maxWidth='1140px'>
            <ModalCreditCard
              show={this.state.showModalCreditCard}
              onToggle={() => this.setState({ showModalCreditCard: !this.state.showModalCreditCard })}
              afterSave={this.afterSave}
            />
            <ModalAlert
              show={this.state.showModalAlert}
              confirm={this.confirm}
              onClose={() => this.setState({ showModalAlert: false })}
              error={this.state.paymentError}
            />
            {/* <Confirmation show={this.state.confirmation} confirm={this.confirm} /> */}
            {/* { this.state.paymentError && <AlertModalApp show={this.state.paymentError} title="Oops! :(" description={this.state.paymentError} onClick={this.alertClick} /> } */}
            <Box>
              <div className="checkout">
                <div className="address">

                  <div className="container-step container-box">
                    <div className="title">Tienda</div>
                    <div className='row address-item address-item-select'>
                      <div className="col-md-12 address-content">
                        <div className="address-body">
                          <div className="title-address"><h3>{this.state.store.name}</h3></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-step container-box">
                    <div className="title">Dirección de envío</div>
                    <div className='row address-item address-item-select'>
                      <div className="col-md-12 address-content">
                        <div className="address-body">
                          <div className="title-address"><b>{address.addressMap}</b></div>
                          <div>{address.area}, {address.street}, {address.zipcode}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-step container-box">
                    <div className="title">Método de pago</div>
                    <div className="method-controls">
                      <div className={this.state.methodPaymentId == 1 ? 'method-controls-btn method-controls-btn-selected' : 'method-controls-btn'} onClick={() => this.setState({ methodPaymentId: 1 })}>
                        {/* <FiCreditCard /> */}
                        <span>Tarjeta de crédito/debito</span>
                      </div>
                      <div className={this.state.methodPaymentId == 2 ? 'method-controls-btn method-controls-btn-selected' : 'method-controls-btn'} onClick={() => this.setState({ methodPaymentId: 2 })}>
                      {/* <FiCreditCard /> */}
                        <span>Efectivo</span>
                      </div>
                    </div>
                    { this.state.methodPaymentId == 1 &&
                      <div className="form">
                        { creditCards.length > 0 &&
                            <Select size='lg' name="creditCardId" onChange={this.onChange} value={this.state.creditCardId}>
                            <option>Seleccionar método de pago</option>
                            { creditCards.map((item) => (
                              <option value={item.id} key={item.id}>{item.last4} - {item.brand}</option>
                            )) }
                          </Select>
                        }
                        <br />
                        <a
                        href="#"
                        onClick={() => this.setState({ showModalCreditCard: !this.state.showModalCreditCard })}
                        className="btn-link">
                          + Agregar otra tarjeta de Crédito/Débito
                        </a>
                      </div>
                    }
                  </div>

                  <div className="container-step container-box">
                    <div className="title">Tipo de envío</div>

                    <div className={`shipping-options`}>
                      {shippings.map((item) => (
                        <div
                          key={item.id}
                          className={shippingId === item.id ? 'shipping-item shipping-item-selected' : 'shipping-item'}
                          onClick={() => this.onSelectShipping(item.id)}
                        >
                          <div>{item.description}</div>
                          <div>${moneyThousand(item.price)}MXN</div>
                        </div>
                      ))}

                      { shippings.length == 0 &&
                        <div className={'shipping-item shipping-item-selected'}>
                          <div>GRATIS</div>
                          <div>$0 MXN</div>
                        </div>
                      }
                    </div>
                  </div>

                </div>
              </div>
              <div className="cartDetail">
                <CartDetail
                  user={this.props.user}
                  sendOrder={this.sendOrder}
                  disabled={(!this.state.creditCardId && this.state.methodPaymentId === 1) || !this.state.shippingId}
                  loading={this.state.isSendingOrder}
                  shipping={this.state.shippingSelected}
                  cart={this.props.cart}
                  addToCart={this.props.addToCart}
                />
              </div>
            </Box>
          </Box>
        }
        <style jsx>{`
          .checkout {
            margin: 20px 0px;
            width: calc(100% - 350px) !important;
          }

          .fluid-container {
            padding-left: 1.8rem;
            padding-right: 1.8rem;
          }

          .title {
            font-size: 16px;
            font-weight: bold;
            padding: 10px 0;
          }

          .container-box {
            border-radius: 3px;
            background-color: #fff;
            border: 1px solid #e8ebe9;
            margin-top: 8px;
            padding: 10px 40px;
          }

          .btn-link {
            padding: 20px 0;
            font-size: 14px;
            font-weight: bold;
            color: #3BCF75;

            display: inline-block;
          }

          .lbl-deliveryTime {
            font-weight: bold;
            font-size: 18px;
          }

          .lbl-notes {
            margin-top: 20px;
            font-size: 11px;
            color: #79776B;
          }

          .btnContainerMobile {
            display: none;
          }

          .method-controls {
            display: flex;
            flex-direction: row;
            margin-bottom: 20px;
          }

          .method-controls-btn {
            padding: 12px 18px;
            margin-right: 5px;
            border: 1px solid #838286;
            border-radius: 3px;

            display: flex;
            align-items: center;
          }

          .method-controls-btn:hover {
            cursor: pointer;
          }

          .method-controls-btn > span {
            /* margin-left: 10px !important; */
          }

          .method-controls-btn-selected {
            padding: 12px 18px;
            margin-right: 5px;
            border: 1px solid var(--primary-color);
            border-radius: 3px;
            color: var(--primary-color);
          }

          .method-controls-btn-disabled {
            padding: 12px 18px;
            margin-right: 5px;
            border: 1px solid #DDDDDD;
            border-radius: 3px;
            color: #DDDDDD;
          }

          .sidecart-message {
            text-align: center;
            background-color: #fec825;
            padding: 15px 22px;
          }

          .message-text {
            font-family: "BentonSans", Helvetica, Arial, sans-serif;
            font-weight: 600;
            font-style: normal;
            letter-spacing: 0.5px;
            font-size: 14px;
            font-weight: normal;
            color: #42413E;
          }

          .onlyMobile {
            display: none;
          }

          .shipping-options {

          }

          .shipping-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            border: 1px solid #DDD;
            padding: 12px;
            border-radius: 3px;
            margin-bottom: 12px;
          }

          .shipping-item:hover {
            cursor: pointer;
          }

          .shipping-item-selected {
            background: rgba(59, 207, 117, 0.3);
          }

          @media (max-width: 600px) {
            .checkout {
              margin: 20px 0px;
              width: 100% !important;
            }

            .cartDetail {
              /* display: none; */
            }

            .container-box {
              padding: 10px 10px;
            }

            .btnContainerMobile {
              position: sticky;
              bottom: 0;
              z-index: 100;
              display: block;
            }

            .items {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .onlyMobile {
              display: block;
            }
          }

        `}</style>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    userState: state.user,
  }
}

export default connect(mapStateToProps, { clearCart, addToCart })(Checkout);
