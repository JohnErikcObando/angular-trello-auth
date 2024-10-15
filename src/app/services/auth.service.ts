import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { evironment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  apiUrl = evironment.API_URL;
  constructor() {}

  Login(email: String, password: String) {
    return this.http.post(`${this.apiUrl}/auth/login/`, {
      email,
      password,
    });
  }
}
