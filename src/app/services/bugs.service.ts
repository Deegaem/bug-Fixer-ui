import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../Domain-Models/bug';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';

@Injectable()
export class BugsService {

    constructor(private http: HttpClient) { }
    public getBugs(): Observable<Bug[]> {
        return this.http.get<Bug[]>(`http://localhost:8080/bugs`)
            .pipe(map((resp: Bug[]) => { return resp })
            );
    }

    public addBug(bug: Bug): Observable<Bug> {
        return this.http.post<Bug>(`http://localhost:8080/bugs`, bug)
            .pipe(map((resp: Bug) => { return resp })
            );
    }

    public updateBug(bug_id: number, bug: Bug): Observable<Bug> {
        return this.http.put<Bug>(`http://localhost:8080/bugs/${bug_id}`, bug)
            .pipe(map((resp: Bug) => { return resp })
            );
    }

    public removeBug(bug_id: number): Observable<{}> {
        return this.http.delete(`http://localhost:8080/bugs/${bug_id}`)
    }

}