import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'
import {Question} from '../models/question';
import {environment} from '../../environments/environment'
import 'rxjs/Rx';
@Injectable()
export class QuestionService {

  constructor(private http:Http){
  }
  getQuestion(id: Number): Observable<Response> {
    return this.http.get(environment.question + '/' + id).map((response: Response) => (response.json().answer));
  }
  getAnswer(id: Number): Observable<Response> {
    return this.http.get(environment.answer + '/' + id).map((response: Response) => (response.json().answer));
  }
}
