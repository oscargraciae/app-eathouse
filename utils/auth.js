import Cookie from 'js-cookie';

export const setToken = (token) => {
  if (!process.browser) {
    return;
  }

  window.localStorage.setItem('token', token);
  Cookie.set('token', token, { expires: 365, secure: true });
};

export const unsetToken = () => {
  if (!process.browser) {
    return;
  }
  window.localStorage.removeItem('token');
  Cookie.remove('token');
};

export const getTokenFromCookie = (req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='));
  if (!jwtCookie) {
    return undefined;
  }
  const jwt = jwtCookie.split('=')[1];
  return jwt;
};


export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user;
  return json ? JSON.parse(json) : undefined;
};

export const getTokenFromLocalStorage = () => {
  const json = window.localStorage.token;
  return json ? json : undefined;
};
