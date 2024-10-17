import { Component, inject } from '@angular/core';

import { DataSourceUser } from './data-source';
import { UsersService } from '../../../../services/users.service';
import { User } from '@models/user';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
  private usersService = inject(UsersService);
  private AuthService = inject(AuthService);

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];
  user: User | null = null;

  constructor() {}

  ngOnInit(): void {
    this.getUsers();

    this.AuthService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  getUsers() {
    this.usersService.getAll().subscribe((users) => {
      this.dataSource.init(users);
    });
  }
}
