import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  private authService = inject(AuthService);

  constructor() {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe();
  }
}
