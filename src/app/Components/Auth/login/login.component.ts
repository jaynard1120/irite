import { ApiService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private service: ApiService,
    private router: Router
  ) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+localStorage.getItem('name')
    })
  }
  userLogin(userInfo:any){
    console.log(userInfo.value);
    
  }
  user:any = [];
  person:any;
  login(data:any){
    this.service.login(data).subscribe(res => {
      if(res[0] == "This credentials don't match!"){
        alert("Error in Logging in!")
      }else{
        if(res.user.usertype == "user"){
          localStorage.setItem("name",res.token)
          console.log(res.user.usertype)
          // this.router.navigate(['home'])
        }else{
          console.log(res.user.usertype)
          this.router.navigate(['create-stories'])
        }
      }
      
    })
  }
  

  ngOnInit(): void {
    // this.service.getUsers().subscribe(res => this.user = res)
  }

}
