import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, option?: string, by?:string): any {

    if(!option) {
      throw(new Error("option should be 'dept' or 'emp'"));
    } else {
      if(by) {
        return value.sort((a,b) => a[by] > b[by]);
      } else {
        if(option === 'dept') {
          return value.sort((a,b) => a.name > b.name);
        } else {
          return value.sort((a,b) => a.firstName > b.firstName); 
        }
      }
    }
  }

}
