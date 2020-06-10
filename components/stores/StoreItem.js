import React from 'react';
import generateName from '../../utils/generateName';

const StoreItem = ({ id, name, description, cover }) => {
  return (
    <div className="menu-item">
      {/* <a href={`/store/${generateName(name)}/${id}`} className="menu-item-details"> */}
        <div className="menu-item-details">
          <div className="menu-item-image">
            <div className="store-logo" style={{ backgroundImage: `url(${cover})` }} />
          </div>
          <div className="menu-item-description">
            <div className="menu-item-name-link" >
              <span className="text">{name}</span>
            </div>
            {/* <div>
              {description && description.substr(0, 100)}...
            </div> */}
            <div>
              <br />
              <a className="btn btn-primary btn-block" href={`/store/${generateName(name)}/${id}`}>
                Ir a la tienda
              </a>
            </div>
          </div>
        </div>
      {/* </a> */}

      <style global jsx>{`
        .menu-item {
          display: flex;
          cursor: pointer;
          width: 24%;
          margin: 8px 5px;
          padding: 0px;
          border: 1px solid rgba(217,219,224,0.5);
          border-radius: 3px;
          background: #FFFFFF;
        }

        .menu-item-details {
          display: flex;
          flex-direction: column;
          width: 100%;
          border-radius: 3px;
          /* border: 1px solid rgba(217,219,224,0.5); */

          color: #333;
        }

        .menu-item-details:hover {
          color: #333;
          text-decoration: none;
        }

        .menu-item-image {
          display: flex;
          justify-content: center;
          width: 100%;
          /* height: 180px; */
          height: 15rem;
        }

        .store-logo {
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          margin-bottom: 16px;
          width: 100%;
          cursor: pointer;
      }
        }

        .menu-item-description {
          display: flex;
          flex-direction: column;
          padding: 28px 14px;
        }


        .menu-item-name-link {
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-style: normal;
          letter-spacing: 0.5px;
          margin-left: 0px;
          margin-right: 16px;
          /* font-size: 16px; */
          font-size: 1.92rem;
          line-height: 1.3em;
          letter-spacing: 0;
          color: rgb(45, 49, 56);
          overflow: visible;
          text-overflow: ellipsis;
          display: block;
          padding: 5px 0;
        }

        @media (max-width: 600px) {
          .menu-item {
            width: 100%;
          }

          .menu-item-name-link {


          }

          .menu-item-description {

          }
        }
      `}</style>
    </div>
  )
};

export default StoreItem;
