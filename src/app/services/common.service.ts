import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
url;
  constructor(public httpclient :HttpClient ) { }
  getdata(){
    this.url="/assets/Jsonfiles/data.json";
    return this.httpclient.get(this.url)
  }
  postdata(data){
    this.url="";
    return this.httpclient.post(this.url,data)
  }
  putdata(data){
    this.url="";
    return this.httpclient.put(this.url,data)
  }
}
