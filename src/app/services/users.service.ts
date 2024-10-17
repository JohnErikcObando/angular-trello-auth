import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { evironment } from '../../../environments/environments';
import { TokenService } from './token.service';
import { User } from '@models/user';

import { checkToken } from '../intercertor/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = evironment.API_URL;

  private http = inject(HttpClient);

  constructor(private tokenService: TokenService) {}

  getAll() {
    const token = this.tokenService.getToken();
    return this.http.get<User[]>(`${this.apiUrl}/users`, {
      context: checkToken(),
    });
  }
}
