import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductService } from "./product.service";
import { UserService } from "./user.service";
import { ReactiveFormsModule } from "@angular/forms";
import { LogInComponent } from "./log-in/log-in.component";
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
      { path: "", component: LogInComponent },
      { path: "userpage", component: ProductListComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    LogInComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService, UserService, AuthGuardService]
})
export class AppModule {}
