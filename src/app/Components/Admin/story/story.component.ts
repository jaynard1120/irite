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
    (<HTMLInputElement>document.getElementById('body')).innerHTML = this.story.story_flow
  }
icon:Boolean = true;
declineIcon = true
approveBtn = "APPROVE"
declineBtn = "DECLINE"
  approve(){
    this.icon = false
    this.approveBtn = "APPROVING..."
    this.service.approve(this.story.id).subscribe(res => {
      console.log(res)
      this.router.navigate(['admin/published'])
    },error => {
      console.log(error)
    })
  }

  decline(){
    this.declineIcon = false
    this.declineBtn = "DECLINING.."
    this.service.decline(this.story.id).subscribe(res => {
      console.log(res)
      this.router.navigate(['admin/declined'])
    },error => {
      console.log(error);
    })
  }
}
