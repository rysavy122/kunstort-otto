import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-auth0-features',
  template: `
    <div class="auth0-features">
      <h2 class="auth0-features__title" style="color: black;">Wähle eine Rolle aus und mache mit.</h2>
      <div class="auth0-features__grid">
        <app-auth0-feature
          title="Als Besucher*in"
          description="Melde dich als Besucher*in an, wenn du bereits an OTTOs Angeboten teilnimmst, du das in Zukunft vorhast, oder alles lieber mit etwas Abstand beobachtest. Als Besucher*in kannst du hier auf dem interaktiven Teil unserer Website aktiv teilhaben am Polylog, Erfahrungen aus den OTTO Räumen teilen, dich selbst in Bezug setzen oder auch einen künstlerischen Impuls auf Plakaten umsetzen und so in den Ort hineingeben. Dabei freut OTTO sich über jeden Besuch, ob einmalig, regelmäßig, flüchtig oder intensiv. Alle Stimmen sind willkommen.."
          [role]="'Gast'"
          icon="https://ottoblob.blob.core.windows.net/images/*image00040 Kopie.png"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Institution"
          description="Als Förderer*in oder Kooperationspartner*in kannst du mit diesem Zugang das Logo deiner Institution hochladen und durch einen Algorithmus fragmentieren und neu anordnen lassen. "
          [role]="'Institution'"
          icon="https://ottoblob.blob.core.windows.net/images/*image00021 Kopie.png"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Team"
          description="Teammitglieder von OTTO können über diesen Zugang Kursdokumentationen teilen, den Polylog ordnen, Impulse hineingeben.."
          [role]="'Team'"
          icon="https://ottoblob.blob.core.windows.net/images/*image00013 Kopie 2.png"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Künstler*in"
          description="Dieser Zugang ermöglicht dir als gastierende*r Künstler*in die Gestaltung des Polylograumes mit der aktuellen Forschungsfrage und deinem Design. Du kannst Impulse hineingeben, die sich an der Hauptfragestellung orientieren und Bildmaterial aus dem Kursgeschehen hinzufügen. "
          [role]="'Künstler'"
          icon="https://ottoblob.blob.core.windows.net/images/*image00042 Kopie.png"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
      </div>
    </div>
  `
})
export class Auth0FeaturesComponent {
  constructor(private auth: AuthService, private roleService: RoleService) {}
  selectedRole: string | undefined;

  handleRoleSelected(role: string) {
    this.selectedRole = role;
    this.roleService.setRole(role);
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
        ui_locales: 'de'
      },
    });
  }
}

