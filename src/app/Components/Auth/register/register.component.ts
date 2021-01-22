import { ApiService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ApiService
  ) { }
  
  ngOnInit(): void {
    
  }
  register(userData:any){
    console.log(userData)
  }
  // register(userData:any){
  //   console.log(userData);
  //   this.service.register(userData).subscribe(res => console.log(res))
  // }


  
}
