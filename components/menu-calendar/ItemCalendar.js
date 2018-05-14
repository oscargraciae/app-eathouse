import React from 'react';
import moment from 'moment';

function ItemCalendar(props) {
  let date = moment(props.date, "MM-DD-YYYY", "es").locale("mx");
  let selectedDay =  moment(props.selectedDate, "MM-DD-YYYY", "es").locale("mx").format('DD');
  const day = date.day();

  let completeDate = date.format('DD/MM/YYYY');
  let weekDayName = date.format('ddd');
  let weekDayNumber = date.format('DD');

  // console.log("dia de la semana :"+date.day());
  // console.log("mes:"+date.month());
  // console.log("año:"+date.year());
  // console.log("Fecha con localización :"+ date.format("DD MMMM YYYY"));
  // console.log("Fechsssss", date);

  // console.log("Día de la semana", weekDayName, weekDayNumber);
  // console.log(selectedDay, weekDayNumber);
  return (
    <div className={(day === 6 || day === 0) ? 'disabled' : ''}>
      <div className={selectedDay === weekDayNumber ? 'dayItem selected' : 'dayItem'} onClick={() => props.changeDate(props.date)}>
        <span className="dayName">{weekDayName}</span>
        <span>{weekDayNumber}</span>
      </div>
        <style jsx>{`
          .dayItem {
            padding: 10px 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: "BentonSans", Helvetica, Arial, sans-serif;
            font-weight: 400;
            color: #79776B;
          }

          .dayItem:hover {
            color: #FF7901;
            cursor: pointer;
          }

          .dayName {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 600;
          }

          .selected {
            border-bottom: 2px solid #3BCF75;
            color: #3BCF75;
          }

          .disabled {
            color: red !important;
          }

          .disabled .dayItem {
            color: #dadae1 !important;
            pointer-events: none;
          }
        `}</style>
    </div>
  )
}

export default ItemCalendar;