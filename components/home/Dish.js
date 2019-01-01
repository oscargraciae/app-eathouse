import React from 'react';
import { connect } from 'react-redux';

import { toMoney, thousandSpace } from '../../utils/formatNumber';

class Dish extends React.Component {
  render() {
    return (
      <div className="col-md-3 col-xs-6 menu-item">
        <div className="menu-item-photo" style={{ backgroundImage: `url(${this.props.image})` }} />
        <div className="flag">${this.props.price}</div>
        <div className="menu-item-details">
          <div className="menu-item-description">
            <div className="menu-item-name-link">
              <span className="text">{this.props.name}</span>
            </div>
            {/* <a className="menu-item-name-link" href={`/menu/item/${this.props.id}`}>
              <span className="text">{this.props.name}</span>
            </a> */}
          </div>
        </div>
  
        <style global jsx>{`
          .menu-item-photo {
            background-color: rgba(231,228,218,0.9);
            background-repeat: no-repeat;
            background-size: auto 100%;
            box-sizing: border-box;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-left: 1px solid rgba(217,219,224,0.5);
            border-top: 1px solid rgba(217,219,224,0.5);
            border-right: 1px solid rgba(217,219,224,0.5);
            overflow: hidden;
            display: block;
            padding-top: 100%;
            height: 0;
            width: 100%;
            position: relative;
            z-index: 0;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: moz-none;
            -ms-user-select: none;
            user-select: none;
          }
  
          .menu-item-details {
            display: block;
            position: relative;
            width: 100%;
            background-color: white;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
  
            padding-top: 10px;
          }

          .flag {
            display: inline-block;
            padding: 5px 25px;
            text-aling: center;
            top: 20px;
            left: 10px;
            position: absolute;
            text-align: center;
            vertical-align: middle;
            line-height: 1;
            color: #fff;
            background: #3BCF75;

            font-weight: 400;
            -webkit-box-shadow: 0 5px 30px 0 rgba(0,0,0,.1);
            -moz-box-shadow: 0 5px 30px 0 rgba(0,0,0,.1);
            box-shadow: 0 5px 30px 0 rgba(0,0,0,.1);
            font-size: 21px;
          }
  
          .menu-item-description {
            height: 30px;
          }
  
          .menu-item-name-link {
            font-family: "BentonSans", Helvetica, Arial, sans-serif;
            font-weight: 600;
            font-style: normal;
            letter-spacing: 0.5px;
            margin-left: 16px;
            margin-right: 16px;
            font-size: 16px;
            line-height: 1.3em;
            letter-spacing: 0;
            color: #2D3138;
            overflow: visible;
            text-overflow: ellipsis;
            display: block;
            padding: 10px 0;
          }
  
          .menu-item-actions {
            height: 53px;
            border-top: 1px solid rgba(217,219,224,0.5);
  
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
  
          .menu-item-price {
            font-size: 18px;
            letter-spacing: 0.2px;
  
            color: #79776B;
            float: left;
            border-right: 1px solid rgba(217,219,224,0.5);
            text-align: justify;
            padding-left: 16px;
            padding-right: 16px;
  
            height: 100%;
            display: flex;
            align-items: center;
          }
  
          .menu-item-buttons {
            margin-right: 12px;
            font-size: 16px;
            display: block;
            float: right; 
          }
  
          .add-to-cart {
            border-color: #F27242;
            background-color: white;
            color: #F27242;
            border-width: 2px;
            font-size: 14px;
            text-transform: uppercase;
            overflow: hidden;
            line-height: 25px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100px;
            height: 28px;
            
            visibility: hidden;
            border-radius: 3px;
          }
  
          .add-to-cart:hover {
            background: #F27242;
            color: white;
          }
  
          .button-add-cart-small {
            color: #3BCF75;
            background: 0 0;
            line-height: 33px;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            border: 1px solid #3BCF75;
            padding: 0 20px;
            font-size: 14px;
            margin: 13px 0 15px;
            width: 50;
            z-index: 1;
          }
  
          .button-add-cart-small:hover {
            background: #3BCF75;
            color: white;
          }

          .menu-item:hover .button-add-cart-small, .menu-item:hover .button-add-cart {
            visibility: visible;
          }

          .button-add-cart {
            color: #3BCF75;
            background: 0 0;
            line-height: 33px;
            cursor: pointer;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
            border: 1px solid #3BCF75;
            padding: 0 20px;
            font-size: 14px;
            margin: 13px 0 15px;
            width: 128px;
            z-index: 1;
          }
  
          .button-add-cart:hover {
            background: #3BCF75;
            color: white;
          }

          .lbl-quantity {
            padding: 10px;
          }
  
          .col-md-3 {
            padding: 10px;
          }
        `}</style>
      </div>
    )
  }
}

export default Dish;
