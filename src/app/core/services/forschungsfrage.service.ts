import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ForschungsFrageService {
  private apiUrl = `${env.api.serverUrl}/api/forschungsfragen/`;

  private forschungsfragenSource = new BehaviorSubject<any[]>([]);

  forschungsfragen$ = this.forschungsfragenSource.asObservable();

  constructor(private http: HttpClient) {}

  createForschungsfrage(forschungsfrage: string, imageFile: File | null): Observable<any> {
    const formData = new FormData();
    formData.append('title', forschungsfrage);
    if (imageFile) {
        formData.append('image', imageFile, imageFile.name);
    }

    return this.http.post<any>(this.apiUrl, formData).pipe(
        tap((newFrage) => {
            this.forschungsfragenSource.next([...this.forschungsfragenSource.value, newFrage]);
        }),
        catchError(this.handleError)
    );
}

  getAllForschungsfragen(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((fragen) => {
        this.forschungsfragenSource.next(fragen);
      })
    );
  }
  getForschungsfrageById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
  getLatestForschungsfrage(): Observable<any> {
    const url = `${this.apiUrl}/latest`;
    return this.http.get<any>(url);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

}
