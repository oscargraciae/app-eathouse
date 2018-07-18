import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import defaultPage  from '../hocs/defaultPage';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';
import api from '../api';
import { addToCart } from '../actions/cart';
import { formatDateString, getDateSumDays } from '../utils/formatDate';

import Layout from '../components/common/Layout';
import MenuCalendar from '../components/menu/MenuCalendar';
import MenuItem from '../components/menu-public/MenuItem';
import Cart from '../components/general/Cart';

class MenuPublic extends React.Component {
  static async getInitialProps(context) {
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    if(loggedUser) {
      redirect('/menu', context);
      return {};
    }
    return {
      id: 2,
    };
  }

  state = {
    dishes: [],
    deliveryDate: '',
    isTime: false,
  }

  componentDidMount() {
    this.initialFetch();
    const currentTime = formatDateString(new Date(Date.now()), 'HH:mm');

    if(currentTime > "11:00") {
      let newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 1);
      let date = moment(new Date(newDate), "MM-DD-YYYY", "es").locale("mx");
      if(date.day() === 6) {
        newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 3);
      } else if(date.day() === 0) {
        newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 2);
      }

      this.setState({ deliveryDate: newDate, isTime: false });
    } else {
      const newDate = formatDateString(new Date(Date.now()), 'YYYY/MM/DD');
      this.setState({ deliveryDate: newDate, isTime: true });
    }
  }

  async initialFetch() {
    const dishes = await api.dish.getAll();
    this.setState({ dishes });
  }

  changeDay = (deliveryDate) => {
    const newDate =  formatDateString(deliveryDate, 'YYYY/MM/DD');
    this.setState({ deliveryDate: newDate });

  }

  render() {
    const { dishes } = this.state;
    return (
      <Layout {...this.props}>
        <div>
          { this.state.deliveryDate && <MenuCalendar changeDay={this.changeDay} deliveryDate={this.state.deliveryDate} /> }
          <div className="fluid-container">
            <div className="menu">
              { !this.state.isTime &&
                <div className="alert alert-success">
                  <p><strong>Aviso</strong></p>
                  <p>Los pedidos que son para el día de hoy se tienen que ordenar antes de las 11:00am. No olvides programar tus platillos para la semana.</p>
                </div>
              }
              <div className="row">
                { dishes.map((item) => {
                  return (
                    <MenuItem {...item} addCart={this.addCart} deliveryDate={this.state.deliveryDate} key={item.id} />
                  )
                }) }
              </div>
            </div>
            <Cart />
          </div>
        </div>

        <style jsx>{`
          .menu {
            margin: 20px 0px;
            width: calc(100% - 300px) !important;
          }

          .fluid-container {
            padding-left: 1.8rem;
            padding-right: 1.8rem;
          }

          .btnContainerMobile {
            display: none;
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

          }

        `}</style>
      </Layout>
    )
  }
}

export default defaultPage(MenuPublic);