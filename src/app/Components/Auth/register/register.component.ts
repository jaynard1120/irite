import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
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
      password_confirmation: ['',[Validators.required,,Validators.minLength(8),Validators.maxLength(12)]]
    },{validator: this.confirmation('password','password_confirmation')})
  }
  icon = true;
  button = "Register"
  register(userData:any){
    this.icon = false;
    this.button = "Signing up..."
    this.service.register(userData).subscribe(res => {
      this.router.navigate(['login'])
    }
    )
    
  }

  //Validation
  confirmation(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
  
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
    }
  }
    
