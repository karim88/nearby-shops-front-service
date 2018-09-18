import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};


  constructor(public auth: AuthenticationService,
              public toastr: ToastrService,
              public router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    const name = this.model.name;
    const email = this.model.email;
    const password = this.model.password;
    const password_confirm = this.model.password_confirm;
    const user = {
      email: email.toLowerCase(),
      password: password,
      name: name,
      password_confirm: password_confirm
    };
    this.auth.register(user).subscribe((d: any) => {
      const u = d.success.user;
      localStorage.setItem('accessToken', d.success.token);
      this.toastr.success(`Hello ${u.name.toUpperCase()}`);
      this.router.navigate(['/shops/nearby']);
    }, error1 => {
      this.toastr.error('Email or Password are incorrect!');
    });
  }
}
