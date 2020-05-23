import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import {ReactiveFormsModule} from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, TopBarComponent, ProductListComponent, LogInComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService, ]
})
export class AppModule { }
