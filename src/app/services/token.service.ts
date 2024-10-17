import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  saveToken(token: string) {
    localStorage.setItem('token', token);
    setCookie('token-trello', token, { expires: 365, path: '/' });
  }

  getToken() {
    // const token = localStorage.getItem('token');
    const token = getCookie('token-trello');
    return token;
  }

  removeToken() {
    // localStorage.removeItem('token');
    removeCookie('token-trello');
  }

  removeRefreshToken() {
    removeCookie('refresh-token-trello');
  }

  saveRefreshToken(token: string) {
    localStorage.setItem('refresh-token-trello', token);
    setCookie('refresh-token-trello', token, { expires: 365, path: '/' });
  }

  getRefreshToken() {
    // const token = localStorage.getItem('token');
    const token = getCookie('refresh-token-trello');
    return token;
  }

  isValidToken() {
    const token = this.getToken();

    console.log('token', token);

    if (!token) {
      return false;
    }
    const decodeToken = jwtDecode<JwtPayload>(token);
    console.log(
      'decodeToken',
      decodeToken,
      'decodeToken?.exp',
      decodeToken?.exp
    );

    if (decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCMilliseconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }

    return false;
  }

  isValidRefreshToken() {
    const token = this.getRefreshToken();

    console.log('token', token);

    if (!token) {
      return false;
    }
    const decodeToken = jwtDecode<JwtPayload>(token);
    console.log(
      'decodeToken',
      decodeToken,
      'decodeToken?.exp',
      decodeToken?.exp
    );

    if (decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCMilliseconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }

    return false;
  }
}
