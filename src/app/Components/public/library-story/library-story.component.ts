import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library-story',
  templateUrl: './library-story.component.html',
  styleUrls: ['./library-story.component.css']
})
export class LibraryStoryComponent implements OnInit {
  @Input() story:any
  constructor() { }

  ngOnInit(): void {
  }

}
