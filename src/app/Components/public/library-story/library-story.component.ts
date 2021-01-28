import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-story',
  templateUrl: './library-story.component.html',
  styleUrls: ['./library-story.component.css']
})
export class LibraryStoryComponent implements OnInit {
  @Input() story: any
  constructor(
    private service: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  delete() {
    console.log(this.story)
    this.service.deleteLibrary(this.story.id).subscribe(res => {
      console.log(res)
      this.router.navigate(['home'])
    })
    // this.service.deleteLibrary(this.story.id).subscribe(res => {
    //   console.log(res)
    //   this.router.navigate(['library'])
    // })
  }
}
