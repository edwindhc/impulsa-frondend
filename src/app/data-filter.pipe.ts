import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    let search;
    let searchReturn;

    if (query) {
      searchReturn = [];
      search = _.filter(array, row => row.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
      if (search.length > 0) _.forEach(search, item => searchReturn.push(item));

      search = _.filter(array, row => row.title_test.toLowerCase().indexOf(query.toLowerCase()) > -1);
      if (search.length > 0) _.forEach(search, item => searchReturn.push(item));


      searchReturn = _.uniqBy(searchReturn, function (e) {
          return e;
        });
      return searchReturn;
    }
    return array;
  }

}
