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

  ngOnInit(): void {
    // this.service.getUsers(this.url).subscribe(res => this.users = res)
  }
  searchTitle:any
  search(){
    console.log(this.searchTitle)
    this.service.search(this.searchTitle).subscribe(res => {
      console.log(res)
    },error => {
      console.log(error)
    })
    // this.router.navigate(['login'])
  }
}
