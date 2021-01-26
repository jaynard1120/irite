import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private service : ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout().subscribe(res => {
      localStorage.removeItem('name');
      localStorage.removeItem('userId')
      this.router.navigate([''])
    },error=>{
      console.log(error)
    })
  }

}
