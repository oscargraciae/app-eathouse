import React from 'react';

function AlertBox(props) {
  return (
    <div>
      <div className="alert-box alert-box-inline">
        {props.message}
      </div>
      <style jsx>{`
        .alert-box {
          background-color: #dff7f8;
          color: #494949;
          font-size: 12px;
          padding: 16px 15px 16px 24px;
          border-radius: 0px;
          position: relative;
          margin-bottom: 10px;
        }

        .alert-box-inline {
          background-color: #FEEFEB;
          border-bottom: solid 4px #CA3B27;
        }
      `}</style>
    </div>
  )
}

export default AlertBox;