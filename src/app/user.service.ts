import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import {HttpParams} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  private userURL = 'http://localhost:8080/allUsers';

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.userURL);
  }

}