import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { evironment } from '../../../environments/environments';
import { switchMap, tap } from 'rxjs/operators';

import { TokenService } from './token.service';
import { AuthModel } from '@models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  apiUrl = evironment.API_URL;
  constructor(private tokenService: TokenService) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthModel>(`${this.apiUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.tokenService.saveToken(response.access_token);
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

  // remover le token
  logout() {
    this.tokenService.removeToken();
  }
}
