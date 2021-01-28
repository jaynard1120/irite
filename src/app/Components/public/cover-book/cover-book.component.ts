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
    console.log(this.cover)
  }
  button: String = "Add to Library"
  addToLibrary() {
    this.icon = false
    this.button = "Adding ..."
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
