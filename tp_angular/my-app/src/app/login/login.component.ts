import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login(); //dans src/app/common/data
  message:string;

  onLogin(){
    this.message="login="+JSON.stringify(this.login);
    console.log(this.message); //+ {{message}} coté html
  }

  constructor() { }

  ngOnInit() {
  }

}
