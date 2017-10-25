import { Component, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Category} from '../models/category';
import { CategoryService } from '../services/category.service';
import {DataTableModule} from "angular2-datatable";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public data: any = [];
  public categories: any;
  public rowsOnPage: number = 5;
  public filterQuery: string = "";
  public sortOrder: string = "asc";
  public sortBy: string = "title";
  public filtro:String;

  constructor(public categoryService:CategoryService) { }

  ngOnInit() {
      this.categoryService.getCategory()
        .subscribe((data1) => {
          this.categories = data1;
          console.log(data1)
          for (let category of this.categories.category) {
            this.data.push({
              id: category.id,
              title: category.title
            });
          }
      });

    }

    clearSearch() {
  this.filterQuery = "";
}
  send(value:string){
    this.filtro = value
    console.log(this.filtro)
  }

  mostrarfiltro(){
    console.log(this.filtro)
  }

  verFilter(event){
    this.filtro = event.filterQuery
  }
}
