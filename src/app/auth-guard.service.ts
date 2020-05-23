import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  validUser = false;

  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.validUser) {
      return true;
    } else {
      alert('Nume de utilizator sau parola incorecte !')
      this.router.navigate(['']);
      return false;
    }
  }

}