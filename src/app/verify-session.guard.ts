import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VerifySessionGuard implements CanActivate {
  constructor(private router: Router){
              }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let routes = JSON.parse(localStorage.getItem('user'));
      if(routes != null || routes != undefined){
        this.router.navigate(['/test']);
        return false;
      }
    localStorage.removeItem('user');
    return true;
  }
}
