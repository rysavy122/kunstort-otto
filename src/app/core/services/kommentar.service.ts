import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { KommentarModel } from '../models/kommentar.model';

@Injectable({
  providedIn: 'root',
})
export class KommentarService {
  private apiUrl = 'http://localhost:6060/api/kommentare';

  private kommentareSource = new BehaviorSubject<any[]>([]);
  kommentare$ = this.kommentareSource.asObservable();

  constructor(private http: HttpClient) {}

  addKommentar(kommentar: KommentarModel): Observable<KommentarModel> {
    return this.http.post(this.apiUrl, kommentar).pipe(
      tap((newKommentar) => {
        this.kommentareSource.next([...this.kommentareSource.value, newKommentar]);
      })
    );
  }
  deleteKommentar(id: number): Observable<any> {
    console.log(`${this.apiUrl}/${id}`);
    return this.http.delete(`${this.apiUrl}/${id}`);
}


  getAllKommentare(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((kommentare) => {
        this.kommentareSource.next(kommentare);
      })
    );
  }
  
}
