import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthService { }