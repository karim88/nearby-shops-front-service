import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};


  constructor(public auth: AuthenticationService,
    public toastr: ToastrService,
    public router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    const email = this.model.email;
    const password = this.model.password;
    this.auth.login(email, password).subscribe((d: any) => {
      const user = d.success.user;
      localStorage.setItem('accessToken', d.success.token);
      this.toastr.success(`Hello ${user.name.toUpperCase()}`);
      this.router.navigate(['/shops/nearby']);
    }, error1 => {
      this.toastr.error('Email or Password are incorrect!');
    });
  }

}
