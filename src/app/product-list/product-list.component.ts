import { Component, OnInit, Input } from "@angular/core";
import { Injectable } from "@angular/core";
import { ProductService } from "../product.service";
import { StoreService } from "../store.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = [];
  stores = [];
  name = "";
  pName = new FormControl("");

  constructor(
    private productService: ProductService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.productService
      .getProducts(this.name)
      .subscribe(data => (this.products = data));

    this.storeService.getAllStores().subscribe(data => (this.stores = data));
  }

  updateName() {
    this.name = this.pName.value;
    this.productService
      .getProducts(this.name)
      .subscribe(data => (this.products = data));
  }

  sortByPrice(){
        this.productService
      .getPriceSorted(this.name)
      .subscribe(data => (this.products = data));
  }

    sortByQuantity(){
        this.productService
      .getQuantitySorted(this.name)
      .subscribe(data => (this.products = data));
  }
}
