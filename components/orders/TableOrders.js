import React from 'react';
import moment from 'moment';
// import { toMoney, thousandSpace } from '../../utils/formatNumber';
import { moneyThousand } from '../../utils/formatNumber';
import { formatDate } from '../../utils/formatDate';

function TableOrders(props) {
  const { data } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#Orden</th>
          <th className="mobile-hide">Tienda</th>
          <th>Fecha de compra</th>
          {/* <th>Estatus</th> */}
          <th>Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        { data.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>
                <div className="tdServiceData">
                  <div className="serviceDescriptionData">
                    <div className="">#{item.id}</div>
                  </div>
                </div>
              </td>
              <td className="mobile-hide">{item.store.name}</td>
              <td>{formatDate(item.createdAt)}</td>
              {/* <td><div className="category">Pendiente</div></td> */}
              <td>${moneyThousand(item.total)}MX</td>
              <td>
                <a onClick={() => props.detailClick(item)} className="btn btn-primary">Ver detalle</a>
              </td>
            </tr>
          )
        }) }

      </tbody>
      <style jsx>{`
        .tdServiceData {
          display: flex;
          align-items: center;
        }

        .title {
          font-size: 18px;
        }

        .category {
          color: #757575;
          font-size: 14px;
        }

        @media (max-width: 600px) {
          .onlyWeb {
            display: none;
          }

          .table > thead > tr > th {
            font-size: 10px;
          }

          .table > tbody > tr > td {
            font-size: 10px;
          }
        }
      `}</style>
    </table>
  )
}

export default TableOrders;
