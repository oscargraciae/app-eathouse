// import libraries
import React from 'react';

// import components
import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';

// import local librarie
import securePage from '../hocs/page';
import api from '../api';

class PaymentSuscription extends React.Component {
  static async getInitialProps({ query }) {
    const suscription = await api.suscriptions.get(query.id);
    return {
      suscription,
    };
  }

  constructor() {
    super();

    this.state = {
      id: 1,
      name: '',
      numberCard: '',
      expirationDate: '',
      securityCode: '',
      errors: {},
      suscription: {},
    }
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    const { errors } = this.state;
    const { suscription } = this.props;
    return (
      <Layout>
        <div className="container">
          <div className="text-center">
            <h2>Confirmación y método de pago</h2>
            <h4>Plan <strong>{suscription.name}</strong> ${suscription.price}MX.</h4>
          </div>
          <div className="container-box">
            <h4>Metodo de pago</h4>
            <div>
              <form className="signupForm" onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <label>Nombre del tarjetahabiente</label>
                    <InputText
                      error={errors.name}
                      value={this.state.name}
                      onChange={this.onChange}
                      type="text"
                      name="name"
                      label=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Número de tarjeta de crédito/débito</label>
                    <InputText
                      error={errors.numberCard}
                      value={this.state.numberCard}
                      onChange={this.onChange}
                      type="text"
                      name="numberCard"
                      label=""
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Fecha de expiración</label>
                    <InputText
                      error={errors.numberCard}
                      value={this.state.numberCard}
                      onChange={this.onChange}
                      type="text"
                      name="date"
                      label=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Codigo de seguridad</label>
                    <InputText
                      error={errors.numberCard}
                      value={this.state.numberCard}
                      onChange={this.onChange}
                      type="text"
                      name="code"
                      label=""
                    />
                  </div>
                </div>

                <div className="formFooter">
                  <ul>
                    <li>
                      <p>Entiendo que mi suscripción hará los cobros automáticos cada semana.</p>
                    </li>
                    <li>
                      <p>Entiendo que puedo suspender mi suscripción cuando quiera.</p>
                    </li>
                  </ul>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <ButtonBlock
                      text="Comenzar"
                      buttonStyle="btn btn-primary btn-large btn-block"
                      loading={this.state.isLoading}
                    />
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <style jsx>{`
          .container-box{
            border-radius: 3px;
            max-width: 800px;
            margin: 40px auto;
            background-color: #fff;
            padding: 24px;
            border: 1px solid #DDD;
          }

          .row {
            padding: 10px 0px;
          }

          .formFooter {
            padding: 10px 0;
          }
        `}</style>
      </Layout>
    )
  }
}

export default securePage(PaymentSuscription);