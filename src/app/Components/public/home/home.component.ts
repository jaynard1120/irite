import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: ApiService
  ) { }
listBooks:any
  ngOnInit(): void {
    this.service.getPublished().subscribe(res => {
      this.listBooks = res
    },error => {
      console.log(error)
    })
  }
  // listBooks = this.service.listBooks
}
