import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbutilityService {

  constructor(private http:HttpClient) { }
  sayHelloService():Observable<any>{
    return this.http.get("http://192.168.43.88:5200/sample");
  }
  getFood():Observable<any>{
    return this.http.get("http://192.168.43.88:5200/product");
  }
  insertone(name:string,rs:number,qu:number,t:number):any{
    return this.http.get("http://192.168.43.88:5200/insertfood?name="+name+"&rs="+rs+"&quantity="+qu+"&t="+t);
  }
  observeChange():any
  {
    return this.http.get("http://192.168.43.88:5200/observe");
  }
  chefworks():any
  {
    return this.http.get("http://192.168.43.88:5200/chefworks");
  }
  bool(tno:number):any
  {
    return this.http.get("http://192.168.43.88:5200/bool?tno="+tno);
  }
  enquire(tno:number):any{
    return this.http.get("http://192.168.43.88:5200/enquire?tno="+tno);
  }
  settrue(tno:number):any
  {
    return this.http.get("http://192.168.43.88:5200/settrue?tno="+tno);
  }
}
