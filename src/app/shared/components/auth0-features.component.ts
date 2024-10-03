import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { RoleService, ScrollService, UserService } from '@app/core';

import { User } from 'src/app/core/models/user.model';  // Import the User interface

@Component({
  selector: 'app-auth0-features',
  template: `
    <div class="auth0-features" id="featuresSection">
      <h2 class="auth0-features__title" style="color: black;">Wähle eine Rolle aus und mache mit.</h2>
      <div class="auth0-features__grid" #featuresSection>
        <app-auth0-feature
          title="Als Besucher*in"
          description="Melde dich als Besucher*in an, wenn du bereits an OTTOs Angeboten teilnimmst, du das in Zukunft vorhast, oder alles lieber mit etwas Abstand beobachtest. Als Besucher*in kannst du hier auf dem interaktiven Teil unserer Website aktiv teilhaben am Polylog, Erfahrungen aus den OTTO Räumen teilen, dich selbst in Bezug setzen oder auch einen künstlerischen Impuls auf Plakaten umsetzen und so in den Ort hineingeben. Dabei freut OTTO sich über jeden Besuch, ob einmalig, regelmäßig, flüchtig oder intensiv. Alle Stimmen sind willkommen.."
          [role]="'Gast'"
          icon="../../../assets/img/OTTO GIF 1.gif"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Institution"
          description="Als Förderer*in oder Kooperationspartner*in kannst du mit diesem Zugang das Logo deiner Institution hochladen und durch einen Algorithmus fragmentieren und neu anordnen lassen. "
          [role]="'Institution'"
          icon="../../../assets/img/OTTO GIF 3.gif"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Team"
          description="Teammitglieder von OTTO können über diesen Zugang Kursdokumentationen teilen, den Polylog ordnen, Impulse hineingeben.."
          [role]="'Team'"
          icon="../../../assets/img/OTTO GIF 2.gif"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Als Künstler*in"
          description="Dieser Zugang ermöglicht dir als gastierende*r Künstler*in die Gestaltung des Polylograumes mit der aktuellen Forschungsfrage und deinem Design. Du kannst Impulse hineingeben, die sich an der Hauptfragestellung orientieren und Bildmaterial aus dem Kursgeschehen hinzufügen. "
          [role]="'Künstler'"
          icon="../../../assets/img/OTTO GIF 4.gif"
          (roleSelected)="handleRoleSelected($event)"
        ></app-auth0-feature>
      </div>
    </div>

    <!-- Add the dialog component to open on demand -->
    <app-otto-admin-dialog
      [isOpen]="isAdminDialogOpen"
      (close)="isAdminDialogOpen = false"
      (adminAuthSuccess)="handleAdminAuthSuccess()">
    </app-otto-admin-dialog>
  `
})
export class Auth0FeaturesComponent implements AfterViewInit {
  selectedRole: string | undefined;
  isAdminAuthenticated = false;
  isAdminDialogOpen = false; // Controls the dialog visibility

  constructor(
    private auth: AuthService,
    private roleService: RoleService,
    private userService: UserService,
    private elRef: ElementRef,
    private scrollService: ScrollService
  ) {}

  ngAfterViewInit(): void {
    const featuresSectionElement = this.elRef.nativeElement.querySelector('#featuresSection');
    if (featuresSectionElement) {
      this.scrollService.setFeaturesSection(featuresSectionElement);  // Register the element reference
    }
  }

  handleRoleSelected(role: string) {
    if (role === 'Team' && !this.isAdminAuthenticated) {
      this.isAdminDialogOpen = true; // Open the dialog
      return;
    }

    // Proceed with sign-up for non-team roles or if already authenticated
    this.selectedRole = role;
    this.roleService.setRole(role);
    this.handleSignUp();
  }

  handleAdminAuthSuccess() {
    this.isAdminAuthenticated = true; // Mark as authenticated
    this.isAdminDialogOpen = false; // Close the dialog
    this.selectedRole = 'Team'; // Set the role to 'Team'
    this.handleSignUp(); // Proceed with sign-up
  }

  handleSignUp() {
    const role = this.selectedRole || 'guest';  // Default to guest if no role selected
    console.log('handleSignUp triggered with role:', role);

    this.auth.user$.subscribe(user => {
      if (user) {
        const email = user.email!;
        const newUser: User = {
          email: email,
          role: role
        };

        this.userService.saveUser(newUser).subscribe({
          next: () => console.log('User saved successfully to the database'),
          error: (error) => console.error('Error saving user to the database', error)
        });
      }
    });

    this.auth.loginWithRedirect({
      appState: { target: `/profile?role=${role}` },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
        ui_locales: 'de',
      },
    });
  }
}
