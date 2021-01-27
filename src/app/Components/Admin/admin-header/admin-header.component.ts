import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    private service : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.logout().subscribe(res => {
      localStorage.removeItem('admin');
      this.router.navigate(['login'])
      localStorage.removeItem('userId')
    },error=>{
      console.log(error)
    })
  }
}
