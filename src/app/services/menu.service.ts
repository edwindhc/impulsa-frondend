import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MenuService {

    public show: boolean = false;

    constructor(){
    }

    setValue(value: boolean) {
      this.show = value;
      console.log(this.show + 'valor')
    }
}
