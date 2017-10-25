import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginService} from '../services/login.service'
import { MenuService } from '../services/menu.service';
import {User} from '../models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public user = new User();
  public data: any;
  public object: any;
  public identity;
  constructor(private router: Router,
              public LoginUser:LoginService,
              public menu:MenuService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.LoginUser.login(JSON.stringify(this.user)).subscribe(result => {
      this.data = result;
      this.identity = this.data;

    let message = JSON.parse(this.data._body);
    console.log(message)
    localStorage.setItem('user', JSON.stringify(message));
    this.menu.setValue(true);
    this.router.navigate(['/test']);
    },
    error =>{

    try{
      let message = JSON.parse(error._body);
      if(message.code == 201)
         console.log(message);
      else if(message.code == 202)
         console.log('','It seems that your email is not verified, please check your inbox and try again','warning');
      else
         console.log('','The password entered is incorrect','warning');
       }
    catch(err){
       console.log('', 'No connection with server', 'error')
     }
    });
    }

}
