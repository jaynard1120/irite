import { ApiService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  userLogin(userInfo:any){
    console.log(userInfo.value);
    
  }
  user:any = [];
  person:any;
  login(data:any){
    // console.log(data)
    // if(data.username == "jaynard" && data.password == "senilla"){
    //   this.service.loggedIn = true;
    //   this.service.footer = true;
    //   this.router.navigate(['home'])
    // }
    // this.person = this.user.find((userInfo:any) => userInfo.email === data.email)
    // console.log(this.person)
    // if(this.person.email == data.email && this.person.password == data.password){
    //   this.router.navigate(['home'])
    // }else{
    //   alert(this.user)
    // }
    this.service.login(data).subscribe(res => {
      if(res[0] == "This credentials don't match!"){
        alert("Error in Logging in!")
      }else{
        if(res.user.usertype == "user"){
          console.log(res.user.usertype)
          this.router.navigate(['home'])
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
