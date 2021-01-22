import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listBooks = [
    {title: "The Kissing Booth", image: "../../../../assets/images/romance4.webp"},
    {title: "I still love him", image: "../../../../assets/images/romance2.jpg"},
    {title: "Firts are always messy", image: "../../../../assets/images/romance1.jpg"},
    // {title: "His very personal assistant", image: "../../../../assets/images/romance3.jpg"}
  ]
}
