import { Component, OnInit, Input } from '@angular/core';
import {ViewChild, Inject, Output, EventEmitter} from "@angular/core";
import {Question} from '../models/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-testdetail',
  templateUrl: './testdetail.component.html',
  styleUrls: ['./testdetail.component.css']
})
export class TestdetailComponent implements OnInit {
@Input() filter: Number = 0;
@Output() datos = new EventEmitter();
public prueba: boolean = true;
@Input() testDetail: any = [];
@Input() testTotalQuestion: Number = 0;
public fulldetails: any;

public rowsOnPage: number = 5;
public filterQuery: string = "";
public sortOrder: string = "asc";
public sortBy: string = "title";
  constructor(public serviceQuestion: QuestionService) { }

  ngOnInit() {

  }

  comenzar(){
    console.log(this.testDetail)
    for (let i = 0; i < this.testDetail.length; i++) {
        // console.log(this.testDetail[i].id);
        this.serviceQuestion.getQuestion(this.testDetail[i].id)
          .subscribe(data => {
            this.fulldetails = data;
            console.log(this.fulldetails)
        })
    }
  }

  responder(id:Number){
        // console.log(this.testDetail[i].id);
        this.serviceQuestion.getAnswer(id)
          .subscribe(data => {
            this.fulldetails = data;
            console.log(this.fulldetails)
        })

  }


  atras(){
    this.prueba = false
    this.datos.emit({
      'atras': this.prueba
    })
  }

}
