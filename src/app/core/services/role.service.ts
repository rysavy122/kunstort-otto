import { Injectable } from '@angular/core';
import { AuthService as Auth0AuthService, AuthService } from '@auth0/auth0-angular';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleKey = 'userRole';
  roles: string[] = [];

    constructor(public auth: AuthService) {
      this.auth.idTokenClaims$.subscribe((claims) => {
        if (claims) {
          try {
            const decodedToken: any = jwtDecode(claims.__raw);
            console.log('Decoded Token:', decodedToken);

            // Access roles from the custom namespace
            this.roles = decodedToken['https://dev-z3z23qam2lr3gsku.us.auth0.com/roles'] || [];
            console.log('Roles:', this.roles);
          } catch (error) {
            console.error('Error decoding token:', error);
          }
        }
      });

  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }

  setRole(role: string): void {
    if (!localStorage.getItem(this.roleKey)) {
      localStorage.setItem(this.roleKey, role);
    }
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  clearRole(): void {
    localStorage.removeItem(this.roleKey);
  }
}
