import { Product } from "./product";

export interface User {
  password : string;
  username : string;
  userId : number;
  favourite : Product;
}