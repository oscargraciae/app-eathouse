// import libraries
import React from 'react';

// import local libraries
import api from '../../api';
import validation from '../../validations/credit-card';

// import components
import InputText from '../general/InputText';
import InputTextFormat from '../general/InputTextFormat';
import ButtonBlock from '../general/ButtonBlock';
import LoadingSpinner from '../common/LoadingSpinner';
import AlertBox from '../general/AlertBox';

class CreditCardForm extends React.Component {
  constructor() {
    super();

    this.state = {
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
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ isLoading: true });
      Conekta.setPublicKey("key_JEnHKPz6vGyz5rmzC75F6hg");
      const { name, creditCardNumber, monthEx, yearEx, cvv } = this.state;
      const tokenParams = {
        "card": {
          "number": creditCardNumber,
          "name": name,
          "exp_year": yearEx,
          "exp_month": monthEx,
          "cvc": cvv,
        }
      };

      Conekta.Token.create(tokenParams, async (token) => { // Suceess
        const response = await api.creditCard.create({ token: token.id });
        if(this.props.onToggleModal) {
          this.props.onToggleModal();
          this.props.afterSave();
        }
        this.setState({ isLoading: false });
      }, (error) => { // Error
        console.log("Error al generar el token", error);
        this.setState({ isLoading: false, errorMessage: `Hubo un error al agregar este método de pago. Verifica los datos e inténtalo de nuevo o usa un método de pago distinto: ${error.message_to_purchaser}` });
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validation(this.state);
    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  render() {
    const { errors } = this.state;

    if (this.state.isLoading) {
      return (
        <div>
          <LoadingSpinner />
        </div>
      )
    }

    return (
      <div>
        <form className="credit-card-form" onSubmit={this.onSubmit} autoComplete="off" >          
          <div id="rowFormAddress">
            { this.state.errorMessage && <AlertBox message={this.state.errorMessage} /> }
            <div className="row">
              <div className="col-md-12">
                <label>Nombre como aparece en la tarjeta</label>
                <InputText
                  error={errors.name}
                  value={this.state.name}
                  onChange={this.onChange}
                  type="text"
                  name="name"
                  label=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label>Número de tarjeta</label>
                <InputTextFormat
                  error={errors.creditCardNumber}
                  value={this.state.creditCardNumber}
                  onValueChange={(values) => {
                    const {formattedValue, value} = values;
                    this.setState({creditCardNumber: value})
                  }}
                  name="creditCardNumber"
                  label=""
                  format="#### #### #### ####"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label>Mes de vencimiento</label>
                <InputTextFormat
                  error={errors.monthEx}
                  value={this.state.monthEx}
                  onValueChange={(values) => {
                    const {formattedValue, value} = values;
                    this.setState({monthEx: value})
                  }}
                  name="monthEx"
                  label="MM"
                  format="##"
                />
              </div>
              <div className="col-md-4">
                <label>Año de vencimiento</label>
                <InputTextFormat
                  error={errors.yearEx}
                  value={this.state.yearEx}
                  onValueChange={(values) => {
                    const {formattedValue, value} = values;
                    this.setState({yearEx: value})
                  }}
                  name="yearEx"
                  label="AAAA"
                  format="####"
                />
              </div>
              <div className="col-md-4">
                <label>CVV</label>
                <InputText
                  error={errors.cvv}
                  value={this.state.cvv}
                  onChange={this.onChange}
                  type="text"
                  name="cvv"
                  label=""
                />
              </div>
            </div>

            <div className="row footer-modal-card">
              <div className="col-md-12">
                <ButtonBlock
                  text="Guardar"
                  buttonStyle="btn btn-primary btn-large btn-block"
                  loading={this.state.isLoading}
                />
              </div>
              <div className="col-md-12">
                <ButtonBlock
                  text="Regresar"
                  buttonStyle="btn btn-default btn-large btn-block"
                  loading={this.state.isLoading}
                  click={this.props.onToggleModal}
                />
              </div>
            </div>
          </div>
        </form>
        <style>{`
          label {
            font-size: 12px;
          }

          .credit-card-form {
            padding: 0px 20px;
          }

          .footer-modal-card {
            margin-top: 30px;
          }

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

          .input:disabled {
            background: #dddddd;
          }

          .control-input{
            border: 1px solid #ccc;
          }
          
          .containerButton {
            padding: 10px 0px;
          }

          .geosuggest__suggests--hidden {
            max-height: 0;
            overflow: hidden;
            border-width: 0;
          }

          .suggest {
            border: 1px solid #DDD;
          }

          .suggestItem:hover {
            color: green;
            cursor: pointer;
          }

          .suggestItem {
            padding: 10px;
          }

          .inputCity {
            font-size: 24px;
            width: 100%;
            padding: 0px 10px;
            padding-left: 5px;
            line-height: 35px;
            border: none;
            color: #565a5c;
            border: none;
            border-bottom: 1px solid #DDDDDD !important;
          }

          .inputCity:focus {
            outline: 0px;
            border-bottom: 2px solid #ff1940 !important;
          }

          .form-group {
            display: inline-block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 5rem;
            width: 100%;
          }

          .autocomplete-container {
            border-bottom: honeydew;
            border-left: honeydew;
            border-right: honeydew;
            border-top: 1px solid #e6e6e6;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            border-radius: 0 0 2px 2px;
          }

          .loadingSpinner {
            color: #18bc9c;
            font-size: 30px;
          }
        `}</style>
      </div>
    )
  }
}

export default CreditCardForm;