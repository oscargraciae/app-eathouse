// import libraries
import React from 'react';

// import local libraries
import { formatDateString } from '../../utils/formatDate';

// import components
import ItemCalendar from '../menu-calendar/ItemCalendar';

class MenuCalendar extends React.Component {

  constructor() {
    super();

    this.state = {
      datesWeek: [],
      selectedDate: new Date(Date.now()),
    }
  }

  componentWillMount() {
    let curr = new Date;
    
    // let currentDay = curr.getDate();
    // let first = curr.getDate() - curr.getDay();
    // let last = first + 6;

    // let firstday = new Date(curr.setDate(first)).toUTCString();
    // let lastday = new Date(curr.setDate(last)).toUTCString();

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
    console.log("Selected Date--->", selectedDate);
    return (
      <div>
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
          .menuCalendar {
            background: #FFF;
            border-bottom: 1px solid #EEE;
            height: 70px;
            margin-right: 250px;

            display: flex;
            justify-content: center;
            align-items: center;

          }

          .menuDays {
            display: flex;
          }

        `}</style>
      </div>
    )
  }
}

export default MenuCalendar;