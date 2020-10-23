// import libraries
import React from 'react';
import Router from 'next/router';

// import components
import Layout from '../components/common/Layout';
import InputText from '../components/general/InputText';
import ButtonBlock from '../components/general/ButtonBlock';
import AlertBox from '../components/general/AlertBox';

// import local libaries
import validation from '../validations/password';
import { setToken } from '../utils/auth';
import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';
import api from '../api';

class PasswordReset extends React.Component {
  static getInitialProps(context) {
    const { query } = context.req;
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    if(loggedUser) {
      redirect('/menu', context);
    }
    return {
      query,
    };
  }

  constructor() {
    super();

    this.state = {
      isLoading: false,
      errors: {},
      password: '',
      passwordConfirm: '',
      token: '',
      userId: {},
      isValid: true,
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    console.log('this.props.query', this.props);
    const { t, id } = this.props.pageProps.query;
    const { userId, isValid, message } = await api.user.validationToken(t, id);
    this.setState({ userId, token: t, isValid, errorsServer: message });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    if(this.isValid()) {
      const { password, userId } = this.state;
      const response = await api.user.changePassword(userId, { newPassword: password });
      Router.push('/login');
    }

    this.setState({ isLoading: false });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validation(this.state);
    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  render() {
    const { errors, errorsServer, isValid } = this.state;
    return (
      <Layout>
        <div className="container">
          <div className="container-login">
            <h1>Recuperar contraseña</h1>
            { !isValid && <AlertBox message={this.state.errorsServer} /> }
            { isValid &&
            <form className="signupForm" onSubmit={this.onSubmit}>
              { this.state.messageError && <div className="alert alert-danger">{ this.state.messageError }</div> }
              <InputText
                error={errors.password}
                value={this.state.password}
                onChange={this.onChange}
                type="password"
                name="password"
                label="Nueva contraseña"
              />
              <InputText
                error={errors.passwordConfirm}
                value={this.state.passwordConfirm}
                onChange={this.onChange}
                type="password"
                name="passwordConfirm"
                label="Confirmar nueva contraseña"
              />
              <ButtonBlock
                text="Cambiar contraseña"
                buttonStyle="btn btn-primary btn-large btn-block"
                loading={this.state.isLoading}
              />
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

export default PasswordReset;
