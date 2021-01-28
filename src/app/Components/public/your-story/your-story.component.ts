import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-your-story',
  templateUrl: './your-story.component.html',
  styleUrls: ['./your-story.component.css']
})
export class YourStoryComponent implements OnInit {

  constructor() { }
@Input() story:any
  ngOnInit(): void {
  }

}
