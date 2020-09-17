import React from 'react';
import { connect } from 'react-redux';

import api from '../api';
import { addToCart, clearCart } from '../actions/cart';
import { formatDateString } from '../utils/formatDate';

import Layout from '../components/common/Layout';
import MenuItem from '../components/menu/MenuItem';
import Cart from '../components/general/Cart';
import ModalProductDetail from '../components/menu/ModalProductDetail';

class Store extends React.Component {
  static async getInitialProps({ query }) {
    return {
      id: query.id,
    };
  }

  async initialFetch() {
    const [products, data] = await Promise.all([
      api.product.getAll(this.props.pageProps.id),
      api.store.get(this.props.pageProps.id),
    ]);
    this.setState({ store: data, products });
  }

  state = {
    deliveryDate: '',
    isLater: false,
    dateString: '',
    productSelected: null,
    showModalProduct: false,

    store: {},
    products: [],
  }

  componentDidMount() {
    this.initialFetch();

    // const currentTime = formatDateString(new Date(Date.now()), 'HH:mm');

    // if(currentTime > "11:00") {
    //   let newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 1);
    //   let date = moment(new Date(newDate), "MM-DD-YYYY", "es").locale("mx");
    //   if(date.day() === 6) {
    //     newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 3);
    //   } else if(date.day() === 0) {
    //     newDate = getDateSumDays(new Date(Date.now()), 'YYYY/MM/DD', 2);
    //   }

    //   let dateS = moment(new Date(newDate), "MM-DD-YYYY", "es").locale("mx");
    //   const weekDayName = dateS.format('dddd');
    //   const weekDayNumber = dateS.format('DD');
    //   this.setState({ deliveryDate: newDate, dateString: `${weekDayName} ${weekDayNumber}` });
    //   // if(currentTime < "14:00") {
    //   //   this.setState({ isLater: true });
    //   // }
    // } else {
    //   const newDate = formatDateString(new Date(Date.now()), 'YYYY/MM/DD');
    //   this.setState({ deliveryDate: newDate, isLater: false });
    // }

      const newDate = formatDateString(new Date(Date.now()), 'YYYY/MM/DD');
      this.setState({ deliveryDate: newDate, isLater: false });
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

    this.props.addToCart(dish, quantity, deliveryDate, productPrice, this.props.pageProps.id);
  }

  selectDetailProduct = (product) => {
    this.setState({ productSelected: product, showModalProduct: true });
  }

  handleCloseModal = () => {
    this.setState({ showModalProduct: false, productSelected: null });
  }

  render() {
    const categories = this.state.products;
    let total = 0;
    let subtotal = 0;
    let discount = 0;
    this.props.cart.data.map((item, i) => {
      subtotal = subtotal + item.total;
    });

    total = subtotal - discount;
    return (
      <Layout {...this.props}>
        { (this.state.productSelected && this.state.showModalProduct) &&
          <ModalProductDetail product={this.state.productSelected} onHide={this.handleCloseModal} />
        }
        <div>
        {/* { this.state.deliveryDate && <MenuCalendar changeDay={this.changeDay} deliveryDate={this.state.deliveryDate} /> } */}
          <div className="fluid-container">

            <div className="container-info-store">
              <h2>{this.state.store.name}</h2>
              <p ></p>
              <hr />
            </div>

            <div className="menu">
              { categories.map((category) => (
                <div key={category.id} className="products-row">
                  <div>
                  <h2 className="title-category" id="products">{category.name}</h2>
                  </div>
                  <div className="menu-items">
                    { category.products.map((item, index) => {
                      return (
                        <MenuItem
                          {...item}
                          addCart={this.addCart}
                          deliveryDate={this.state.deliveryDate}
                          key={index}
                          selectDetailProduct={() => this.selectDetailProduct(item)}
                        />
                      )
                    }) }
                  </div>
                </div>
              )) }



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
                  <a id="btnMobileMenuCart" href={`/checkout/${this.props.pageProps.id}`} className="btn btn-primary btn-large btn-block">VER CARRITO ${total}</a>
                </div>
              }
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
            border-bottom: 1px solid #DDD;
            font-family: "BentonSans",Helvetica,Arial,sans-serif;
            padding-top: 32px;
            padding-bottom: 16px;
            margin-bottom: 16px;
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

export default connect(mapStateToProps, { addToCart, clearCart })(Store);
