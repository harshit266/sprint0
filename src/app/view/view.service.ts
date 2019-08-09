import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  viewData() {
    return this
           .http
           .get(`${this.uri}/viewData`);
  }
}
