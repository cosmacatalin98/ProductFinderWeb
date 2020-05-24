import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Product } from "./product";
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class ProductService {
  private productUrl = "http://localhost:8080/findByName/";
  private insertProductUrl = "http://localhost:8080/insertNewProduct";
  private updateProductUrl = "http://localhost:8080/updateProduct";
  private deleteProductUrl = "http://localhost:8080/deleteProduct";

  constructor(private http: HttpClient) {}

  getProducts(name: string): Observable<Product[]> {
    if (name == "all") {
      return this.http.get<Product[]>("http://localhost:8080/allProducts");
    }

    const options = { params: new HttpParams().set("name", name) };

    return this.http.get<Product[]>(this.productUrl, options);
  }

  insertProduct(product: Product): Observable<Product> {
    const options = { responseType: "text" };
    return this.http.post<Product>(this.insertProductUrl, product, options);
  }

  updateProduct(product: Product): Observable<Product> {
    const options = { responseType: "text" };
    return this.http.put<Product>(this.updateProductUrl, product, options);
  }

  deleteProduct(id: number): Observable<{}> {
    const options = { responseType: "text" };
    const url = `${this.deleteProductUrl}/${id}`;
    return this.http.delete<Product>(url, options);
  }
}
