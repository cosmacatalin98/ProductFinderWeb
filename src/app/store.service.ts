import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Store } from "./store";
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class StoreService {
  private allStoresURL = "http://localhost:8080/allStores";

  constructor(private http: HttpClient) {}

  getAllStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.allStoresURL);
  }
}
