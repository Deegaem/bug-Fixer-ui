import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bug } from './bug';

@Injectable({
    providedIn: 'root'
})
export class BugsService {

    private _bug!: Bug;

    constructor(private http: HttpClient) { }
    public getBugs(): Observable<Bug[]> {
        return this.http.get<Bug[]>(`http://localhost:8080/bugs`);
    }

    public addBug(bug: Bug): Observable<Bug> {
        return this.http.post<Bug>(`http://localhost:8080/bugs`, bug);
    }

    public updateBug(bug_id: number, bug: Bug): Observable<Bug> {
        return this.http.put<Bug>(`http://localhost:8080/bugs/${bug_id}`, bug);
    }

    public removeBug(bug_id: number): Observable<{}> {
        return this.http.delete(`http://localhost:8080/bugs/${bug_id}`);
    }
    public _getbug(): Bug {
        return this._bug;
    }
    public _setbug(value: Bug) {
        this._bug = value;
    }
}