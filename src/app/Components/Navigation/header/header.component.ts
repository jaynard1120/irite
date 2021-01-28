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
    private router: Router,
  ) { }

  searchTitle:any
  ngOnInit(): void {
  }

  // search(){
  //   this.service.search(this.searchTitle).subscribe(res => {
  //     console.log(res)
  //     this.service.listTitle = res
  //   })
  // }
  userName = localStorage.getItem('firstname')
  logout(){
    this.service.logout().subscribe(res => {
      localStorage.removeItem('name');
      localStorage.removeItem('userId')
      localStorage.removeItem('firstname')
      this.router.navigate([''])
    },error=>{
      console.log(error)
    })
  }

}
