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
import InputText from '../components/general/InputText';
import ButtonApp from '../components/general/ButtonApp';
import MenuCalendar from '../components/menu/MenuCalendar';
import MenuItem from '../components/menu/MenuItem';
import CartDetail from '../components/checkout/CartDetail';
import CreditCardForm from '../components/common/CreditCardForm';
import AddressForm from '../components/user/AddressForm';
import AddressList from '../components/user/AddressList';
import ModalAddress from '../components/general/ModalAddress';
import ModalCreditCard from '../components/general/ModalCreditCard';
import Confirmation from '../components/checkout/Confirmation';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AlertModalApp from '../components/general/AlertModalApp';

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
    this.setState({ isSendingOrder: true });
    const { userAddressId, creditCardId } = this.state;
    const { data } = this.props.cart;
    const order = {
      userAddressId,
      creditCardId,
      orderDetails: data,
    }
    const response = await api.orders.create(order);
    if(response.ok) {
      this.setState({ confirmation: true, isSendingOrder: false }, () => {
        this.props.clearCart();
      });
    } else {
      const { details } = response.err;
      console.log("Respuesta de error payment--->",  details[0].message);
      this.setState({ paymentError:  details[0].message, alertShow: true, isSendingOrder: false });
    }
  }

  confirm = () => {
    this.setState({ confirmation: false }, () => {
      Router.push('/menu');
    })
  }

  afterSave = async () => {
    const creditCards = await api.creditCard.getAll();
    console.log("Tarjetas guardadas---->", creditCards);
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

  onModalClose = () => {
    this.setState({ showAddress: false });
  }

  render() {
    const { step, address, addressFormHidden, userAddressId, creditCards, loadingPage } = this.state;

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
                  </div>

                  <div className="container-step container-box">
                    <div className="title">Horario de entrega</div>
                    <div className="lbl-deliveryTime">12:30pm - 1:30pm</div>
                    <p className="lbl-notes">*Actualmente solo contamos con este horario de entrega</p>
                  </div>

                </div>
              </div>

              <CartDetail sendOrder={this.sendOrder} disabled={!this.state.creditCardId || !this.state.userAddressId} loading={this.state.isSendingOrder}/>
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