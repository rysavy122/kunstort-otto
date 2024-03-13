import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private apiUrl = `${env.api.serverUrl}/api/kommentare/`;


  constructor(private http: HttpClient) {}

  uploadMedia(mediaFile: File, forschungsfrageId: number): Observable<any> {
    const formData = new FormData();
    formData.append('media', mediaFile, mediaFile.name);

    // Include ForschungsfrageId if required by your API
    formData.append('forschungsfrageId', forschungsfrageId.toString());

    const endpoint = `${env.api.serverUrl}/api/kommentare/uploadmedia`;
    return this.http.post(endpoint, formData);
}

  getAllMedia(forschungsfrageId: number): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'media/' + forschungsfrageId);
  }
  deleteMedia(fileName: string): Observable<any> {
    const decodedFileName = decodeURIComponent(fileName);
    const encodedFileName = encodeURIComponent(decodedFileName);
    return this.http.delete(`${this.apiUrl}deleteMedia/${encodedFileName}`);
  }

}
