import React from 'react';

import { moneyThousand } from '../../utils/formatNumber';
import { formatDate } from '../../utils/formatDate';
import { Button } from '@chakra-ui/react';

function TableOrders(props) {
  const { data } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#Orden</th>
          <th className="mobile-hide">Tienda</th>
          <th>Fecha de compra</th>
          <th>Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        { data.map((item) => (
          <tr key={item.id}>
            <td>
              <div className="tdServiceData">
                <div className="serviceDescriptionData">
                  <div className="">
                    #
                    {item.id}
                  </div>
                </div>
              </div>
            </td>
            <td className="mobile-hide">{item.store.name}</td>
            <td>{formatDate(item.createdAt)}</td>
            <td>
              $
              {moneyThousand(item.total)}
              MX
            </td>
            <td>
              <Button bg="brand.400" color="#FFF" onClick={() => props.detailClick(item.id)}>
                Ver detalle
              </Button>
            </td>
          </tr>
        )) }

      </tbody>
      <style jsx>
        {`
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
      `}
      </style>
    </table>
  );
}

export default TableOrders;
