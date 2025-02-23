import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-mobile-nav-bar-buttons',
  templateUrl: './mobile-nav-bar-buttons.component.html',
})
export class MobileNavBarButtonsComponent {
  isAuthenticated$ = this.auth.isAuthenticated$;
  @Output() signupClick = new EventEmitter<void>();
  @Output() loginClick = new EventEmitter<void>();


  constructor(private auth: AuthService) {}

  onSignup() {
    this.signupClick.emit();  // Emit signup click to parent
  }

  onLogin() {
    this.loginClick.emit();  // Emit login click to parent
  }
}
