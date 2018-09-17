import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
    <p>
      logout works!
    </p>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/auth/login']);
  }

}
