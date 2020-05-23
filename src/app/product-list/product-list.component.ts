import { Component, OnInit, Input } from "@angular/core";
import { Injectable } from "@angular/core";
import { ProductService } from "../product.service";
import {FormControl} from '@angular/forms';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  public products = [];
  public name = "";
  pName = new FormControl('');
  
  constructor(
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this._productService
      .getProducts(this.name)
      .subscribe(data => (this.products = data)); 
  }

  updateName(){
    this.name = this.pName.value;
        this._productService
      .getProducts(this.name)
      .subscribe(data => (this.products = data)); 
  }
}
