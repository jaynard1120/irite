import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({ providedIn: 'root' })
export class ApiService {

  listTitle: any

  url = "https://irite-web-app.herokuapp.com/api/"
  pageBase = false;
  origin:any;
  storyId:any;
  story:any;
  constructor(private httpClient: HttpClient) {
    
  }
  library:any;
  userId = localStorage.getItem('userId');
  // adminId = localStorage.getItem('adminId')

  public getList(){
    return this.listTitle
  }
  public getUsers():Observable<any> {
    return this.httpClient.get(this.url+"users")
    .pipe(catchError(this.errorHandler))
  }

  public login(userAccount: Login){
    return this.httpClient.post<any>(this.url+"login",userAccount)
  }

  public addStory(story:any){
    return this.httpClient.post<any>(this.url+`add_story/${this.userId}`,story)
    .pipe(catchError(this.errorHandler))
  }

  errors = []
  json:any;
  public register(userData: any){
     return this.httpClient.post<any>(this.url+"register", userData)
  }

  public getStory():Observable<any>{
    return this.httpClient.get(this.url+"story_to_be_publish")
  }
  
  public approve(id:any){
    // console.log(id)
    return this.httpClient.post<any>(this.url+`publish/${id}`,true)
  }

  public decline(story:any){
    return this.httpClient.post<any>(this.url+`decline/${story}`,true)
  }
  public getPublished():Observable<any>{
    return this.httpClient.get(this.url+"dashboard")
  }

  public getDeclined(){
    return this.httpClient.get(this.url+"declined")
  }

  public yourStory(user: any):Observable<any>{
    return this.httpClient.get(this.url+`published_story/${user}`)
  }

  public deleteStory(id:any){
    return this.httpClient.delete<any>(this.url+`delete_published/${id}`)
  }

  public deleteLibrary(id:any){
    return this.httpClient.delete<any>(this.url+`delete_from_library/${id}`)
  }

  public rate(id:any,story:any){
    return this.httpClient.post<any>(this.url+`review/${id}/${story}`,true)
  }

  public getRate():Observable<any>{
    return this.httpClient.get<any>(this.url+'review')
  }

  public addToLibrary(publishedStory:any){
    return this.httpClient.post<any>(this.url+`add_to_library/${publishedStory}/${this.userId}`,true)
  }

  public getLibrary():Observable<any>{
    return this.httpClient.get<any>(this.url+`library/${this.userId}`)
  }

  public searchGenre(genre:any):Observable<any>{
    return this.httpClient.get(this.url+`search/genre/${genre}`)
  }

  public search(title:any):Observable<any>{
    return this.httpClient.get(this.url+`search/${title}`)
  }

  public logout(){
    return this.httpClient.post<any>(this.url+`logout/${this.userId}`,true)
  }

logErrors: any;
errorHandler(error: HttpErrorResponse){
  this.logErrors = error.error.errors
  return throwError(error)
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