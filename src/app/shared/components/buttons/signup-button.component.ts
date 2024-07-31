import { Component } from '@angular/core';
import { CustomAuthService } from 'src/app/core/services/custom-auth-service';

@Component({
  selector: 'app-signup-button',
  template: `
    <button class="button__sign-up" (click)="handleSignUp()">Registrieren</button>
  `,
})
export class SignupButtonComponent {
  constructor(private auth: CustomAuthService) {}

  handleSignUp(): void {
    try {
      this.auth.loginWithRedirect({
        appState: {
          target: '/profile',
          role: 'Gast'
        },
        authorizationParams: {
          prompt: 'signup',
          screen_hint: 'signup',
        },
      });
    } catch (err) {
      console.error('Signup error:', err);
    }
  }
}
