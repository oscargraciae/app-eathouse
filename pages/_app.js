import React, { useEffect, useState } from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import axios from 'axios';
import { persistStore } from 'redux-persist';
import { CSSReset, ThemeProvider } from '@chakra-ui/react';

import Head from 'next/head';
import store from '../redux/store';

import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import api from '../api';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Meta from '../components/general/Meta';
import theme from '../config/theme';

function MyApp({ Component, pageProps }) {
  const [ready, setReady] = useState(false);
  const token = pageProps.loggedUser;
  if (token) {
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
  }

  useEffect(() => {
    persistStore(
      store,
      {
        whitelist: ['cart', 'user'],
      },
      () => setReady(true),
    );
  });

  if (!ready) return <LoadingSpinner />;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Head>
          <Meta />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(appContext.ctx.req);

  let appProps = null;
  if (App.getInitialProps) {
    appProps = await App.getInitialProps(appContext);
  }

  const token = loggedUser;
  let user = null;
  let tokenDecode = null;

  if (!token) {
    // delete axios.defaults.headers.common['Authorization'];
    // redirect('/', context);
  } else {
    axios.defaults.headers.common.Authorization = `JWT ${token}`;

    tokenDecode = decode(token);
    user = await api.user.get(tokenDecode.id);
  }

  return {
    pageProps: {
      ...appProps,
      loggedUser,
      // currentUrl: appContext.ctx.pathname,
      isAuthenticated: !!loggedUser,
      tokenData: tokenDecode,
      user,
    },

  };
};

export default MyApp;
