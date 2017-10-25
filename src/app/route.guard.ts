import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MenuService } from './services/menu.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RouteGuard implements CanActivate {

  private checkAuth: boolean = true;

  constructor(private router: Router,
              private menu: MenuService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let routes = JSON.parse(localStorage.getItem('user'));
    console.log(routes)
    if(routes == null || routes == undefined){
        this.router.navigate(['/']);
        return false;
    }
    console.log('ruta')

    // if(!this.checkAuth){
    //   localStorage.removeItem('user');
    //   // this.menu.setValue(false);
    //   window.location.reload();
    //   return false;
    // }
  }

}
