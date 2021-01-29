import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
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
  // check:Boolean = false;
  userAccount: any;
  ngOnInit(): void {
    this.userAccount = this.fb.group({
      username: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
      dateOfBirth: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      check:['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      password_confirmation: ['',[Validators.required,,Validators.minLength(8),Validators.maxLength(12)]]
    },{validator: this.confirmation('password','password_confirmation')})
  }
  icon = true;
  button = "Register"
  unique = "";
  register(userData:any){
    this.icon = false;
    this.button = "Signing up..."
    this.service.register(userData).subscribe(res => {
      this.router.navigate(['login'])
    },error => {
      console.log(error)
      alert("Account already exist!")
      location.reload()
    }
    )
    
  }
  confirmation(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
  
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
    }
  }
    
