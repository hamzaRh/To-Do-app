import { Pipe, PipeTransform } from '@angular/core';
import { IEventResponse } from '../models/models';

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(value: IEventResponse[], args?: any): any {
    
      if (!value) return null;
      if (!args) return value;

      args = args.toLowerCase();

      return value.filter(function(item){
          return JSON.stringify(item.title).toLowerCase().includes(args);
      });
  }
}
