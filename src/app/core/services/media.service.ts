import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private apiUrl = 'http://localhost:6060/api/kommentare/';

  constructor(private http: HttpClient) {}

  uploadMedia(mediaFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('media', mediaFile, mediaFile.name);

    // The endpoint for media upload as per your KommentarController
    const endpoint = this.apiUrl + 'uploadmedia';
    return this.http.post(endpoint, formData);
  }
}
