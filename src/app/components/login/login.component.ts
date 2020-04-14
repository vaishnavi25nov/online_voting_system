import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  login(userName: string, password: string) {
    if (userName == "admin" && password == "password") {
      this.route.navigate(['adminHome']);
    } else if (userName == "citizen" && password == "password") {
      this.route.navigate(['citizenHome']);
    }
  }

}
