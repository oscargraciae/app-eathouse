import React from 'react';

import InputText from '../general/InputText';
import ButtonBlock from '../general/ButtonBlock';

class CreditCardForm extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      numberCard: '',
      
      errors: {},
    }
  }

  render() {
    const { errors } = this.state;
    return (
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
                name="numberCard"
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
                name="numberCard"
                label=""
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <ButtonBlock
                text="Guardar"
                buttonStyle="btn btn-primary btn-large btn-block"
                loading={this.state.isLoading}
              />
            </div>
          </div>

        </form>
      </div>
    )
  }
}


export default CreditCardForm;