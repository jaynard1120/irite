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

  listBooks = [
    {title: "The Kissing Booth", image: "../../../../assets/images/romance4.webp"},
    {title: "I still love him", image: "../../../../assets/images/romance2.jpg"},
    {title: "Firts are always messy", image: "../../../../assets/images/romance1.jpg"},
    {title: "His very personal assistant", image: "../../../../assets/images/romance3.jpg"},
    {title: "His very personal assistant", image: "../../../../assets/images/romance3.jpg"},
    {title: "His very personal assistant", image: "../../../../assets/images/romance3.jpg"}
  ]
  
}

