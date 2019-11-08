import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map , tap } from 'rxjs/operators';
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
                      {headers: this._headers} )
                .pipe(
                    map( (r : LoginResponse) => 
                          { r.message = r.message.toUpperCase();
                             return r;}),
                    tap( (r : LoginResponse) => 
                          { localStorage.setItem('token',r.token);})
                ) 
            // map( ()=>{}) effectue une transformation 
            // tap( ()=>{}) ne transforme rien mais effectue un
                            //traitement supplémentaire
  }
}
