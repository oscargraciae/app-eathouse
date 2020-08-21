import React from 'react';
import { Provider } from 'react-redux';
import { persistStore, WebStorage } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'
import createExpirationTransform from 'redux-persist-transform-expire';
import axios from 'axios';
import decode from 'jwt-decode';

import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import redirect from '../utils/redirect';
import store from '../redux/store';
import api from '../api';
import { initUserGA, logPageView, setUser } from '../config/analytics';

// import components
import ModalAddress from '../components/general/ModalAddress'

export default Page => class DefaultPage extends React.Component {
  static async getInitialProps(context) {
    const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
    const props = await Page.getInitialProps(context);
    const token = loggedUser;
    let user = null;
    let tokenDecode = null;

    if (!token) {
      delete axios.defaults.headers.common['Authorization'];
      // redirect('/', context);
    } else {
      axios.defaults.headers.common['Authorization'] = `JWT ${token}`;

      tokenDecode = decode(token);
      user = await api.user.get(tokenDecode.id);
    }

    return {
      ...props,
      loggedUser,
      currentUrl: context.pathname,
      isAuthenticated: !!loggedUser,
      tokenData: tokenDecode,
      user,
    };
  }

  // componentWillMount() {
  //   const token = this.props.loggedUser;
  //   if(token) {
  //     axios.defaults.headers.common['Authorization'] =  `JWT ${token}`;
  //   }
  // }


  componentDidMount() {
    const token = this.props.loggedUser;
    if(token) {
      axios.defaults.headers.common['Authorization'] =  `JWT ${token}`;
    }

    const expireTransform = createExpirationTransform({
      expireKey: 'persistExpiresAt',
      defaultState: {
        data: [],
      }
    });

    persistStore(
      store,
      {
        whitelist: [ 'cart', 'user' ],
        transforms: [expireTransform]
      },
      () => this.setState({ ready: true })
    );
  }

  render() {
    return (
      <Provider store={store}>
        <Page {...this.props}/>
      </Provider>
    );
  }
};

