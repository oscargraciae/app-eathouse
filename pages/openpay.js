import React from 'react';

import Layout from '../components/common/Layout';

import securePage from '../hocs/page';
import api from '../api';

class Openpay extends React.Component {

  state = {
    name: '',
    creditCardNumber: '',
    monthEx: '',
    yearEx: '',
    cvv: '',
    token: '',
    isLoading: false,
    errors: {},
    errorMessage: undefined,
  }

  componentDidMount() {
    OpenPay.setId('m7pd5e0tn3gnjzam8jvc');
    OpenPay.setApiKey('pk_a5f3d2220a334034980ba42287bd819e');
    OpenPay.setSandboxMode(true);
    var deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, creditCardNumber, monthEx, yearEx, cvv } = this.state;
    const tokenParams = {
      "card_number": creditCardNumber,
      "holder_name": name,
      "expiration_year": yearEx,
      "expiration_month": monthEx,
      "cvv2": cvv,
    };
    console.log("Guardando.....");

    OpenPay.token.create(tokenParams, (response) => {
      console.log("SUCCESS----->", response);
    }, (response) => {
      console.log("ERROR----->", response);
    });
  }

  render() {
    return (
      <Layout {...this.props}>
        <div>
          <h1>Formulario</h1>
          <form onSubmit={this.onSubmit} autoComplete="off" id="payment-form">
            <input type="hidden" name="token_id" id="token_id" />
            <input type="hidden" name="use_card_points" id="use_card_points" value="false" />
            <div className="pymnt-itm card active">
              <h2>Tarjeta de crédito o débito</h2>
              <div className="pymnt-cntnt">

                <div className="card-expl">
                  <div className="credit"><h4>Tarjetas de crédito</h4></div>
                  <div className="debit"><h4>Tarjetas de débito</h4></div>
                </div>

                <div className="sctn-row">
                  <div className="sctn-col l">
                    <label>Nombre del titular</label>
                    <input type="text" onChange={this.onChange} name="name" placeholder="Como aparece en la tarjeta" autoComplete="off" data-openpay-card="holder_name" />
                  </div>
                  <div className="sctn-col">
                    <label>Número de tarjeta</label>
                    <input type="text" onChange={this.onChange} name="creditCardNumber" autoComplete="off" data-openpay-card="card_number" />
                  </div>
                </div>


                <div className="sctn-row">
                  <div className="sctn-col l">
                    <label>Fecha de expiración</label>
                    <div className="sctn-col half l">
                      <input type="text" onChange={this.onChange} name="monthEx" placeholder="Mes" data-openpay-card="expiration_month" />
                    </div>
                    <div className="sctn-col half l">
                      <input type="text" onChange={this.onChange} name="yearEx" placeholder="Año" data-openpay-card="expiration_year" />
                    </div>
                  </div>
                  <div className="sctn-col cvv"><label>Código de seguridad</label>
                    <div className="sctn-col half l">
                      <input type="text" onChange={this.onChange} name="cvv" placeholder="3 dígitos" autoComplete="off" data-openpay-card="cvv2" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="sctn-row">
                <button type="submit">Guardar</button>
              </div>

            </div>
          </form>
        </div>
      </Layout>
    )
  }
}

export default Openpay;
