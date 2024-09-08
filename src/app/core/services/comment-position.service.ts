import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentPosition } from '../models/comment-position.model';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentPositionService {
  private apiUrl = `${env.api.serverUrl}/api/CommentPositions/`;

  constructor(private http: HttpClient) {}

  getCommentPositions(): Observable<CommentPosition[]> {
    return this.http.get<CommentPosition[]>(this.apiUrl);
  }

  getCommentPositionById(commentId: number): Observable<CommentPosition> {
    return this.http.get<CommentPosition>(`${this.apiUrl}${commentId}`);
  }

  saveCommentPosition(position: CommentPosition): Observable<CommentPosition> {
    return this.http.post<CommentPosition>(this.apiUrl, position);
  }
}
