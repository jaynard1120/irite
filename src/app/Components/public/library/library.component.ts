import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  fetched:Boolean = true;
  stories:any;
  constructor(
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.fetched = false;
    this.service.getLibrary().subscribe(res => {
      this.stories = res
      this.fetched = true;
    })
  }

}
