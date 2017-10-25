import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {
  public identity: any;
  public data: any;
  constructor(private http: Http) { }

  login(body: any): Observable<Response> {
    console.log(body)
    return this.http.post('http://localhost:8000/api/authenticate', body, this.options());
}

getUser(){
  let identity = JSON.parse(localStorage.getItem('user'))
  if(identity){
    this.identity = identity
  } else{
    this.identity = null
  }
  return this.identity
}

private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleErrorObservable (error: Response | any) {
    return Observable.throw(error.message || error);
  }
  private options(){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    return new RequestOptions({ headers: headers });
  }
}
