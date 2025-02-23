import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Plakat } from '../models/plakat.model';
import { Sticker } from '../models/sticker.model';

@Injectable({
  providedIn: 'root'
})
export class PlakatService {
  private apiUrl = `${env.api.serverUrl}/api/plakate/`;

  constructor(private http: HttpClient) {}

  getPlakatById(plakatId: number): Observable<Plakat> {
    return this.http.get<Plakat>(`${this.apiUrl}/${plakatId}`);
  }

  createPlakat(plakat: Plakat): Observable<Plakat> {
    return this.http.post<Plakat>(this.apiUrl, plakat);
  }

  updatePlakat(plakatId: number, drawingJson: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${plakatId}`, drawingJson);
  }

  deletePlakat(plakatId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${plakatId}`);
  }

  addSticker(plakatId: number, sticker: Sticker): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${plakatId}/stickers`, sticker);
  }
}
