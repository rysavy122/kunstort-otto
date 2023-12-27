import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ForschungsFrageService {
  private apiUrl = 'http://localhost:6060/api/forschungsfragen';
  private forschungsfragenSource = new BehaviorSubject<any[]>([]);
  forschungsfragen$ = this.forschungsfragenSource.asObservable();

  constructor(private http: HttpClient) {}

  createForschungsfrage(forschungsfrage: string): Observable<any> {
    return this.http.post(this.apiUrl, { title: forschungsfrage }).pipe(
      tap((newFrage) => {
        this.forschungsfragenSource.next([...this.forschungsfragenSource.value, newFrage]);
      })
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

}
