import { Component, OnInit, Input } from "@angular/core";
import { Injectable } from "@angular/core";
import { UserService } from "../user.service";
import { FormControl } from "@angular/forms";
import { AuthGuardService } from "../auth-guard.service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  users = [];
  uName = new FormControl(""); // FormControl pentru numele de utilizator
  uPass = new FormControl(""); // FormControl pentru parola

  constructor(
    private userService: UserService,
    private authGuardService: AuthGuardService
  ) {}

  // La initializarea componentei apelam serviciul pentru utilizatori
  ngOnInit() {
    this.userService.getUsers().subscribe(data => (this.users = data));
  }

  // Verificam daca datele introduse de catre utilizator sunt corecte
  // caz in care autorizam autentificarea
  checkUserInput() {
    var isValid = 0;
    for (let user of this.users) {
      if (
        user.username == this.uName.value &&
        this.uName.value == "cosmacatalin98" &&
        user.password == this.uPass.value &&
        this.uPass.value == "pass123"
      ) {
        isValid = 1;
        break;
      }
    }

    if (isValid != 1) {
      for (let user of this.users) {
        if (
          user.username == this.uName.value &&
          user.password == this.uPass.value
        ) {
          isValid = 2;
          break;
        }
      }
    }

    this.authGuardService.opt = isValid;
  }
}
