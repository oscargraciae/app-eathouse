import React from 'react';

// import componentes
import InputText from '../general/InputText';
import ButtonBlock from '../general/ButtonBlock';

// impoer libraries
import api from '../../api';

class RememberPassword extends React.Component{

  state = {
    email: '',
    message: null,
    errors: {},
  }

  onSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const { email  } = this.state;
    const response = await api.user.sendMailPassword({ email });

    this.setState({ isLoading: false, message: response.message });
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
    const { errors } = this.state;
    return (
      <div className="container-login">
        <h1>Recuperar contraseña</h1>
        <p>Te enviaremos un enlace a tu correo para restablecer la contraseña.</p>
        <form className="signupForm" onSubmit={this.onSubmit}>
          <InputText
            error={errors.email}
            value={this.state.email}
            onChange={this.onChange}
            type="email"
            name="email"
            label="Correo electrónico"
          />
          <ButtonBlock
            text="Enviar"
            buttonStyle="btn btn-primary btn-large btn-block"
            loading={this.state.isLoading}
          />
          { this.state.message && <div className="alert">{ this.state.message }</div> }
          <div className="text-left">
            <a href="#" onClick={() => this.setState({ isRememberPassword: true }) }>Regresar a iniciar sesión</a>
          </div>
        </form>

        <style jsx>{`
          .container-login{
            border-radius: 3px;
            max-width: 400px;
            margin: 60px auto;
            background-color: #fff;
            padding: 24px;
            border: 1px solid #DDD;
          }

          .container-login > h1{
            font-size: 28px;
            margin: 0px;
          }
          .container-login > h1, .container-login > p{
            text-align: center;
            margin-bottom: 10px;
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

          .lblRemember {
            text-align: right;
          }

          .lblRemember > a {
            color: #757575;
            text-decoration: underline;
          }

          @media (max-width: 600px) {
            .container-login{
              border-radius: 0px;
              max-width: 400px;
              margin: 65px auto;
              background-color: #fff;
            }

            .container-login > h1{
              font-size: 22px;
              margin: 0px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default RememberPassword;
