import { ApiService } from 'src/app/Services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(
    private service: ApiService,
    private router: Router
  ) { }
@Input() story:any;
  ngOnInit(): void {
    // (<HTMLInputElement>document.getElementById('body')).innerHTML = this.story.story_flow
    
  }
  review(){
    console.log("Naa ko!")
    this.service.storyId = this.story.id
    this.service.pageBase = true
    this.service.story = this.story
    this.router.navigate(['admin/stories/review'])
  }
}
