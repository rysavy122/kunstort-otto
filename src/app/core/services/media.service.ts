import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private apiUrl = 'http://localhost:6060/api/kommentare/';

  constructor(private http: HttpClient) {}

  uploadMedia(mediaFile: File, forschungsfrageId: number): Observable<any> {
    const formData = new FormData();
    formData.append('media', mediaFile, mediaFile.name);

    // Include ForschungsfrageId if required by your API
    formData.append('forschungsfrageId', forschungsfrageId.toString());

    const endpoint = 'http://localhost:6060/api/kommentare/uploadmedia'; // Adjust if necessary
    return this.http.post(endpoint, formData);
}

  getAllMedia(forschungsfrageId: number): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'media/' + forschungsfrageId);
  }
  deleteMedia(fileName: string): Observable<any> {
    const decodedFileName = decodeURIComponent(fileName);
    const encodedFileName = encodeURIComponent(decodedFileName);
    return this.http.delete(`${this.apiUrl}DeleteMedia/${encodedFileName}`);
  }

}
