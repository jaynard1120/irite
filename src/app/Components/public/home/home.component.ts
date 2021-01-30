import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: ApiService
  ) { }
  fetched = false;
  listBooks: any;

  ngOnInit(): void {
    this.service.getLibrary().subscribe(res => {
      this.service.library = res
    })
    this.service.getPublished().subscribe(res => {
      this.service.listTitle = res;
      this.fetched = true;
      this.listBooks = this.service.getList();
    }, error => {
      console.log(error)
    })
  }

  search(data:any){
    this.listBooks = data
  }

  all(){
    this.service.getPublished().subscribe(res => {
      this.listBooks = res
    })
  }

  romance(){
    console.log("romance!");
    this.service.searchGenre("romance").subscribe(res => {
      this.listBooks = res
    })
  }

  fiction(){
    console.log("fiction!");
    this.service.searchGenre("fiction").subscribe(res => {
      this.listBooks = res
    })
  }

  horror(){
    console.log("horror!");
    this.service.searchGenre("horror").subscribe(res => {
      this.listBooks = res
    })
  }

  thriller(){
    console.log("thriller!");
    this.service.searchGenre("thriller").subscribe(res => {
      this.listBooks = res
    })
  }

  scifi(){
    console.log("scifi!");
    this.service.searchGenre("scifi").subscribe(res => {
      this.listBooks = res
    })
  }
  // listBooks = this.service.listBooks
}
