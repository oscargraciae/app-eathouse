// import libraries
import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

// import local libraries
import securePage from '../hocs/page';
import api from '../api';
import { clearCart } from '../actions/cart';

// import components
import Layout from '../components/common/Layout';
import ButtonBlock from '../components/general/ButtonBlock';
import CartDetail from '../components/checkout/CartDetail';
import AddressList from '../components/user/AddressList';
import ModalAddress from '../components/general/ModalAddress';
import ModalCreditCard from '../components/general/ModalCreditCard';
import Confirmation from '../components/checkout/Confirmation';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AlertModalApp from '../components/general/AlertModalApp';
import CartItem from '../components/general/CartItem';
import InputText from '../components/general/InputText';

class Checkout extends React.Component {
  static async getInitialProps(context) {
    return {};
  }

  state = {
    step: 1,
    address: [],
    creditCards: null,
    addressFormHidden: true,
    showModalCreditCard: false,
    confirmation: false,
    creditCardId: 0,
    userAddressId: 0,
    subtotal: 0,
    total: 0,
    errors: {},
    loadingPage: true,
    showAddress: false,
    paymentError: null,
    alertShow: false,
    isSendingOrder: false,
    methodPayment: 1,
    paymentChange: 0,
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const [addresses, creditCards] = await Promise.all([
      api.user.getAddress(),
      api.creditCard.getAll(),
    ]);
    this.setState({ address: addresses, creditCards, loadingPage: false }, () => {
      if(addresses.length > 0) {
        this.setState({ userAddressId: addresses[0].id });
      }
    });
  }

  afterAddressSave = (address) => {
    this.setState({ step: 2, userAddressId: address.id });
  }

  afterSelectAddress = (address) => {
    this.setState({ userAddressId: address.id });
  }

  nextStep = () => {
    this.setState({ step: 2 });
  }

  showAddressModal = (e) => {
    e.preventDefault();
    this.setState({ showAddress: true });
  }

  showCreditCardModal = () => {
    this.setState({ showModalCreditCard: !this.state.showModalCreditCard });
  }

  responseModal = async () => {
    const address = await api.user.getAddress();
    this.setState({ showAddress: false, address });
  }

  sendOrder = async () => {
    const { methodPayment } = this.state;

    this.setState({ isSendingOrder: true });

    switch (methodPayment) {
      case 1:
        this.orderCard();
        break;
      case 2:
        this.orderCash();
        break;
      default:
        break;
    }
  }

  confirm = () => {
    this.setState({ confirmation: false }, () => {
      Router.push('/menu');
    })
  }

  afterSave = async () => {
    const creditCards = await api.creditCard.getAll();
    this.setState({ creditCards }, () => {
      this.setState({ creditCardId: creditCards[0].id });
    });
  }

  alertClick = () => {
    this.setState({ alertShow: false });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // onChangePayment = () => {
  //   const change = e.target.value;
  //   if(change > )
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  onModalClose = () => {
    this.setState({ showAddress: false });
  }

  async orderCard() {
    const { userAddressId, creditCardId } = this.state;
    const { data } = this.props.cart;

    let isDiscount = false;
    let quantityTotal = 0;
    if (data.length > 0) {
      data.map((item, i) => {
        quantityTotal = quantityTotal + item.quantity;
      });

      if(quantityTotal >= 5 || this.props.user.bussinesId) {
        isDiscount = true;
      }
    }

    const order = {
      userAddressId,
      creditCardId,
      deviceType: 'web',
      paymentMethod: 1,
      paymentChange: 0,
      isDiscount: isDiscount,
      orderDetails: data,
    }
    const response = await api.orders.create(order);
    if(response.ok) {
      this.setState({ confirmation: true, isSendingOrder: false }, () => {
        this.props.clearCart();
      });
    } else {
      const { details } = response.err;
      this.setState({ paymentError:  details[0].message, alertShow: true, isSendingOrder: false });
    }
  }

  async orderCash() {
    const { userAddressId, creditCardId, paymentChange } = this.state;
    const { data } = this.props.cart;

    let isDiscount = false;
    let quantityTotal = 0;
    if (data.length > 0) {
      data.map((item, i) => {
        quantityTotal = quantityTotal + item.quantity;
      });

      if(quantityTotal >= 5 || this.props.user.bussinesId) {
        isDiscount = true;
      }
    }

    const order = {
      userAddressId,
      deviceType: 'web',
      paymentMethod: 2,
      paymentChange,
      isDiscount: isDiscount,
      orderDetails: data,
    }
    const response = await api.orders.createCash(order);
    if(response.ok) {
      this.setState({ confirmation: true, isSendingOrder: false }, () => {
        this.props.clearCart();
      });
    } else {
      const { details } = response.err;
      this.setState({ paymentError:  details[0].message, alertShow: true, isSendingOrder: false });
    }
  }

  render() {
    const { step, address, addressFormHidden, userAddressId, creditCards, loadingPage } = this.state;
    const { user } = this.props;
    let quantityTotal = 0;
    if (this.props.cart.data.length > 0) {
      this.props.cart.data.map((item, i) => {
        quantityTotal = quantityTotal + item.quantity;
      });
    }
    console.log("DATA CART-->",  this.props.cart.data.length);
    return (
      <Layout {...this.props}>
        { loadingPage ? <LoadingSpinner /> :
          <div>
            <ModalAddress show={this.state.showAddress} responseModal={this.responseModal} onHide={this.onModalClose} />
            <ModalCreditCard show={this.state.showModalCreditCard} onToggle={this.showCreditCardModal} afterSave={this.afterSave} />
            <Confirmation show={this.state.confirmation} confirm={this.confirm} />
            { this.state.paymentError && <AlertModalApp show={this.state.alertShow} title="Oops! :(" description={this.state.paymentError} onClick={this.alertClick} /> }
            <div className="container">
              <div className="checkout">
              { user.bussinesId &&
                <div className="sidecart-message">
                  <span className="message-text">Por formar parte de {user.bussine.name} tienes el <strong>20%</strong> de descuento en todos tus pedidos</span>
                </div>
              }
              { !user.bussinesId &&
                <div className="sidecart-message">
                  <span className="message-text">Obtén un <strong>20%</strong> de descuento en la compra de 5 platillos o más.</span>
                </div>
              }
                <div className="address">
                  <div className="container-step container-box">
                    <div className="title">Dirección</div>
                    <div className="form">
                      { address.length > 0 &&
                        <AddressList address={address} select={this.afterSelectAddress} itemSelected={userAddressId} />
                      }
                      <br />
                      <a href="#" className="btn-link" onClick={this.showAddressModal}>+ Agregar nueva dirección</a>
                    </div>
                  </div>

                  <div className="container-step container-box">
                    <div className="title">Metodo de pago</div>
                    <div className="method-controls">
                    <div className={this.state.methodPayment == 1 ? 'method-controls-btn method-controls-btn-selected' : 'method-controls-btn'} onClick={() => this.setState({ methodPayment: 1 })}>
                        <i className="far fa-credit-card fa-lg" />
                        <span>Tarjeta de crédito/debito</span>
                      </div>
                      { quantityTotal < 5 ?
                        <div className='method-controls-btn method-controls-btn-disabled'>
                          <i className="fas fa-money-bill-alt fa-lg" />
                          <span>Efectivo</span>
                        </div> :
                        <div className={this.state.methodPayment == 2 ? 'method-controls-btn method-controls-btn-selected' : 'method-controls-btn'} onClick={() => this.setState({ methodPayment: 2 })}>
                          <i className="fas fa-money-bill-alt fa-lg" />
                          <span>Efectivo</span>
                        </div>
                      }
                    </div>

                    { this.state.methodPayment === 1 &&
                      <div className="form">
                        <select className="form-control input-lg" name="creditCardId" onChange={this.onChange} value={this.state.creditCardId}>
                          <option>Seleccionar método de pago</option>
                          { creditCards && creditCards.map((item) => (
                            <option value={item.id} key={item.id}>{item.last4} - {item.brand}</option>
                          )) }
                        </select>
                        <br />
                        <a href="#" onClick={this.showCreditCardModal} className="btn-link">+ Agregar otro método de pago</a>
                      </div>
                    }

                    { this.state.methodPayment === 2 &&
                      <div className="form">
                        <label>¿Cambio de cuanto?</label>
                        <p>Escribe cuanto vas a pagar en efectivo para envíar tu cambio.</p>
                        <div className="row">
                          <div className="col-md-4">
                            <InputText
                              value={this.state.paymentChange}
                              onChange={this.onChange}
                              type="text"
                              name="paymentChange"
                              label="0"
                            />
                          </div>
                        </div>
                      </div>
                    }

                    <p className="lbl-notes">*El pago en efectivo está disponible en la compra de 5 platillos o más</p>
                  </div>

                  <div className="container-step container-box">
                    <div className="title">Horario de entrega</div>
                    <div className="lbl-deliveryTime">12:30pm - 1:30pm</div>
                    <p className="lbl-notes">*Actualmente solo contamos con este horario de entrega</p>
                  </div>

                  <div className="container-step container-box onlyMobile">
                    <div className="title">Resumen de compra</div>
                    <div className="sidecart-body">
                      <div className="items-group">
                        <ul className="items">
                          { this.props.cart.data.map((item, i) => {
                            return (
                              <CartItem key={i} {...item} />
                            )
                          }) }

                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="btnContainerMobile">
                <ButtonBlock
                  text="Ordenar"
                  buttonStyle="btn btn-primary btn-large btn-block"
                  loading={this.state.isSendingOrder}
                  disabled={!this.state.creditCardId || !this.state.userAddressId}
                  click={this.sendOrder}
                />
              </div>
              <div className="cartDetail">
                { this.state.methodPayment === 1 ?
                  <CartDetail user={this.props.user} sendOrder={this.sendOrder} disabled={!this.state.creditCardId || !this.state.userAddressId} loading={this.state.isSendingOrder}/> :
                  <CartDetail user={this.props.user} sendOrder={this.sendOrder} disabled={this.state.paymentChange < 300 || !this.state.userAddressId } loading={this.state.isSendingOrder}/>
                }

              </div>
            </div>
          </div>
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
          }

          .method-controls-btn:hover {
            cursor: pointer;
          }

          .method-controls-btn > span {
            margin-left: 10px !important;
          }

          .method-controls-btn-selected {
            padding: 12px 18px;
            margin-right: 5px;
            border: 1px solid #FF7901;
            border-radius: 3px;
            color: #FF7901;
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

          @media (max-width: 600px) {
            .checkout {
              margin: 20px 0px;
              width: 100% !important;
            }

            .cartDetail {
              display: none;
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
  }
}

export default securePage(connect(mapStateToProps, { clearCart })(Checkout));
