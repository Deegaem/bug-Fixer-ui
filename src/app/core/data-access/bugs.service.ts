import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Bug } from 'src/app/_bugs/data-access/bug';

@Injectable({
  providedIn: 'root',
})
export class BugsService {
  private _bug!: Bug;

  constructor(private http: HttpClient) {}
  public getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(`http://localhost:8081/bugs`).pipe(
      map((resp: Bug[]) => {
        return resp;
      })
    );
  }

  public getBug(bug_id: number): Observable<Bug> {
    return this.http.get<Bug>(`http://localhost:8081/bugs/${bug_id}`).pipe(
      map((resp: Bug) => {
        return resp;
      })
    );
  }

  public addBug(bug: any): Observable<any> {
    console.log('bug from bug service', bug);
    return this.http.post<any>(`http://localhost:8081/bugs`, bug).pipe(
      map((resp: Bug) => {
        return resp;
      })
    );
  }

  public updateBug(bug: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8081/bugs`, bug).pipe(
      map((resp: Bug) => {
        return resp;
      })
    );
  }

  public removeBug(bug_id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8081/bugs/${bug_id}`).pipe(
      concatMap((id) => {
        return this.http.delete(
          `http://localhost:8082/comments/delete_all_by_bug_id/${id}`
        );
      })
    );
  }
}
