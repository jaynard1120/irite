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
  }

  approve(){
    this.service.approve(this.story.id).subscribe(res => {
      console.log(res)
    },error => {
      console.log(error)
    })
  }

  decline(){
    this.service.decline(this.story.id).subscribe(res => {
      console.log(res)
    },error => {
      console.log(error);
    })
  }
}
