import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tuiter';

  homeShow: boolean = true;
  userShow: boolean = false;
  postShow: boolean = false;

  ativaUsers() {
    this.homeShow = false;
    this.postShow = false;
    this.userShow = true;
  }

  ativaPosts() {
    this.homeShow = false;
    this.userShow = false;
    this.postShow = true;

  }
}
