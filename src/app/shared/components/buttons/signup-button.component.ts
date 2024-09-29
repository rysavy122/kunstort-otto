import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { RoleService, ScrollService } from '@app/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-signup-button',
  template: `
    <button class="button__sign-up" (click)="handleSignUp()">Registrieren</button>
  `,
})


export class SignupButtonComponent {
  constructor(private auth: AuthService, private roleService: RoleService, private scrollService: ScrollService) {}
  @Output() signupClick = new EventEmitter<void>();
  @Output() scrollToFeatures = new EventEmitter<void>();

  @ViewChild('featuresSection') featuresSection!: ElementRef;  // Use ViewChild to reference the section



  handleSignUp(): void {
    const role = this.roleService.getRole();

    if(!role){
      this.scrollService.scrollToFeatures();
      console.log("scroll into role")
    } else {
      this.auth.loginWithRedirect({
        appState: {
          target: '/profile',
        },
        authorizationParams: {
          prompt: 'login',
          screen_hint: 'signup',
          ui_locales: 'de'
        },
      });
    }
    this.signupClick.emit();
  }
}
