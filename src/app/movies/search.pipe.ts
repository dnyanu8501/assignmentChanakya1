import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchvalue: any): any {
if(!searchvalue){
  return data
}

    let searchOriginal=searchvalue.toLowerCase()
    return data.filter((ele:any)=>{
      return JSON.stringify(ele).toLowerCase().includes(searchOriginal)
    })
  }

}
