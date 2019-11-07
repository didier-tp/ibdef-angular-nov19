import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { LoginResponse } from '../common/data/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login(); //dans src/app/common/data
  message:string;

  onLogin(){
    /*
    this.message="login="+JSON.stringify(this.login);
    console.log(this.message); //+ {{message}} coté html
    */
    this.loginService.postLogin(this.login)
        .subscribe(
          (loginResponse:LoginResponse)=>{
                    this.analyserLoginReponse(loginResponse);
                },
          (err)=>{this.message="err:"+err;}
        );
  }

  analyserLoginReponse(loginResponse:LoginResponse){
    console.log(JSON.stringify(loginResponse));
    this.message=loginResponse.message;
    //...
  }

  constructor(private loginService : LoginService) {
    //injection de dépendance pour déléguer des appels
    this.login.username="admin1";
    this.login.password="pwdadmin1";
    this.login.roles="admin,user";
   }

  ngOnInit() {
  }

}
