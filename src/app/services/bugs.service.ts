import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../Domain-Models/bug';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BugsService {

    constructor(private http: HttpClient) { }
    public getBugs(): Observable<Bug[]> {
        return this.http.get<Bug[]>(`http://localhost:8080/bugs`)
            .pipe(catchError((error) => this.handleError(error))
            );
    }

    public addBug(bug: Bug): Observable<Bug> {
        return this.http.post<Bug>(`http://localhost:8080/bugs`, bug)
            .pipe(catchError((error) => this.handleError(error))
            );
    }

    public updateBug(bug_id: number, bug: Bug): Observable<Bug> {
        return this.http.put<Bug>(`http://localhost:8080/bugs/${bug_id}`, bug)
            .pipe(catchError((error) => this.handleError(error))
            );
    }

    public removeBug(bug_id: number): Observable<{}> {
        return this.http.delete(`http://localhost:8080/bugs/${bug_id}`)
            .pipe(catchError((error) => this.handleError(error))
            );
    }
    private handleError(error: Response): Observable<any> {
        console.error('AccountsService::handleError', error);
        return of();

    }

}