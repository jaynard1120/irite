import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-library-story',
  templateUrl: './library-story.component.html',
  styleUrls: ['./library-story.component.css']
})
export class LibraryStoryComponent implements OnInit {
  @Input() story: any

  constructor(
    private service: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  user:any
  ngOnInit(): void {
    this.user = this.fb.group({
      rate : new FormControl('',[Validators.min(0),Validators.max(5)])
    })
  }

  show(){
    this.service.story = this.story
    this.service.pageBase = true
    this.service.origin = "library"
    this.router.navigate(["review"])
  }

  delete() {
    this.service.deleteLibrary(this.story.id).subscribe(res => {
      this.router.navigate(['home'])
    })
  }
}
