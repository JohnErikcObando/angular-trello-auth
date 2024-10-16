import { Component, inject } from '@angular/core';

import { DataSourceUser } from './data-source';
import { UsersService } from '../../../../services/users.service';
import { User } from '@models/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
  private usersService = inject(UsersService);

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor() {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe((users) => {
      this.dataSource.init(users);
    });
  }
}
