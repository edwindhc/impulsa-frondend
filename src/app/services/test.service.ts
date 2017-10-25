import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'
import {Test} from '../models/test';
import {environment} from '../../environments/environment'
import 'rxjs/Rx';
@Injectable()
export class TestService {

  constructor(private http:Http){
  }
  getTest(): Observable<Response> {
    return this.http.get(environment.test).map((response: Response) => (response.json().test));
  }

  getTestDetail(id: Number): Observable<Response> {
    return this.http.get(environment.test + '/' + id).map((response: Response) => (response.json().question));
  }
}
