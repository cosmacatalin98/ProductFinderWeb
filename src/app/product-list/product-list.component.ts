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
  products = [];
  name = "";
  pName = new FormControl('');
  
  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService
      .getProducts(this.name)
      .subscribe(data => (this.products = data)); 
  }

  updateName(){
    this.name = this.pName.value;
      this.productService
      .getProducts(this.name)
      .subscribe(data => (this.products = data)); 
  }
}
