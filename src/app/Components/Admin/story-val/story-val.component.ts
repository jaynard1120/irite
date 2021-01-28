import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-val',
  templateUrl: './story-val.component.html',
  styleUrls: ['./story-val.component.css']
})
export class StoryValComponent implements OnInit {

  constructor(
    private service: ApiService,
    private router: Router
  ) { }
    story:any = this.service.story
  ngOnInit(): void {
    console.log(this.service.storyId)
    if(!this.service.pageBase){
      this.router.navigate(['admin/dashboard'])
    }
    (<HTMLInputElement>document.getElementById('story')).innerHTML = this.story.story_flow
  }
  icon:Boolean = true;
  declineIcon = true
  approveBtn = "APPROVE"
  declineBtn = "DECLINE"
  storyId = this.service.story
  // pageBase = this.service.pageBase
    approve(){
      this.icon = false
      // console.log(this.storyId)
      this.approveBtn = "APPROVING..."
      this.service.approve(this.storyId.id).subscribe(res => {
        console.log(res)
        this.router.navigate(['admin/published'])
      },error => {
        console.log(error)
      })
      // this.service.approve(this.storyId.id)
    }
  
    decline(){
      this.declineIcon = false
      this.declineBtn = "DECLINING.."
      this.service.decline(this.storyId.id).subscribe(res => {
        console.log(res)
        this.router.navigate(['admin/declined'])
      },error => {
        console.log(error);
      })
    }

    back() {
      window.history.back()
    }
}
