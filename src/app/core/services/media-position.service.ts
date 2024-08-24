import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaPosition } from '../models/media-position.model';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaPositionService {
  private apiUrl = `${env.api.serverUrl}/api/MediaPositions/`;

  constructor(private http: HttpClient) {}

  getMediaPositions(): Observable<MediaPosition[]> {
    return this.http.get<MediaPosition[]>(this.apiUrl);
  }

  saveMediaPosition(position: MediaPosition): Observable<MediaPosition> {
    return this.http.post<MediaPosition>(this.apiUrl, position);
  }
}
