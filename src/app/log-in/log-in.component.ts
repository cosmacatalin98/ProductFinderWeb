import { Component, OnInit, Input } from "@angular/core";
import { Injectable } from "@angular/core";
import { UserService } from "../user.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  users = [];
  uName = new FormControl(""); // FormControl pentru numele de utilizator
  uPass = new FormControl(""); // FormControl pentru parola

  constructor(private userService: UserService) {}
  
  // La initializarea componentei apelam serviciul pentru utilizatori
  ngOnInit() {
    this.userService.getUsers().subscribe(data => (this.users = data));
  }

  // Verificam daca datele introduse de catre utilizator sunt corecte
  checkUserInput() {
    var success = false;
    for (let user of this.users) {
      if (user.username == this.uName.value && user.password == this.uPass.value) {
        success = true;
        break;
      }
    }

    if(success){
      console.log("Success !");
    }
    else
    {
      console.log("Failed !");
    }
  }
}