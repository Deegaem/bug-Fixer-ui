import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../comments/data-access/comment';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: any[] = [];

  constructor(private http: HttpClient) { }

/*   public getComments(bug_id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8082/comments/${bug_id}`)
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

  } */
  public getComments(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8082/comments`)
      .pipe(map((resp: any[]) => {
        var group: any = {};
        resp.forEach(function (comment) {
          group[comment.parent_id] ||= [];
          group[comment.parent_id].push(comment);
        });
        console.log("groups from service datei: ", group);
        return group
      })
      );

  }
  public getComment(bug_id: number, comment_id: number): Observable<Comment> {
    return this.http.get<Comment>(`http://localhost:8082/comments/${bug_id}/${comment_id}`)
      .pipe(map((resp: Comment) => { return resp })
      );

  }

  public addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:8082/comments/`, comment)
      .pipe(map((resp: Comment) => { return resp })
      );
    /* toDo:
    creating comment: 
    - perentID is allways null
    - userId from the cookies
    - bugID from the params.id
    use the spread operator to add the created comment to the bug comments Array in a createdlocalcomment function which will be invoked in the response
    
    replying comment: 
    - perentID is comment_id
    - userId from the cookies
    - bugID from the params.id
    use the spread operator to add the created comment to the bug comments Array in a createdlocalcomment function which will be invoked in the response */
  }

  public updateComment(bug_id: number, comment_id: number, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8082/comments/${bug_id}/${comment_id}`, comment)
      .pipe(map((resp: Comment) => { return resp })
      );
  }

  public removeComment(bug_id: number, comment_id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8082/comments/${bug_id}/${comment_id}`)
  }
 public removeAllComment(bug_id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8082/comments/${bug_id}`)
  }

  filterComments(pid: any): any[] {
    var group: any = {};
    this.comments.forEach(function (comment) {
      group[comment.parent_id] ||= [];
      group[comment.parent_id].push(comment);
    });
    if (group[pid] === undefined) {
      return [];
    } else { return group[pid]; }

  }
}