import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class RegisterService {
  public data: any;
  constructor(private http: Http) { }

  register(body: any): Observable<Response> {
    console.log(body)
    return this.http.post('http://localhost:8000/api/register', body, this.options());
}

private extractData(res: Response) {
    let body = res.json();
  }
  private handleErrorObservable (error: Response | any) {
    return Observable.throw(error.message || error);
  }
  private options(){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    return new RequestOptions({ headers: headers });
  }
}
