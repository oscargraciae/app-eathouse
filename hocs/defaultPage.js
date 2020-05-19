import React from 'react';
import { Provider } from 'react-redux';

import { getTokenFromCookie, getTokenFromLocalStorage } from '../utils/auth';
import store from '../redux/store';
import { initGA, logPageView } from '../config/analytics';


const DefaultPage = (Page) => {
  return class extends React.Component {
    static async getInitialProps(context) {
      const loggedUser = process.browser ? getTokenFromLocalStorage() : getTokenFromCookie(context.req);
      let props = {};

      // if(Page.getInitialProps) {
      //   props = Page.getInitialProps(context);
      // }
      props = Page.getInitialProps(context);

      return {
        ...props,
        loggedUser,
        currentUrl: context.pathname,
        isAuthenticated: !!loggedUser,
      };
    }

    // componentDidMount() {
    //   if (!window.GA_INITIALIZED) {
    //     initGA();
    //     window.GA_INITIALIZED = true;
    //   }
    //   logPageView();
    // }

    render() {
      console.log("props default page----->", this.props);
      return (
        <Provider store={store}>
          <Page {...this.props}/>
        </Provider>
      )
    }
  }
}

export default DefaultPage;
