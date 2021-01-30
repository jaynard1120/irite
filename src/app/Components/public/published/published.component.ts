import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {

  fetched = false;
  constructor(
    private service: ApiService
  ) { }
stories: any;
  ngOnInit(): void {
    this.service.yourStory(this.service.userId).subscribe(res => {
      this.fetched = true;
      this.stories = res
    })
  }
  listBooks = this.service.listBooks
}
