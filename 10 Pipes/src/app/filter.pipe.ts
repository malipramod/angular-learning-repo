import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  // ,pure:false //recalculate when anything changes changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string,propName:string): any {
    if(filterString.length===0){
      return value;
    }
    let resultArray=[];
    for(const item of value){      
      if(item[propName]===filterString){
        resultArray.push(item);
      }     
    }
    return resultArray;
  }

}
