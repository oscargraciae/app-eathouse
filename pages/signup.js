import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router'

import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';

import withData from '../apollo/withData';
import validation from '../validations/signup';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';

class Signup extends React.Component {
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: [],
      errorsServer: null,
      isLoading: false,
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    if(this.isValid()) {
      const response = await this.props.mutate({
        variables: this.state,
      });
      
      const { ok, errors } = response.data.createUser;
      
      if(ok) {
        Router.push('/suscriptions');
      } else {
        const err = [];
        errors.forEach(({ path, message }) => {
          err.push(message);
        });
  
        this.setState({ errorsServer: err });
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
      <Layout>
        <div className="container">
          <div className="container-login">
            <h1>Registrarse</h1>
            <p>¿Ya tienes una cuenta? <a className="lbl-principal" href="login">Iniciar sesión</a></p>
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
              <ButtonBlock
                text="¡Registrarme!"
                buttonStyle="btn btn-primary btn-large btn-block"
                loading={this.state.isLoading}
              />
              { errorsServer && 
                <div className="alert alert-danger">
                {errorsServer.map((item, key) => {
                  return (
                    <div key={key}>{item}</div>
                  )
                })}
              </div>
              }
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

const registerMutation = gql`
  mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`
const GraphqlSignup = compose(graphql(registerMutation))(Signup);


export default withData(GraphqlSignup);