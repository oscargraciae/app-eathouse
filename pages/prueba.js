import React from 'react';
import dynamic from 'next/dynamic'

// import MapaPrueba from '../components/MapaPrueba';
const DynamicComponent = dynamic(import('../components/MapaPrueba'));


class Prueba extends React.Component {
  render() {
    return (
      <div className="box">
        <h1>skaskasajsa</h1>

        <DynamicComponent />

        <style jsx>{`
          .box {
            height: 300px;
          }
        `}</style>
      </div>
    )
  }
}

export default Prueba;