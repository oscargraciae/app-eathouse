// import libraries
import React from 'react';

// import libraries
import api from '../api';
import securePage from '../hocs/page';
import { formatDateString } from '../utils/formatDate';

// import componentes
import Layout from '../components/common/Layout';
import OrderDetailItem from '../components/orders/OrderDetailItem';
import ScheduleItem from '../components/schedules/ScheduleItem';

class Schedules extends React.Component {
  static getInitialProps() {
    return 1;
  }

  state = {
    schedules: [],
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const schedules = await api.orders.getSchedules();
    const groupSchedules = this.groupBy(schedules);
    this.setState({ schedules: groupSchedules });
  }

  groupBy(data) {
    let groups = {};
    for (let i = 0; i < data.length; i++) {
      const deliveryDate = data[i].deliveryDate;
      if(!groups[deliveryDate]) {
        groups[deliveryDate] = [];
      }
      groups[deliveryDate].push({ data: data[i] });
    }
    let array = [];
    for (let x in groups) {
      array.push({name: formatDateString(x, "DD/MMMM/YYYY"), data: groups[x]});
      // array.unshift({name: x, data: groups[x]});
    }
    return array;
  }

  render() {
    const { schedules } = this.state;
    return (
      <Layout {...this.props}>
        <div className="container">
          <h2>Mi agenda</h2>
          { schedules.map((item, index) => {
            return (
              <div className="container-box" key={index}>
                <h4>{item.name}</h4>
                <div className="row">
                { item.data.map((e, index) => {
                  return (
                    <div className="col-md-4" key={e.data.id}>
                      <ScheduleItem {...e.data} />
                    </div>
                  )
                }) }
                </div>
              </div>
            )
          }) }
          <style jsx>{`
            h4 {
              color: #777
            }
            
            .item-photo {
              display: table-cell;
              min-width: 45px;
              width: 45px;
              height: 45px;
              background-size: 45px;
              background-position: center center;
              background-repeat: no-repeat;
              margin-right: 12px;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}

export default securePage(Schedules);