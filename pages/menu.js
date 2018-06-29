import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import securePage from '../hocs/page';
import api from '../api';
import { addToCart } from '../actions/cart';
import { formatDateString, getDateSumDays } from '../utils/formatDate';

import Layout from '../components/common/Layout';
import MenuCalendar from '../components/menu/MenuCalendar';
import MenuItem from '../components/menu/MenuItem';
import Cart from '../components/general/Cart';

class Menu extends React.Component {
  static async getInitialProps({ query }) { 
    const dishes = await api.dish.getAll();
    return {
      dishes,
      id: 2,
    };
  }

  state = {
    deliveryDate: '',
    isTime: false,
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

      this.setState({ deliveryDate: newDate, isTime: false });
    } else {
      const newDate = formatDateString(new Date(Date.now()), 'YYYY/MM/DD');
      this.setState({ deliveryDate: newDate, isTime: true });
    }
  }

  changeDay = (deliveryDate) => {
    const newDate =  formatDateString(deliveryDate, 'YYYY/MM/DD');
    this.setState({ deliveryDate: newDate });

  }

  addCart = (dish, quantity) => {
    const { deliveryDate } = this.state;
    this.props.addToCart(dish, quantity, deliveryDate);
  }

  render() {
    const dishes = this.props.dishes;
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

          

        `}</style>
      </Layout>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   }
// }

export default securePage(connect(null, { addToCart })(Menu));