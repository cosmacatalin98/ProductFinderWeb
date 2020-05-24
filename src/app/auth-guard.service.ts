import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  opt = 0;

  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    switch(this.opt){
      case 0 :{
      alert('Nume de utilizator sau parola incorecte !')
      this.router.navigate(['']);
      return false;
      break;
      }

      case 1 :{
        this.router.navigate(['adminpage']);
        break;
      }

      case 2 :{
        return true;
        break;
      }
    }
  }

}