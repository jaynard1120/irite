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

  remove(){
    console.log(this.story.id)
    this.service.deleteStory(this.story.id).subscribe(res => {
      console.log(res)
      this.router.navigate(['home'])
    })
  }
}
