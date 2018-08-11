import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, option?: string, by?:string): any {
    switch(option) {
      case "dept":
        if(by) {
          return value.sort((a,b) => a[by] > b[by]) 
        }
        return value.sort((a,b) => a.name > b.name);
      case "emp":
      if(by) {
        return value.sort((a,b) => a[by] > b[by]) 
      }
      return value.sort((a,b) => a.firstName > b.firstName);
    default:
        return new Error("option should be 'dept' or 'emp'");
    }
    return value.sort(value.name);
  }

}
