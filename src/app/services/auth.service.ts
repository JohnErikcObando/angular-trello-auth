import { TokenInterceptor } from './../intercertor/token.interceptor';
import { User } from './../models/user';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { evironment } from '../../../environments/environments';
import { switchMap, tap } from 'rxjs/operators';

import { TokenService } from './token.service';
import { AuthModel } from '@models/auth.model';
import { BehaviorSubject } from 'rxjs';

import { checkToken } from '../intercertor/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  apiUrl = evironment.API_URL;
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private tokenService: TokenService) {}

  getDataUser() {
    return this.user$.getValue();
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthModel>(`${this.apiUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.tokenService.saveToken(response.access_token);
          this.tokenService.saveRefreshToken(response.refresh_token);
        })
      );
  }

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/users/`, {
      name,
      email,
      password,
      avatar: 'https://picsum.photos/800',
    });
  }

  refreshToken(refrehToken: string) {
    return this.http
      .post<AuthModel>(`${this.apiUrl}/auth/refresh-token`, {
        refrehToken,
      })
      .pipe(
        tap((response) => {
          this.tokenService.saveToken(response.access_token);
          this.tokenService.saveRefreshToken(response.refresh_token);
        })
      );
  }

  registerAndLogin(name: string, email: string, password: string) {
    return this.register(name, email, password).pipe(
      switchMap(() => this.login(email, password))
    );
  }

  isAvailable(email: string) {
    return this.http.post<{ isAvailable: boolean }>(
      `${this.apiUrl}/users/is-available`,
      {
        email,
      }
    );
  }

  recovery(email: string) {
    return this.http.post(`${this.apiUrl}/auth/recovery`, { email });
  }

  changePassword(token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/auth/change-password`, {
      token,
      newPassword,
    });
  }

  getProfile() {
    return this.http
      .get<User>(`${this.apiUrl}/auth/profile`, { context: checkToken() })
      .pipe(
        tap((user) => {
          this.user$.next(user);
        })
      );
  }

  // remover le token
  logout() {
    this.tokenService.removeToken();
  }
}
