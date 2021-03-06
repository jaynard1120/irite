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
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('name'),
      AdminAuth: 'Bearer'+localStorage.getItem("admin")
    })
  }
  userLogin(userInfo: any) {
    console.log(userInfo.value);

  }
  user: any = [];
  error = false;
  person: any;
  icon = true;
  button = "Login"
  login(data: any) {
    this.button = "Logging in...";
    this.icon = false;
    this.service.login(data).subscribe(res => {
      if (res[0] == "This credentials don't match!") {
        this.error = true;
        this.button = "Login";
        this.icon = true;
      } else {
        if (res.user.usertype == "user") {
          localStorage.setItem("name", res.token)
          this.service.userId = res.user.id
          localStorage.setItem('userId',res.user.id)
          localStorage.setItem('firstname',res.user.username)
          console.log(res)
          console.log(res.user.usertype)
          this.router.navigate(['home'])
        } else {
          localStorage.setItem("admin", res.token)
          localStorage.setItem('userId',res.user.id)
          console.log(res)
          console.log(res.user.usertype)
          this.router.navigate(['admin/dashboard'])
        }
      }

    })
  }

adminToken = localStorage.getItem("admin")
userToken = localStorage.getItem("name")
  ngOnInit(): void {
    this.service.getDeclined().subscribe(res => {
      localStorage.removeItem("declined")
      localStorage.setItem("declined", String(Object.keys(res).length))
    })
    this.service.getPublished().subscribe(res => {
      localStorage.removeItem("published")
      localStorage.setItem("published",String(Object.keys(res).length))
    })
    this.service.getUsers().subscribe(res => {
      localStorage.removeItem("users")
      localStorage.setItem("users",String(Object.keys(res).length))
    })
    console.log(this.adminToken)
    if(this.adminToken != null){
      this.router.navigate(['admin/dashboard'])
    }
    if(this.userToken != null){
      this.router.navigate(['home'])
    }
  }

}
