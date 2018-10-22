import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, args?: any): string {

    if(value){
      return value.charAt(0).toUpperCase()+value.slice(1,value.length)
    }
   
  }

}
