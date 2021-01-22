import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {
  // constructor(private httpClient: HttpClient) { }
  
  // public getUsers(url:any):Observable<any> {
  //   return this.httpClient.get(url)
  // }
  // public register(data:any):Observable<any> {
  //   return this.httpClient.post("http://127.0.0.1:8000/api/register",data)
  // }
  loggedIn: boolean = false;
  footer: boolean = true;
}

