import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Bug } from "./bug";
import { BugsService } from "src/app/core/data-access/bugs.service";

@Injectable()
export class Bugsresolver implements Resolve<Bug[]>{
    constructor(private bugsService: BugsService) { }
    resolve(): Observable<Bug[]> {
        return this.bugsService.getBugs();
    }
}