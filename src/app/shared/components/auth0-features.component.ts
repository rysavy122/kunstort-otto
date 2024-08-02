import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { CustomAuthService } from 'src/app/core/services/custom-auth-service';

@Component({
  selector: 'app-auth0-features',
  template: `
    <div class="auth0-features">
      <h2 class="auth0-features__title" style="color: black;">Wähle eine Rolle aus und mache mit.</h2>
      <div class="auth0-features__grid">
        <app-auth0-feature
          title="Als Gast/Besucher*in"
          description="Als Gast/Besucher*in kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          [role]="'Gast'"
          icon="https://ottoblob.blob.core.windows.net/images/*image00040 Kopie.png"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Institution"
          description="Als Institution kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          [role]="'Institution'"
          icon="https://ottoblob.blob.core.windows.net/images/*image00021 Kopie.png"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Team"
          description="Als Team kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          [role]="'Team'"
          icon="https://ottoblob.blob.core.windows.net/images/*image00013 Kopie 2.png"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Künstler*in"
          description="Als Künstler*in kannst hast du folgende Berechtigungen und kannst folgendes machen, wähle diese Rolle, wenn du folgende Kriterien erfüllst."
          [role]="'Künstler'"
          icon="https://ottoblob.blob.core.windows.net/images/*image00042 Kopie.png"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
      </div>
    </div>
  `,
})
export class Auth0FeaturesComponent {
  constructor(private auth: AuthService, private customAuth: CustomAuthService, private router: Router) {}
  selectedRole: string | undefined;

  handleRoleSelected(role: string) {
    this.selectedRole = role;
    this.customAuth.setRole(role);
    this.handleSignUp();
  }

  handleSignUp() {
    console.log('handleSignUp triggered with role:', this.selectedRole);
    const role = encodeURIComponent(this.selectedRole || '');
    this.auth.loginWithRedirect({
      appState: {
        target: `/profile?role=${role}`,
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  }
}

