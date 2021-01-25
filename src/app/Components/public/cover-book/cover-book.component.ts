import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cover-book',
  templateUrl: './cover-book.component.html',
  styleUrls: ['./cover-book.component.css']
})
export class CoverBookComponent implements OnInit {

  constructor() { }

  @Input() cover:any;

  ngOnInit(): void {
  }

}
