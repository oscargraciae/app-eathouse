// import libraries
import React from 'react';

// import local libraries
import { formatDateString } from '../../utils/formatDate';

// import components
import ItemCalendar from '../menu-calendar/ItemCalendar';

class MenuCalendar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      datesWeek: [],
      // selectedDate: new Date(Date.now()),
      selectedDate: new Date(props.deliveryDate),
    }
  }

  componentWillMount() {
    let curr = new Date;
    let dates = [];
    let day = 0;
    while (day <= 12) {
      let nextDate = new Date(curr);
      nextDate.setDate(curr.getDate()+day);
      dates.push(nextDate);
      day++;
    }

    this.setState({ datesWeek: dates });
  }

  changeDate = (date) => {
    this.setState({ selectedDate: date}, () => {
      this.props.changeDay(this.state.selectedDate);
    });
  }

  render() {
    const { datesWeek, selectedDate } = this.state;
    return (
      <div className="containerCalendar col-fixed">
        <div className="titleCalendar">Selecciona el día de entrega</div>
        <div className="menuCalendar">
          <div className="menuDays">
            { datesWeek.map((item, key) => {
              return (
                <ItemCalendar selectedDate={selectedDate} date={item} key={key} changeDate={this.changeDate} />
              )
            }) }
          </div>
        </div>
        <style jsx>{`
          .containerCalendar {
            background: #FFF;
            position: sticky !important;
            z-index: 2;
          }

          .menuCalendar {
            background: #FFF;
            border-bottom: 1px solid rgba(217,219,224,0.5);
            height: 70px;
            margin-right: 250px;

            display: flex;
            justify-content: center;
            align-items: center;

          }

          .menuDays {
            display: flex;
          }

          .titleCalendar {
            background: #FFF;
            margin-right: 250px;
            padding-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            color: #2D3138;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 600;
          }

          .col-fixed {
            position: sticky !important;
            right: 0;
            top: 50px;
            padding-top: 0px;
          }

          @media (max-width: 600px) {
            .titleCalendar {
              margin-right: 0px;
            }

            .menuCalendar {
              margin-right: 0px;
              overflow: auto;
              justify-content: end;
            }
          }

        `}</style>
      </div>
    )
  }
}

export default MenuCalendar;
