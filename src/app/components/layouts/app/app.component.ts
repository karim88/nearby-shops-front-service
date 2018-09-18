import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  current_url: string;

  constructor(public router: Router) { }

  ngOnInit() {
    this.current_url = this.router.url;
  }

  /**
   * Change route url to be for active class
   */
  changeRoute () {
    this.current_url = this.router.url;
  }


}
