import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../comments/data-access/comment';
import { Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  comments: any[] = [];

  constructor(private http: HttpClient) {}

  public getCommentsByBugId(
    bug_id: number,
    parentId: any
  ): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(
        `http://localhost:8082/comments/get_all_by_bug_id/${bug_id}`
      )
      .pipe(
        map((resp: any[]) => {
          var group: any = {};
          resp.forEach(function (comment) {
            group[comment.parent_id] ||= [];
            group[comment.parent_id].push(comment);
          });
          if (group[parentId] === undefined) {
            return [];
          } else {
            return group[parentId];
          }
        })
      );
  }
  /*   public getComments(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8082/comments`)
      .pipe(map((resp: any[]) => {
        return resp
      })
      );

  } */
  public getComment(bug_id: number, comment_id: number): Observable<Comment> {
    return this.http
      .get<Comment>(`http://localhost:8082/comments/${bug_id}/${comment_id}`)
      .pipe(
        map((resp: Comment) => {
          return resp;
        })
      );
  }

  public addComment(comment: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8082/comments`, comment).pipe(
      map((resp: Comment) => {
        return resp;
      })
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

  public updateComment(comment: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8082/comments`, comment).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  public removeCommentById(comment_id: number): Observable<{}> {
    return this.http
      .delete(`http://localhost:8082/comments/${comment_id}`)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }
  public removeCommentsByParentId(comment_id: number): Observable<{}> {
    return this.http
      .delete(`http://localhost:8082/comments/${comment_id}`)
      .pipe(
        concatMap((id) => {
          return this.http.delete(
            `http://localhost:8082/comments/delete_all_by_parent_id/${id}`
          );
        })
      );
  }
  public removeCommentsByBugId(bug_id: number): Observable<{}> {
    return this.http.delete(
      `http://localhost:8082/comments/delete_all_by_bug_id/${bug_id}`
    );
  }
}
