import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private service : ApiService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout().subscribe(res => {
      localStorage.removeItem('name');
      console.log(res)
    },error=>{
      console.log(error)
    })
  }

}
