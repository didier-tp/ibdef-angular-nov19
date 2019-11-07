import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse } from '../data/loginResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _headers = 
      new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http :HttpClient) { }

  public postLogin(login: Login): Observable<LoginResponse>{
    let wsUrl : string = "./login-api/public/auth" ; 
    //avec ng serve --proxy-config proxy.conf.json
    return this.http.post<LoginResponse>(wsUrl ,
                      login,
                      {headers: this._headers} );
  }
}
