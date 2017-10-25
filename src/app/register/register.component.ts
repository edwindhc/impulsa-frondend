import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../models/user'
import {RegisterService} from '../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public user = new User();
public data: any;
public object: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public Register:RegisterService
  ) {
this.user = new User()
  }

  ngOnInit() {
    console.log('registro cargado')
  }

  onSubmit(){
  this.Register.register(JSON.stringify(this.user)).subscribe(result => {
    this.data = result;

    let message = JSON.parse(this.data._body);
  console.log(message)
  localStorage.setItem('user', JSON.stringify(message));
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
