import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  addData(form) {
    // alert("entered")
   const obj = {
     name: form.name,
     email: form.email,
     designation:form.designation,
     signup:form.signup,
     module_name:form.module_name,
     permission_name:form.permission_name


   };
   console.log(obj);
   this.http.post(`${this.uri}/addData`, obj)
   .subscribe(res => console.log('Done'));
    
}
}
