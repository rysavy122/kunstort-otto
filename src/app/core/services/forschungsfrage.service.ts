import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForschungsFrageService {
  private apiUrl = 'http://localhost:6060/api/forschungsfragen'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  createForschungsfrage(forschungsfrage: string): Observable<any> {
    return this.http.post(this.apiUrl, { title: forschungsfrage });
  }
  getAllForschungsfragen(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
