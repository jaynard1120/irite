import { ApiService } from './Services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private service: ApiService
  ){}

  title = 'IRite';

  loggedIn = this.service.loggedIn;
}
