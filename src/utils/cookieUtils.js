// src/utils/cookieUtils.js
import Cookies from 'js-cookie';

export const setTokenCookie = (token) => {
  Cookies.set('auth_token', token, {
    expires: 7, // Expires in 7 days
    sameSite: 'Strict',
    path: '/', // Cookie available throughout the app
  });
};

export const getTokenFromCookie = () => {
  return Cookies.get('auth_token');
};

export const removeTokenCookie = () => {
  Cookies.remove('auth_token', { path: '/' });
};
