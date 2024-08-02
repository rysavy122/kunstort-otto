import { Injectable } from '@angular/core';
import { AuthService as Auth0AuthService, User } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomAuthService {
  private roleKey = 'userRole';


  constructor() { }

  // Save role in localStorage only if not already set
  setRole(role: string): void {
    if (!localStorage.getItem(this.roleKey)) {
      localStorage.setItem(this.roleKey, role);
    }
  }

  // Get role from localStorage
  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  // Clear role from localStorage if needed (not used in this scenario)
  clearRole(): void {
    localStorage.removeItem(this.roleKey);
  }




}
