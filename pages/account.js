import React from 'react';

// import local libraries
import api from '../api';

// import components
import InputTextMaterial from '../components/general/InputTextMaterial';
import Layout from '../components/common/Layout';
import securePage from '../hocs/page';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ButtonApp from '../components/general/Button';

class Account extends React.Component {
  static getInitialProps() {
    return 1;
  }

  state = {
    user: null,
    offersAlert: false,
    remainderAlert: false,
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const user = await api.user.get(this.props.user.id);
    console.log("USER DATA--->", user);
    this.setState({ user, remainderAlert: user.remainderAlert, offersAlert: user.marketing });
  }

  onChangeAlert = (e) => {
    console.log("Event--->", e.target.checked);
    this.setState({ [e.target.name]:  e.target.checked });
  }

  saveAlerts = async () => {
    const alerts = { marketing: this.state.offersAlert, remainderAlert: this.state.remainderAlert };
    const user = await api.user.updateAlerts(alerts);
    console.log("Alerts--<", user);
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return (
        <Layout {...this.props}>
          <LoadingSpinner />
        </Layout>
      )
    }

    return (
      <Layout {...this.props}>
        <div className="container">
          <h2 className="header-title">Ajustes de la cuenta</h2>

          <div className="content-account">
            <h3 className="header-subtitle">Detalles</h3>
            <div className="account-input">
              <InputTextMaterial label="Nombre(s)" value={user.firstName} />
            </div>
            <div className="account-input">
              <InputTextMaterial label="Apellido" value={user.lastName} />
            </div>
            <div className="account-input">
              <InputTextMaterial label="Email" value={user.email} />
            </div>
            <div>
              <ButtonApp
                text="Guardar"
                classStyle="btn btn-primary btn-large btn-block"
                loading={this.state.isLoading}
                paddingVertical={10}
                paddingHorizontal={0}
              />
              </div>
          </div>
          <hr/>
          <div className="content-settings">
            <h3 className="header-subtitle">Notificaciones</h3>
            <div className="account-input">
              <div className="check-alerts">
                <label htmlFor="id_send_offers"><span></span> Dejar de recibir avisos y promociones. </label>
                <input checked={this.state.offersAlert} id="id_send_offers" name="offersAlert" type="checkbox" onChange={this.onChangeAlert} />
              </div>
              <div className="check-pedido">
                <label htmlFor="id_remainder"><span></span> Dejar de recibir el recordatorio diario. </label>
                <input checked={this.state.remainderAlert} id="id_remainder" name="remainderAlert" type="checkbox" onChange={this.onChangeAlert} />
              </div>
              <div>
              <ButtonApp
                text="Guardar"
                classStyle="btn btn-primary btn-large btn-block"
                loading={this.state.isLoading}
                paddingVertical={10}
                paddingHorizontal={0}
                click={this.saveAlerts}
              />
              </div>
            </div>
          </div>


        </div>
        <style jsx>{`
          .content-account {
            margin-top: 10px;
            padding: 10px 0px;
          }

          .content-settings {
            margin-top: 10px;
            padding: 10px 0px;
          }

          .check-alerts {
            margin: 20px 0px;
          }

          .account-input {
            padding: 10px 0px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default securePage(Account);
