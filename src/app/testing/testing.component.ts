import { Component, OnInit, Input } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Category} from '../models/category';
import { CategoryService } from '../services/category.service';
import {Test} from '../models/test';
import { TestService } from '../services/test.service';
import {DataTableModule} from "angular2-datatable";

import {ViewChild, Inject, Output, EventEmitter} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { MaterializeModule  } from 'angular2-materialize';
import { QuestionService } from '../services/question.service';

import { Router } from '@angular/router';


import swal from 'sweetalert2';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  public data: any = [];
  public testing: any;
  public testDetail: any;
  public testTotalQuestion: Number = 0;
  public rowsOnPage: number = 5;
  @Input() filterQuery: string = "";
  public sortOrder: string = "asc";
  public sortBy: string = "title";
  search: string ="";
  public filter: Number;
  @Output() datos = new EventEmitter();
  public fulldetails1: any;
public alldetail: any;
  public test: Test[];
  public prueba: boolean = false;
  constructor(public testService:TestService,
              public serviceQuestion: QuestionService,
              public router: Router) { }

  ngOnInit(){
    this.testService.getTest()
      .subscribe(data => {
        this.testing = data;
        // console.log(data[0].id)
        console.log(this.testing)
    })

  }

  send(value:string){
    console.log(value)
  }

  searchTest(){
    this.datos.emit({
      'filterQuery': this.filterQuery
    })
  }

  detailTest(id:number){
    // console.log(id)
    this.prueba = true;
    this.testService.getTestDetail(id)
      .subscribe(data => {
        this.testDetail = data;
        for (let i = 0; i < this.testDetail.length; i++) {
          this.serviceQuestion.getAnswer(this.testDetail[i].id)
            .subscribe(data => {
              this.alldetail = this.alldetail.concat(data)
              console.log(this.alldetail);
          })

        }

    })
    this.filter = id
    // this.testTotalQuestion = this.testDetail.length
    // console.log(this.testTotalQuestion)

  }

  // detailTest(id:number){
  //   // console.log(id)
  //   this.prueba = true;
  //   this.testService.getTestDetail(id)
  //     .subscribe(data => {
  //       this.testDetail = data;
  //       for (let i = 0; i < this.testDetail.length; i++) {
  //           console.log(this.testDetail[i].id);
  //       }
  //
  //   })
  //   this.filter = id
  //   // this.testTotalQuestion = this.testDetail.length
  //   // console.log(this.testTotalQuestion)
  //
  // }

  atras(event){
    console.log(event)
    this.prueba = event.atras
  }
}
