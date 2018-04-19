import React from 'react';

function LoadingSpinner() {
  return (
    <div className="container-loading">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>

      <style jsx>{`

        .container-loading {
          /* height: 100%; */
          /* position: absolute; */
          /* left: 50%; */
          /* top: 30%; */
          /* margin-left: 2em; */

          height: 100%;
          /* position: relative; */
          left: 50%;
          top: 30%;
          margin-left: 2em;
          width: 100%;
          justify-content: center;
          align-items: center;
          flex: 1;
          display: flex;
      }
        }
        .lds-ring {
          /* display: inline-block; */ 
          /* position: relative; */ 
          /* min-height: 400px; */
          /* left: 50%; */
          /* margin-left: -4em; */

          display: flex;
          min-height: 400px;
          align-items: center;
          justify-content: center;
          padding-right: 60px;
          
        }
        .lds-ring div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: 51px;
          height: 51px;
          margin: 6px;
          border: 6px solid orange;
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: orange transparent transparent transparent;
        }
        .lds-ring div:nth-child(1) {
          animation-delay: -0.45s;
        }
        .lds-ring div:nth-child(2) {
          animation-delay: -0.3s;
        }
        .lds-ring div:nth-child(3) {
          animation-delay: -0.15s;
        }
        @keyframes lds-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
      `}</style>
    </div>
  );
}

export default LoadingSpinner;
