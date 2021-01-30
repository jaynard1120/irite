import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover-book',
  templateUrl: './cover-book.component.html',
  styleUrls: ['./cover-book.component.css']
})
export class CoverBookComponent implements OnInit {

  constructor(
    private service: ApiService,
    private router: Router
  ) { }

  @Input() cover: any;
  icon: Boolean = true
  ngOnInit(): void {
    console.log("Hello there!")
  }
  button: String = "Add to Library"
  addToLibrary() {
    let exist: Boolean = false;
    this.service.library.forEach((data: any) => {
      if (data.title == this.cover.title) {
        exist = true;
      }
    })
    this.icon = false
    this.button = "Adding ..."
    if (exist) {
      alert("Cannot add..This is already added in your library!")
      this.icon = true
      this.button = "Add to Library"
    } else {
      this.service.addToLibrary(this.cover.id).subscribe(res => {
        console.log(res)
        this.icon = true
        this.button = "Added to Library"
        this.router.navigate(['library'])
      }, error => {
        console.log(error)
      })
    }

  }
}
