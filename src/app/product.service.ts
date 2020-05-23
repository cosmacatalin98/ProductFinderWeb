import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import {HttpParams} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ProductService {

  private productUrl = 'http://localhost:8080/findByName/';

  constructor(private http: HttpClient) { }

  getProducts(name : string):Observable<Product[]>{
  
    const options = 
   { params: new HttpParams().set('name', name) };

    return this.http.get<Product[]>(this.productUrl, options);
  }

}