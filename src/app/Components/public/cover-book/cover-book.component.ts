import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-cover-book',
  templateUrl: './cover-book.component.html',
  styleUrls: ['./cover-book.component.css']
})
export class CoverBookComponent implements OnInit {

  constructor(
    private service: ApiService
  ) { }

  @Input() cover:any;

  ngOnInit(): void {
    console.log(this.cover)
  }

  addToLibrary(){
    this.service.addToLibrary(this.cover.id).subscribe(res => {
      console.log(res)
    },error => {
      console.log(error)
    })
  }
}
