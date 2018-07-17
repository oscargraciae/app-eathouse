import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-121645924-1');
};

export const initUserGA = (user) => {
  console.log('GA init');
  ReactGA.initialize('UA-121645924-1', {
    gaOptions: {
      userId: user.id
    }
  });
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const setUser = (user) => {
  if(user) {
    ReactGA.set({ userId: user.id });
  }
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};