import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'
import {Category} from '../models/category';
import {environment} from '../../environments/environment'
@Injectable()
export class CategoryService {

  constructor(private http:Http){
  }
  getCategory(): Observable<Response> {
    return this.http.get(environment.category).map((response: Response) => response.json());
  }
}
