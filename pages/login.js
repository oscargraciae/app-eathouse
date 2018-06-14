// import libraries
import React from 'react';
import Router from 'next/router';

// import components
import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';
import AlertBox from '../components/general/AlertBox';

// import local libaries
import validation from '../validations/login';
import { setToken } from '../utils/auth';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';
import api from '../api';

class Login extends React.Component {
  static getInitialProps(context) {
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    if(loggedUser) {
      redirect('/menu', context);
    }
    return {};
  }

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      errors: {},
      errorsServer: null,
      isLoading: false,
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    if(this.isValid()) {
      const { email, password } = this.state;
      const response = await api.user.authentication(email, password);
      console.log("Response--->", response);
      const { ok, user } = response;
      if(ok) {
        setToken(user.token);
        Router.push('/menu');
      } else {
        this.setState({ errorsServer: 'Verifica tu correo electrónico y contraseña' });
      }
    }

    this.setState({ isLoading: false });
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
    const { errors, errorsServer } = this.state;
    return (
      <Layout>
        <div className="container">
          <div className="container-login">
            <h1>Iniciar sesión</h1>
            <p>¿Todavía no tienes cuenta? <a className="lbl-principal" href="signup">Regístrate</a></p>
            { errorsServer && <AlertBox message={this.state.errorsServer} /> }
            <form className="signupForm" onSubmit={this.onSubmit}>
              { this.state.messageError && <div className="alert alert-danger">{ this.state.messageError }</div> }
              <InputText
                error={errors.email}
                value={this.state.email}
                onChange={this.onChange}
                type="email"
                name="email"
                label="Correo electrónico"
              />
              <InputText
                error={errors.password}
                value={this.state.password}
                onChange={this.onChange}
                type="password"
                name="password"
                label="Contraseña"
              />
              <div className="lblRemember">
                <a onClick={this.props.clickRemember}>¿Olvidaste tu contraseña?</a>
              </div>
              <ButtonBlock
                text="¡Registrarme!"
                buttonStyle="btn btn-primary btn-large btn-block"
                loading={this.state.isLoading}
              />
              <div className="controls-small">
                <p className="lbl-terms">
                  <span> Al registrarte, confirmas que aceptas los <a className="lbl-principal" href="/app/terms_of_service"> Términos y condiciones </a> y la <a className="lbl-principal" href="/app/privacy-policy"> Política de privacidad</a>.</span>
                </p>
              </div>
            </form>
          </div>
        </div>

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
              padding: 0px;
              border: none;
            }

            .container-login > h1{
              font-size: 22px;
              margin: 0px;
            }
          }
        `}</style>
      </Layout>
    )
  }
}

export default Login;