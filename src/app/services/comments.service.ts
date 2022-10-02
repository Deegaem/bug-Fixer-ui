import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../Domain-Models/comment';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  public getComments(bug_id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8080/comments/${bug_id}`)
      .pipe(map((resp: any[]) => {
        var group: any = {};
        resp.forEach(function (comment) {
          group[comment.parent_id] ||= [];
          group[comment.parent_id].push(comment);
        });
        console.log("groups: ", group);
        return group
      })
      );

  }

  public addComment(bug_id: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:8080/comments/${bug_id}`, comment)
      .pipe(map((resp: Comment) => { return resp })
      );
  }

  public updateComment(bug_id: number, comment_id: number, comment: Comment): Observable<Comment> {
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