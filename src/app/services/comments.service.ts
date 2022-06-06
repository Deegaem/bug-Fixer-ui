import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../Domain-Models/comment';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';


@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  public getComments(bug_id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8080/comments/${bug_id}`)
      .pipe(map((resp: Comment[]) => { return resp })
      );
  }

  public addComment(comment_id: number, bug_id: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:8080/comments/${bug_id}/${comment_id}`, comment)
      .pipe(map((resp: Comment) => { return resp })
      );
  }

  public updateComment(comment_id: number, bug_id: number, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8080/comments/${bug_id}/${comment_id}`, comment)
      .pipe(map((resp: Comment) => { return resp })
      );
  }

  public removeComment(bug_id: number, comment_id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8080/comments/${bug_id}/${comment_id}`)
  }
  removeAllComment(bug_id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8080/comments/${bug_id}`)
  }

}