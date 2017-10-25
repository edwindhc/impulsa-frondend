import { Component, OnInit, DoCheck, EventEmitter } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import {MaterializeDirective} from "angular2-materialize";
import { Observable } from 'rxjs/Rx';
import {LoginService} from '../services/login.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public identity: any;
   public drop: boolean = true;
   public rolUser: any;
   public userImpulsa;
   public isAdmin: boolean;
  //  public dropdownActions = new EventEmitter<string|MaterializeAction>();
  constructor(public userService:LoginService,
              private router: Router,
              public menu:MenuService) { }

  ngOnInit() {
    if(this.identity){
      this.identity = this.userService.getUser().result
    }

  }

  ngDoCheck(){
    this.userImpulsa = JSON.parse(localStorage.getItem('user'));
    if (this.userImpulsa) {
      this.rolUser = this.userImpulsa.result.user[0].rol
      this.identity = true
      if(this.rolUser >= 1){
        this.isAdmin = true
      }
    }else{
      this.identity = false
    }
  }

  logout(){
    localStorage.removeItem('user')
  }

}
