import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
url='https://api.sampleapis.com/movies/'
  constructor(private http:HttpClient) { }
  getData(endPoint:any){
    let url=this.url+endPoint
    return this.http.get(url)
  }
}
