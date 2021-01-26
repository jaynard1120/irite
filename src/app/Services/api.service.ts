import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({ providedIn: 'root' })
export class ApiService {
  url = "https://irite-web-app.herokuapp.com/api/"
  constructor(private httpClient: HttpClient) {
    // this.httpClient.post()
  }

  userId = localStorage.getItem('userId');
  // adminId = localStorage.getItem('adminId')

  public getUsers():Observable<any> {
    return this.httpClient.get(this.url+"users")
    .pipe(catchError(this.errorHandler))
  }

  public login(userAccount: Login){
    return this.httpClient.post<any>(this.url+"login",userAccount)
  }

  public addStory(story:any){
    return this.httpClient.post<any>(this.url+`add_story/${this.userId}`,story)
  }

  errors = []
  json:any;
  public register(userData: any){
     return this.httpClient.post<any>(this.url+"register", userData)
  }

  public getStory():Observable<any>{
    return this.httpClient.get(this.url+"get_story")
  }

  public logout(){
    console.log(this.userId)
    return this.httpClient.post<any>(this.url+`logout/${this.userId}`,true)
  }

logErrors: any;
errorHandler(error: HttpErrorResponse){
  this.logErrors = error.error.errors
  return error.error.errors
}


  loggedIn: boolean = false;
  footer: boolean = true;

  listBooks = [
    { title: "The Kissing Booth", image: "../../../../assets/images/romance4.webp" },
    { title: "I still love him", image: "../../../../assets/images/romance2.jpg" },
    { title: "Firts are always messy", image: "../../../../assets/images/romance1.jpg" },
    { title: "His very personal assistant", image: "../../../../assets/images/romance3.jpg" },
    { title: "His very personal assistant", image: "../../../../assets/images/romance3.jpg" },
    { title: "His very personal assistant", image: "../../../../assets/images/romance3.jpg" }
  ]

}

export interface Login{
  email: String,
  password: String
}