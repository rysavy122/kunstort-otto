import { Component, HostListener } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isAuth0Loading$ = this.auth.isLoading$;

  constructor(private auth: AuthService, private userService: UserService) {

  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(`Key: ${event.key}, Ctrl: ${event.ctrlKey}, Shift: ${event.shiftKey}`);

    // Check for Ctrl + Shift + L
    if (event.ctrlKey && event.shiftKey && event.key === 'L') {
      event.preventDefault(); // Prevent any default behavior associated with this key combination
      this.promptForAdminCode();
    }

  }
  promptForAdminCode() {
    const adminCode = prompt('Kunstort Otto Admin Code:');
    const correctCode = 'OTTO-admin';  // Replace with your secure code

    if (adminCode === correctCode) {
      localStorage.setItem('isAdmin', 'true');
      alert('Administrator Zugriff gewährleistet.');
      this.triggerAuth0Login();
    } else {
      alert('Code ist falsch. Zugriff verweigert.');
    }
  }
  triggerAuth0Login() {
      this.auth.loginWithRedirect({
        appState: {
          target: '/profile',
        },
        authorizationParams: {
          prompt: 'login',
        },
      });
  }
}
