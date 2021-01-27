import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-published-admin',
  templateUrl: './published-admin.component.html',
  styleUrls: ['./published-admin.component.css']
})
export class PublishedAdminComponent implements OnInit {

  constructor(
    private service : ApiService
  ) { }
  fetched:Boolean = false;
  published:any
  ngOnInit(): void {
    this.service.getPublished().subscribe(res => {
      console.log(res)
      this.fetched = true
      this.published = res
    },error=>{
      console.log(error);
    })
  }
  headElements = ["TITLE", "GENRE","BLURB","DATE"]
}
