import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(
    private service: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) { }
  user: any;
  story: any = this.service.story
  origin: any = this.service.origin
  ngOnInit(): void {
    this.user = this.fb.group({
      rate: new FormControl('', [Validators.min(0), Validators.max(5)])
    })
    if (!this.service.pageBase) {
      this.router.navigate(['library'])
    }
    (<HTMLInputElement>document.getElementById('story')).innerHTML = this.story.story_flow
  }
  rate(data: any) {
    this.service.rate(this.story.reader_id,this.story.id).subscribe(res => {
    })
  }

  back() {
    window.history.back()
  }
}
