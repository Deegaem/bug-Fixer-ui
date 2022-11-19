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

  comments: any[] = [{ "comment_id": 1, "name": "Mohamed", "comment_text": "root comment 1 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": null, },
  { "comment_id": 2, "name": "John", "comment_text": "root comment 2 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": null, },
  { "comment_id": 3, "name": "Mohamed", "comment_text": "child comment 1  comment_id 3 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": 1, },
  { "comment_id": 4, "name": "John", "comment_text": "child comment 1 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 2, "parent_id": 1, },
  { "comment_id": 5, "name": "Mohamed", "comment_text": "child comment 1 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 1, },
  { "comment_id": 6, "name": "John", "comment_text": "child comment 1  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 1, },
  { "comment_id": 7, "name": "Mohamed", "comment_text": "child comment 2 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 8, "name": "John", "comment_text": "child comment 2 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 9, "name": "Mohamed", "comment_text": "child comment 2 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 10, "name": "John", "comment_text": "child comment 11 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 11, },
  { "comment_id": 11, "name": "Mohamed", "comment_text": "root comment 11 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 1, "parent_id": null, },
  { "comment_id": 12, "name": "John", "comment_text": "root comment 12 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 1, "parent_id": null, },
  { "comment_id": 13, "name": "Mohamed", "comment_text": "child comment 12 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": 11, },
  { "comment_id": 14, "name": "John", "comment_text": "child child comment 3comment 12 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": 3, }
  ]

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