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

  public getUsers():Observable<any> {
    return this.httpClient.get(this.url+"users")
    .pipe(catchError(this.errorHandler))
  }

  public login(userAccount: Login){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/login",userAccount)
  }

  public addStory(story:any){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/add_story",story)
  }

  errors = []
  json:any;
  public register(userData: any){
     return this.httpClient.post<any>("http://127.0.0.1:8000/api/register", userData)
    //  http://127.0.0.1:8000/api/
    //  .pipe(
    //    catchError(this.errorHandler)
    //  )
  }

  // .toPromise().then((data: any) => {
  // })
  public getError():Observable<any>{
    return this.httpClient.get(this.url)
    .pipe(catchError(this.errorHandler))
  }

logErrors: any;
errorHandler(error: HttpErrorResponse){
  // if (error.error instanceof ErrorEvent) {
  //   console.error('An error occurred:', error.error.message);
  // } else {
  //   console.error(error.error.message);
  //   console.error(error.error.errors);
  // }
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