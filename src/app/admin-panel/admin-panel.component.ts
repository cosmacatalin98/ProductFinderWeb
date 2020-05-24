import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ProductService } from "../product.service";
import { UserService } from "../user.service";
import { Product } from "../product";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.css"]
})
export class AdminPanelComponent implements OnInit {
  products = [];

  pId = new FormControl("");
  pSId = new FormControl("");
  pName = new FormControl("");
  pQuantity = new FormControl("");
  pUm = new FormControl("");
  pPrice = new FormControl("");

  pIdDelete = new FormControl("");


  prd: Product;
  prd1: Product;

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.productService
      .getProducts("")
      .subscribe(data => (this.products = data));
  }

  getAllProducts() {
    this.productService
      .getProducts("all")
      .subscribe(data => (this.products = data));
  }

  insertNewProduct() {
    this.prd = {
      productId: this.pId.value,
      storeId: this.pSId.value,
      productName: this.pName.value,
      um: this.pUm.value,
      price: this.pPrice.value,
      quantity: this.pQuantity.value
    };

    this.productService
      .insertProduct(this.prd)
      .subscribe(data => (this.prd1 = data));
  }

  updateProduct() {
    this.prd = {
      productId: this.pId.value,
      storeId: this.pSId.value,
      productName: this.pName.value,
      um: this.pUm.value,
      price: this.pPrice.value,
      quantity: this.pQuantity.value
    };

    this.productService
      .updateProduct(this.prd)
      .subscribe(data => (this.prd1 = data));
  }

  deleteProduct(){
    this.productService.deleteProduct(this.pIdDelete.value).subscribe();
  }
}
