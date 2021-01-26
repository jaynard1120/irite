import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories:any;
  constructor(
    private service: ApiService
  ) { }
  ngOnInit(): void {
    this.service.getStory().subscribe(res => {
      this.stories = res
    })
  }

}
