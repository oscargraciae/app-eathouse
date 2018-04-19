import React from 'react';

import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonApp from '../components/general/ButtonApp';

class Profile extends React.Component {

  render() {
    return (
      <Layout>
        <div className="fluid-container">
          <div className="profile">
            <div className="container">
              <div className="profile-info">
                <h3>Oscar Alberto Gracia Espinosa</h3>
                <div className="lbl-info">Suscrición <span className="status">Activa</span></div>
                <div className="lbl-info">Plan <span>5 comidas por semana</span></div>
                <div className="lbl-info">Usuario desde <span>04/10/2017</span></div>
                <hr />
                <p>Tu plan se renovará automáticamente el 25/11/17 y se te cobrará $ 99.00</p>
                <ButtonApp
                  text="Cancelar suscripción"
                  buttonStyle="btn btn-primary btn-large btn-block"
                />
                <hr />
                <h4>Metodo de pago</h4>
                <div className="lbl-info"><span>MC-3478</span> <a>Actualizar metodo de pago</a></div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .profile {
            border-radius: 3px;
            background-color: #fff;
            border: 1px solid #DDD;
            border-top: 0px;
            padding: 10px 20px;
          }

          .profile-info {
            
          }

          .lbl-info {
            font-size: 16px;
            padding: 5px 0px; 
          }

          .lbl-info > span {
            font-weight: bold;
          }

          .status {
            color: #3BCF75 !important;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Profile;