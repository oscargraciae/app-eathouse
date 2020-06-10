import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import securePage from '../hocs/page';
import api from '../api';
import { addToCart, clearCart } from '../actions/cart';
import { formatDateString, getDateSumDays } from '../utils/formatDate';

import Layout from '../components/common/Layout';
import MenuCalendar from '../components/menu/MenuCalendar';
import MenuItem from '../components/menu/MenuItem';
import MenuIMobileItem from '../components/menu/MenuIMobileItem';
import Cart from '../components/general/Cart';

class Store extends React.Component {
  static async getInitialProps({ query }) {
    const [products, data] = await Promise.all([
      api.product.getAll(query.id),
      api.store.get(query.id),
    ]);
    return {
      products,
      data,
      id: query.id,
    };
  }

  state = {
    deliveryDate: '',
    isLater: false,
    dateString: '',
  }

  componentDidMount() {
    const currentTime = formatDateString(new Date(Date.now()), 'HH:mm');

    if(currentTime > "11:00") {
      let newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 1);
      let date = moment(new Date(newDate), "MM-DD-YYYY", "es").locale("mx");
      if(date.day() === 6) {
        newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 3);
      } else if(date.day() === 0) {
        newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 2);
      }

      let dateS = moment(new Date(newDate), "MM-DD-YYYY", "es").locale("mx");
      const weekDayName = dateS.format('dddd');
      const weekDayNumber = dateS.format('DD');
      this.setState({ deliveryDate: newDate, dateString: `${weekDayName} ${weekDayNumber}` });
      // if(currentTime < "14:00") {
      //   this.setState({ isLater: true });
      // }
    } else {
      const newDate = formatDateString(new Date(Date.now()), 'YYYY/MM/DD');
      // const weekDayName = newDate.format('ddd');
      // const weekDayNumber = newDate.format('DD');

      this.setState({ deliveryDate: newDate, isLater: false });
    }
  }

  componentWillUnmount() {
    this.props.clearCart();
  }

  changeDay = (deliveryDate) => {
    const newDate =  formatDateString(deliveryDate, 'YYYY/MM/DD');
    this.setState({ deliveryDate: newDate });

  }

  addCart = (dish, quantity, productPrice) => {
    const { deliveryDate } = this.state;

    this.props.addToCart(dish, quantity, deliveryDate, productPrice, this.props.id);
  }

  render() {
    const { products } = this.props;
    let total = 0;
    let subtotal = 0;
    let discount = 0;
    this.props.cart.data.map((item, i) => {
      subtotal = subtotal + item.total;
    });

    total = subtotal - discount;
    return (
      <Layout {...this.props}>
        <div>
        { this.state.deliveryDate && <MenuCalendar changeDay={this.changeDay} deliveryDate={this.state.deliveryDate} /> }
          <div className="fluid-container">
            <div>
              <h2>{this.props.data.name}</h2>
            </div>
            <div className="menu">

              <div className="">
                <div>
                  <h2 className="title-category" id="products">Productos Principales</h2>
                </div>
                <div className="menu-items">
                  { products.map((item, index) => {
                    return (
                      <MenuItem {...item} addCart={this.addCart} deliveryDate={this.state.deliveryDate} key={index} />
                    )
                  }) }
                </div>
              </div>


              { total > 0 &&
                <div className="btnContainerMobile">
                  {/* <div className="line-item">
                    <dt className="lbl-subtotal">Subtotal</dt><dd className="lbl-subtotal">${subtotal}</dd>
                  </div> */}
                  {/* { this.props.user.bussinesId &&
                    <div className="line-item">
                      <dt className="lbl-subtotal">Descuento</dt><dd className="lbl-subtotal">${discount}</dd>
                    </div>
                  } */}
                  <a id="btnMobileMenuCart" href={`/checkout/${this.props.id}`} className="btn btn-primary btn-large btn-block">VER CARRITO ${total}</a>
                </div>
              }

            {/* <section className="container-apps">
            <div className="row info-phones">
              <div className="col-md-4 text-center hide-item">
                <img src="static/android-device.png" height="250" />
              </div>
              <div className="col-md-6">
                <h3>Descarga eathouse en tu celular</h3>
                <p>Descargue nuestra aplicación móvil para hacer tu orden más fácil y más rápido.</p>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.eathouse" className="btn-app btnDownloadAndroid">
                  <img src="/static/google-play-badge.png" className="android-phone" />
                </a>
                <a href="https://itunes.apple.com/us/app/eathouse/id1422515511?mt=8" className="btn-app">
                  <img src="/static/app_store_badge.svg" className="ios-phone" />
                </a>
              </div>
              <div className="col-md-3 hide-item">
                <img src="static/eathouse-phone.png" height="250" />
              </div>
            </div>
          </section> */}
            </div>
            <Cart user={this.props.user} {...this.props} />
          </div>
        </div>

        <style jsx>{`
          .menu {
            margin: 20px 0px;
            width: calc(100% - 300px) !important;
          }

          .menu-items {
            /* padding-top: 16px; */
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            -webkit-box-pack: justify;
            justify-content: space-between;
          }

          .warningCont {
            background: red !important;
          }

          .fluid-container {
            padding-left: 1.8rem;
            padding-right: 1.8rem;
          }

          .btnContainerMobile {
            display: none;
            background: #FFF;
            padding: 10px;
            border-radius: 3px;
            border: 1px solid #DDD;
          }

          .alertMenu {
            font-size: 15px;
            font-weight: 400;
            color: #FFFFFF;
            background: #3BCF75;
            padding: 16px;
            text-align: left;
            margin-top: 4px;
          }

          .alertMenu > p {
            width: 100%;
            margin: 0px;
            padding: 0px;
          }

          .uppercase {
            text-transform: uppercase;
          }

          .title-category {
            font-size: 18px;
            padding: 0px 0px;
            margin-top: 0;
            margin: 0 0 0px;
            color: #2D3138;
            font-weight: 600;
            line-height: 34px;
            text-transform: uppercase;
            /* border-bottom: 1px solid #DDD; */
            font-family: "BentonSans",Helvetica,Arial,sans-serif;
          }

          .containerCategories {
            padding: 10px;
            border-bottom: 1px solid rgba(217,219,224,0.5);

            position: sticky !important;
            right: 0;
            top: 150px;
            padding-top: 10px;
            z-index: 2;
            background: #FFF;
          }

          .containerCategories > ul {
            padding: 0px;
            margin: 0px;
            display: inline;
          }

          .containerCategories > ul > li {
            display: inline;
            margin: 0px 14px;
          }

          .containerCategories > ul > li > a {
            padding: 10px;
            text-transform: uppercase;
            color: #2D3138;
            font-size: 12px;
          }

          .android-phone {
            float: left;
            width: 170px;
            margin: 0;
            padding: 0;
            position: relative;
            left: -4px;
          }

          .ios-phone {
            float: left;
            /* width: 178px; */
            width: 160px;
            position: relative;
            left: 8px;
            top: 10px;
          }

          .info-phones {
            align-items: center;
            justify-content: center;
            flex: 1;
            display: flex;
            margin-top: 40px;
          }

          .container-apps {
            background: white;
          }

          @media (max-width: 600px) {
            .menu {
              margin: 20px 0px;
              width: 100% !important;
            }

            .btnContainerMobile {
              position: sticky;
              bottom: 0;
              z-index: 100;
              display: block;
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

            .lbl-total {
              font-size: 14px;
            }

            .lbl-subtotal {
              font-size: 12px;
              font-weight: 300;
            }

            .hide-item {
              display: none;
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

export default securePage(connect(mapStateToProps, { addToCart, clearCart })(Store));
