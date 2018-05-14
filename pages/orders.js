// import libraries
import React from 'react';
import { Modal } from 'react-bootstrap';

// import local libraries
import securePage from '../hocs/page';
import api from '../api';

// import componentes
import Layout from '../components/common/Layout';
import TableOrders from '../components/orders/TableOrders';
import ModalDetail from '../components/orders/ModalDetail';
import LoadingSpinner from '../components/common/LoadingSpinner';

class Orders extends React.Component {
  static getInitialProps() {
    return 1;
  }

  state = {
    orders: null,
    orderDetail: null,
    openModalDetail: false,
  }

  componentDidMount() {
    this.initialFetch(); 
  }

  async initialFetch() {
    const orders = await api.orders.getAll();
    this.setState({ orders });
  }

  onToggleModalDetail = () => {
    console.log("Cerrando modal----");
    this.setState({ openModalDetail: !this.state.openModalDetail });
  }

  detailClick = async (item) => {
    const response = await api.orders.getDetail(item.id);
    const orderDetail = {
      info: item,
      items: response
    };
    this.setState({ openModalDetail: true, orderDetail });
  }

  render() {
    const { orders, openModalDetail, orderDetail } = this.state;
    return (
      <Layout {...this.props}>
        { orderDetail && <ModalDetail show={openModalDetail} order={orderDetail} onToggle={this.onToggleModalDetail} /> }
        <div className="container">
          <h2>Mis ordenes</h2>
          <div className="container-box">
            { orders ? <TableOrders data={orders} detailClick={this.detailClick} /> : <LoadingSpinner /> }
          </div>
        </div>
      </Layout>
    )
  }
}

export default securePage(Orders);