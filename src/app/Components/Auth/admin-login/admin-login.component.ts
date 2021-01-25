import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private service: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  adminLogin(data:any){
    this.service.login(data).subscribe(res => {
      console.log(res)
      // if(res[0] == "This credentials don't match!"){
      //   alert("Error in Logging in!")
      // }else{
      //   alert("Success!")
      //   this.router.navigate(['create_stories'])
      // }
    })
  }

}
