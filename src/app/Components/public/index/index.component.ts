import { ApiService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private service: ApiService,
    private router: Router
  ) { }

  url = "http://127.0.0.1:8000/api/home"
  users:any;

  adminToken = localStorage.getItem("admin")
  userToken = localStorage.getItem("name")
    ngOnInit(): void {
      if(this.adminToken != null){
        this.router.navigate(['admin/dashboard'])
      }
      if(this.userToken != null){
        this.router.navigate(['home'])
      }
    }
  searchTitle:any
  titles: any
  search(){
    this.service.search(this.searchTitle).subscribe(res => {
      this.titles = res
    },error => {
      console.log("Did not exist!")
    })
  }
}
