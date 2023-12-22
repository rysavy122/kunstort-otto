import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResponseModel, AppErrorModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ForschungsfrageApiService {
  private apiUrl = 'http://localhost:6060/api/Forschungsfragen';

  constructor(private http: HttpClient) {}

  createForschungsfrage(forschungsfrage: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, { title: forschungsfrage }, { headers: headers })
      .pipe(
        map(data => ({
          data: data,
          error: null
        })),
        catchError((err) => {
          let error: AppErrorModel = {
            message: 'An error occurred while saving the Forschungsfrage'
          };
          
          if (err.error instanceof ErrorEvent) {
            error.message = `Error: ${err.error.message}`;
          } else {
            error.message = `Error Code: ${err.status}\nMessage: ${err.message}`;
          }

          return of({ data: null, error: error });
        })
      );
  }
}
