import React from 'react';

import Layout from '../components/common/Layout';
import ButtonBlock from '../components/general/ButtonBlock';

class Suscriptions extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container container-margin-top">
          <h2 className="text-center">Elige tu plan</h2>
          <div className="suscriptions row text-center">
            <div className="col-md-4">
              <div className="suscriptionBox">
                <h4>SIN COMPROMISO</h4>
                <div className="suscriptionsPrice">
                  $0
                </div>
                <ButtonBlock
                  text="Seleccionar"
                  buttonStyle="btn btn-primary btn-large btn-block"
                />
                <hr/>
                <p className="text-left">Este plan no cobrara suscripción y se podrán solicitar las comidas cada vez que tu las necesites al precio regular.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="suscriptionBox">
                <h4>3 COMIDAS POR SEMANA</h4>
                <div className="suscriptionsPrice">
                  $199
                </div>
                <ButtonBlock
                  text="Seleccionar"
                  buttonStyle="btn btn-primary btn-large btn-block"
                />
                <hr/>
                <p className="text-left">Este plan no cobrara suscripción y se podrán solicitar las comidas cada vez que tu las necesites al precio regular.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="suscriptionBox">
                <h4>5 COMIDAS POR SEMANA</h4>
                <div className="suscriptionsPrice">
                  $299
                </div>
                <ButtonBlock
                  text="Seleccionar"
                  buttonStyle="btn btn-primary btn-large btn-block"
                />
                <hr/>
                <p className="text-left">Este plan no cobrara suscripción y se podrán solicitar las comidas cada vez que tu las necesites al precio regular.</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .suscriptions {
            padding: 20px;
            margin-bottom: 60px;
          }

          .suscriptionBox {
            border: 1px solid #EEE;
            border-radius: 3px;
            padding: 20px 40px;
            background: #FFF;
          }

          .suscriptionBox > h4 {
            font-family: "BentonSans", Helvetica, Arial, sans-serif;
            font-weight: 600;
            font-style: normal;
            letter-spacing: 0.5px;
            color: #515252;
            font-size: 14px;
            text-transform: uppercase;
            line-height: normal;
            letter-spacing: 1px;
            cursor: pointer;
          }

          .suscriptionsPrice {
            font-size: 68px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Suscriptions;