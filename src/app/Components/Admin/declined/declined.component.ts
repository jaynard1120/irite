import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declined',
  templateUrl: './declined.component.html',
  styleUrls: ['./declined.component.css']
})
export class DeclinedComponent implements OnInit {

  constructor(
    private service: ApiService
  ) { }
    story:any
  ngOnInit(): void {
    this.service.getDeclined().subscribe(res => {
      this.story = res
    },error => {
      console.log(error)
    })
  }

  headElements = ["TITLE", "GENRE","BLURB","DATE"]

}
