import React from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';

function InputTextFormat({ name, value, label, error, onValueChange, format }) {
  return (
    <div className="controls controls-small">
      <NumberFormat
        value={value}
        onValueChange={onValueChange}
        name={name}
        placeholder={label}
        className="input control-input"
        format={format}
      />
    { error && <span className="lbl lbl-danger">{error}</span> }

      <style jsx>{`
        .input {
            -moz-border-radius: 2px;
            -webkit-border-radius: 2px;
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid #c4c4c4;
            color: #565a5c;
            padding: 12px 10px;
            width: 100%;
            font-size: 14px;
        }

        .control-input{
          border: 1px solid #ccc;
        }

        .input-root{
          margin-bottom: 18px;
          vertical-align: top;
        }

        .input-label{
          color: #2e343b;
          float: left;
          font-weight: bold;
          margin-bottom: 7px;
        }

        .lbl {
          padding-left: 3px;
          margin-top: 3px;
          color: #B31E0B;
        }

        .input-margin-left{
          margin-left: 12px;
        }

        .input-form{
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 3px;
          box-sizing: border-box;
          color: #2e343b;
          display: block;
          outline: none;
          padding: 10px 12px 11px;
          -webkit-transition: .2s;
          transition: .2s;
          width: 100%;
          height: 42px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }

        .controls {
          padding: 10px 0px;
          position: relative;
          width: 100%;
        }

        .controls-small {
          padding: 5px 0;
        }
      `}</style>
    </div>
  );
}

InputTextFormat.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  focus: PropTypes.bool,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputTextFormat.defaultProps = {
  type: 'text',
  focus: false,
};

export default InputTextFormat;
