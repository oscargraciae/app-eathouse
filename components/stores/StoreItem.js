import React from 'react';
import generateName from '../../utils/generateName';

const StoreItem = ({ id, name, description, cover }) => {
  return (
    <div className="menu-item">
      <a href={`/store/${generateName(name)}/${id}`} className="menu-item-details">
        <div className="menu-item-details">
          <div className="menu-item-image">
            {/* <img className="store-logo" src="https://images.rappi.com.mx/marketplace/vinoteca_liquor-1556649682.png?d=300x300&e=webp" /> */}
            {/* <div className="store-logo" style={{ backgroundImage: `url(https://images.rappi.com.mx/marketplace/vinoteca_liquor-1556649682.png?d=300x300&e=webp)` }} /> */}
            <div className="store-logo" style={{ backgroundImage: `url(${cover})` }} />
          </div>
          <div className="menu-item-description">
            <div className="menu-item-name-link" >
              <span className="text">{name}</span>
            </div>
            <div>
              {description && description.substr(0, 100)}...
            </div>
          </div>
        </div>
      </a>

      <style global jsx>{`

        .menu-item {
          display: flex;
          cursor: pointer;
          width: 24%;
          /* height: 140px; */
          margin: 8px 5px;
          padding: 0px;
          border: 1px solid rgba(217, 219, 224, 0.5);
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
          /* background-size: contain; */
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
          margin-top: 16px;
          padding: 5px 12px;
          /* border-top: 1px solid rgba(217,219,224,0.5); */
          height: 100px;
        }


        .menu-item-name-link {
          font-family: "BentonSans", Helvetica, Arial, sans-serif;
          font-weight: bold;
          font-style: normal;
          letter-spacing: 0.5px;
          margin-left: 0px;
          margin-right: 16px;
          font-size: 16px;
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
            display: flex;
            cursor: pointer;
            box-sizing: content-box;
            width: 100%;
            height: 150px;
            /* height: 128px; */
            margin: 8px 0px;
            padding: 0px;
            border-width: 1px;
            border-style: solid;
            border-color: rgba(217, 219, 224, 0.5);
            border-image: initial;
          }

          .menu-item-name-link {
            font-size: 12px;
            line-height: 1.3em;
            -webkit-letter-spacing: 0;
            -moz-letter-spacing: 0;
            -ms-letter-spacing: 0;
            letter-spacing: 0;
            color: #2D3138;
            overflow: visible;
            text-overflow: ellipsis;
            display: block;
            padding: 0px 0;
            /* height: 35px; */

          }

          .menu-item-description {
            height: 40px;
          }
        }
      `}</style>
    </div>
  )
};

export default StoreItem;
