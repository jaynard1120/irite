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
  login(data:any){
    console.log(data)
    if(data.username == "jaynard" && data.password == "senilla"){
      this.service.loggedIn = true;
      this.service.footer = true;
      this.router.navigate(['home'])
    }
    
  }
  

  ngOnInit(): void {
  }

}
