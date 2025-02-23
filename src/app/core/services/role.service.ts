import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleKey = 'userRole';
  roles: string[] = [];

  constructor(public auth: AuthService, private http: HttpClient) {}

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
