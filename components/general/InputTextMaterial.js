import React from 'react';

export default (props) => {
  return (
    <fieldset>
      <label>{props.label}</label>
      <input type="text" className="input-material" value={props.value} />
      <style jsx>{`
        fieldset {
          width: 100%;
          padding: 0 0px;
          margin-bottom: 10px;
        }

        fieldset > label {
          font-size: 12px;
          display: block;
          color: #42413E;
        }

        .input-material {
          appearance: none;
          width: 100%;
          padding: 15px 10px;
          border: 0;
          border-bottom: 1px solid rgba(217,219,224,0.5);
          font-size: 16px;

          box-sizing: border-box;
          margin: 0;
          padding: 0;


          vertical-align: baseline;
          outline: 0;
        }
      `}</style>
    </fieldset>
  )
}
