import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onsale'
})
export class OnsalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    console.log('my pipe', value);
    if(value == true){
      return'Đang hạ giá';
    }else{
      return'No hạ giá';
    }
    return '';
  }

}
