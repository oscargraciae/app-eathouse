import React from 'react';
import Router from 'next/router'
import dynamic from 'next/dynamic'

const FacebookLogin = dynamic(import('react-facebook-login'), {
  ssr: false
})

import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';
import AlertBox from '../components/general/AlertBox';

import validation from '../validations/signup';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';
import api from '../api';
import { setToken } from '../utils/auth';

class Signup extends React.Component {
  static getInitialProps(context) {
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    if(loggedUser) {
      redirect('/', context);
    }
    return {};
  }

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      errors: [],
      errorsServer: null,
      isLoading: false,
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    if(this.isValid()) {
      const response = await api.user.create(this.state);
      const { ok, user } = response;

      if(ok) {
        const { email, password } = this.state;
        const response = await api.user.authentication(email, password);
        if(response.success) {
          setToken(response.token);
        }
        location.href = "/";
        // Router.push('/menu');
      } else {
        this.setState({ errorsServer: response.errors });
      }
    }

    this.setState({ isLoading: false });
  }

  facebookAuth = () => {

  }

  async responseFacebook(data) {
    if(data) {
      const response = await api.user.authenticationFacebook(data.accessToken);
        if(response.ok) {
          setToken(response.user.token);
        }
        location.href = "/menu";
    }
  }

  isValid() {
    const { errors, isValid } = validation(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, errorsServer } = this.state;
    return (
      <Layout>
        <div className="container">
          <div className="container-login">
            <h1>Registrarse</h1>
            <p>¿Ya tienes una cuenta? <a className="lbl-principal" href="login">Iniciar sesión</a></p>
            { errorsServer && <AlertBox message={this.state.errorsServer} /> }


            {/* <FacebookLogin
              appId="244527906154813"
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.facebookAuth}
              textButton="     Registrarse con Facebook"
              icon="fab fa-facebook-f"
              callback={this.responseFacebook}
              cssClass="btn btn-facebook btn-block btn-large" /> */}
            {/* <hr/> */}
            {/* <div className="text-above-line">
              <span>o</span>
            </div> */}
            <form className="signupForm" onSubmit={this.onSubmit}>
              { this.state.messageError && <div className="alert alert-danger">{ this.state.messageError }</div> }
              <InputText
                error={errors.firstName}
                value={this.state.firstName}
                onChange={this.onChange}
                type="text"
                name="firstName"
                label="Nombre"
                focus={true}
              />
              <InputText
                error={errors.lastName}
                value={this.state.lastName}
                onChange={this.onChange}
                type="text"
                name="lastName"
                label="Apellido"
              />
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
              <InputText
                error={errors.phone}
                value={this.state.phone}
                onChange={this.onChange}
                type="text"
                name="phone"
                label="Teléfono"
              />
              <ButtonBlock
                text="¡Registrarme!"
                buttonStyle="btn btn-primary btn-block"
                loading={this.state.isLoading}
              />

              {/* <div className="controls-small">
                <p className="lbl-terms">
                  <span> Al registrarte, confirmas que aceptas los <a className="lbl-principal" href="/terms"> Términos y condiciones </a> y la <a className="lbl-principal" href="/privacy"> Política de privacidad</a>.</span>
                </p>
              </div> */}
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

          .text-above-line {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }

          .text-above-line:before, .text-with-left-line:before, .text-with-right-line:after {
            border-top: 1px solid #ddd;
            content: '';
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            display: block;
          }

          .text-above-line:after, .text-above-line:before, .text-with-left-line:before, .text-with-right-line:after {
            border-top: 1px solid #ddd;
            content: '';
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
          }

          .text-above-line span {
            color: #999;
            font-size: 16px;
            font-weight: 300;
            margin: 10px;
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
      </Layout>
    )
  }
}

export default Signup;
