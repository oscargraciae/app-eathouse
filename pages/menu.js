import React from 'react';
import { connect } from 'react-redux';

import securePage from '../hocs/page';
import api from '../api';
import { addToCart } from '../actions/cart';
import { formatDateString } from '../utils/formatDate';
// import { connect } from 'react-'

import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';
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
  }

  componentDidMount() {
    const newDate =  formatDateString(new Date(Date.now()), 'YYYY/MM/DD');
    this.setState({ deliveryDate: newDate });
  }

  changeDay = (deliveryDate) => {
    console.log("Fecha seleccionada!!--->", deliveryDate);
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
          <MenuCalendar changeDay={this.changeDay} />
          <div className="fluid-container">
            <div className="menu">
              <div className="row">
                { dishes.map((item) => {
                  return (
                    <MenuItem {...item} addCart={this.addCart} key={item.id} />
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