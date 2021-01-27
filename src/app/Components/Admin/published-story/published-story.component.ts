import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-published-story',
  template: `
  <table mdbTable>
  <thead class="black white-text">
    <tr>
      <th *ngFor="let head of headElements" scope="col">{{head}} </th>
    </tr>
  </thead>
  <tbody>
    <tr mdbTableCol *ngFor="let list of story">
      <td>{{list.title}}</td>
      <td>{{list.genre}}</td>
      <td>{{list.blurb}}</td>
      <td>{{list.created_at}}</td>
    </tr>
  </tbody>
</table>
  `,
  styles: [
    `table{width:90%;margin:auto;margin-top:2%}`
  ]
})
export class PublishedStoryComponent implements OnInit {
  @Input() story:any;
  
  constructor() { }

  ngOnInit(): void {

  }

  headElements = ["TITLE", "GENRE","BLURB","DATE"]
//   getDate(){
//     let date = new Date(this.story.created_at)
//     return date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()
//   }
}
