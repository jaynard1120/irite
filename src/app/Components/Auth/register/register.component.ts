import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { catchError } from 'rxjs/operators';
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
    private service: ApiService,
    private fb: FormBuilder
  ) { }
  userAccount: any;
  ngOnInit(): void {
    this.userAccount = this.fb.group({
      username: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
      dateOfBirth: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      password_confirmation: ['',Validators.required]
    })
  }
  // register(userData:any){
  //   console.log(userData)
  // }
  register(userData:any){
    this.service.register(userData).subscribe(res => {

    }
    )
    // this.router.navigate(['login'])
    // this.service.getError().subscribe((res) => console.log(res)
    
  }

  //Validation
  input(){
    return this.userAccount.controls;
  }

  
}
