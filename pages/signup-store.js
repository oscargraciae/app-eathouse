import React from 'react';
import dynamic from 'next/dynamic'

import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';
import AlertBox from '../components/general/AlertBox';

import validation from '../validations/signup-store';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';
import api from '../api';
import { setToken } from '../utils/auth';
import securePage from '../hocs/page';
import JwtDecode from 'jwt-decode';

class Signup extends React.Component {
  static getInitialProps(context) {
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    if (loggedUser) {
      const user = JwtDecode(loggedUser);
      if(user.storeId) {
        redirect('/', context);
      }
    }

    return {};
  }

  state = {
    userId: this.props.tokenData ? this.props.tokenData.id : 0,
    storeName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: [],
    errorsServer: null,
    isLoading: false,
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    if (this.state.userId > 0) {
      const response = await api.store.create(this.state);
      const { success } = response;

      if(success) {
        // location.href = "http://localhost:3000/";
        location.href = "http://manager.uorder.mx/";

      } else {
        this.setState({ errorsServer: response.errors });
      }
    } else {
      if(this.isValid()) {
        const response = await api.store.create(this.state);
        const { success } = response;

        if(success) {
          location.href = "http://manager.uorder.mx/";
        } else {
          this.setState({ errorsServer: response.errors });
        }
      }
    }

    this.setState({ isLoading: false });
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
      <Layout {...this.props}>
        <div className="container">
          <div className="container-login">
            <h1>Registrarse</h1>
            {/* { errorsServer && <h2>Hemos enviado un correo electronico</h2> } */}
            { errorsServer && <AlertBox message={this.state.errorsServer} /> }
            {!this.props.isAuthenticated &&
            <form className="signupForm" onSubmit={this.onSubmit}>
              { this.state.messageError && <div className="alert alert-danger">{ this.state.messageError }</div> }
              <InputText
                error={errors.storeName}
                value={this.state.storeName}
                onChange={this.onChange}
                type="text"
                name="storeName"
                label="Nombre de tu negocio"
                focus={true}
              />
              <InputText
                error={errors.firstName}
                value={this.state.firstName}
                onChange={this.onChange}
                type="text"
                name="firstName"
                label="Nombre"
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
              <ButtonBlock
                text="¡Registrarme!"
                buttonStyle="btn btn-primary btn-block"
                loading={this.state.isLoading}
              />

              <div className="controls-small">
                <p className="lbl-terms">
                  <span> Al registrarte, confirmas que aceptas los <a className="lbl-principal" href="/terms"> Términos y condiciones </a> y la <a className="lbl-principal" href="/privacy"> Política de privacidad</a>.</span>
                </p>
              </div>
            </form>
            }


            {this.props.isAuthenticated &&
              <form className="signupForm" onSubmit={this.onSubmit}>
              { this.state.messageError && <div className="alert alert-danger">{ this.state.messageError }</div> }
              <InputText
                error={errors.storeName}
                value={this.state.storeName}
                onChange={this.onChange}
                type="text"
                name="storeName"
                label="Nombre de tu negocio"
                focus={true}
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
            }
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

export default securePage(Signup);
