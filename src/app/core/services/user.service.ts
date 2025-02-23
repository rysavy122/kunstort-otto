import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';  // Import environment
import { User } from '../models/user.model';  // Import the User interface

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${env.api.serverUrl}/api/users`;  // Base URL for user-related endpoints

  constructor(private http: HttpClient) {}

  // Use the User interface in the saveUser method
  saveUser(user: User): Observable<any> {
    const endpoint = `${this.apiUrl}/save`;  // Complete URL to the save user endpoint
    console.log("User saved");
    return this.http.post(endpoint, user);
  }
}
