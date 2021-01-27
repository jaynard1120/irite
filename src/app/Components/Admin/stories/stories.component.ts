import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories:any;
  fetched = false;
  timer = 30;
  constructor(
    private service: ApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.service.getStory().subscribe(res => {
      this.stories = res
      this.fetched = true;
    })
  }

}
