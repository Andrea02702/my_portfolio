import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient, private router:Router) {
    let session:any =localStorage.getItem('session');
    if(session){
      session=JSON.parse(session);
    }
   }

  // connect to backend

  apiUrl ='http://localhost:3000/contact'
  apiUrl2 ='http://localhost:3000/adminpost'
  apiUrlImg = 'http://localhost:3000/galleria'



  // create data

  createData(data:any):Observable<any>
  {
    console.log(data,'create api')
    return this._http.post(`${this.apiUrl}`,data);
  }

  // token admin
session:any
 user:any[]=[
  {
    id:1,
    name:'andrea',
    token:'x'
  }
 ];
 login(token:string){
  let User = this.user.find(
    (u)=> u.token===token);
    if(User){
      this.session = User;
      localStorage.setItem('session',JSON.stringify(this.session));

    }
    return User;
 }

 //get all data 
 getALLdata():Observable<any>
 {
 
  return this._http.get(`${this.apiUrl2}`);
 
 }

 // delete data
 
 deleteData(id:any):Observable<any>
 {
  let ids = id;
  return this._http.delete(`${this.apiUrl2}/${ids}`);
 }

 // upload image
  
 postImg(file:any):Observable<any>
 {
   console.log(file,'post img')
   return this._http.post(`${this.apiUrl2}`,file);
 }

 //get image

 getImg(file:any):Observable<any>
 {
   console.log(file,'post img')
   return this._http.get(`${this.apiUrlImg}`,file);
 }

}
