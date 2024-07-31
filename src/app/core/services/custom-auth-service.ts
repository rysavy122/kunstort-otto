import { Injectable } from '@angular/core';
import { AuthService as Auth0AuthService, User } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomAuthService {
  user$: Observable<User | null | undefined>;

  constructor(private auth: Auth0AuthService, private http: HttpClient) {
    this.user$ = this.auth.user$.pipe(
      map(user => {
        const namespace = 'https://otto-interactive-test.azurewebsites.net/';
        return {
          ...user,
          roles: user ? (user[namespace + 'roles'] as string[]) || [] : []
        };
      })
    );
  }

  loginWithRedirect(options?: any): void {
    this.auth.loginWithRedirect(options).subscribe({
      next: () => {
        this.auth.user$.subscribe(user => {
          console.log('User after login:', user);
          const userId = user?.sub;
          const role = options.appState.role;
          if (userId && role) {
            console.log('Assigning role:', role, 'to user:', userId);
            this.assignRole(userId, role).subscribe({
              next: () => console.log("Role assignment completed."),
              error: err => console.error('Role assignment error:', err)
            });
          } else {
            console.error('User ID or Role is undefined:', { userId, role });
          }
        });
      },
      error: err => console.error('Login error:', err)
    });
  }


  public assignRole(userId: string, role: string): Observable<any> {
    if (!userId || !role) {
      console.error('User ID or Role is missing');
      return of(null);
    }
    console.log("Sending role assignment request for user:", userId, "with role:", role);
    return this.http.post('http://localhost:6060/api/roles/assign-role', { UserId: userId, RoleId: role });
  }
}
