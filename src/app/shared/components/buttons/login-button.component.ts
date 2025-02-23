import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: `
    <button class="button__login" (click)="handleLogin()">Anmelden</button>
  `,
})
export class LoginButtonComponent {
  constructor(private auth: AuthService) {}
  @Output() loginClick = new EventEmitter<void>();


  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
    this.loginClick.emit();  // Emit event when login button is clicked
  }
}
