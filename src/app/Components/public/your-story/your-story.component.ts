import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-story',
  templateUrl: './your-story.component.html',
  styleUrls: ['./your-story.component.css']
})
export class YourStoryComponent implements OnInit {

  constructor(
    private service: ApiService,
    private router: Router
  ) { }
@Input() story:any
  ngOnInit(): void {
  }

  view(){
    this.service.story = this.story
    this.service.pageBase = true
    this.router.navigate(['review'])
  }
  remove(){
    this.service.deleteStory(this.story.id).subscribe(res => {
      this.router.navigate(['home'])
    })
  }
}
