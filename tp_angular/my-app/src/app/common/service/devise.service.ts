import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { ResConv, WithResult } from '../data/resconv';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http :HttpClient) { }

  private simuTabDevises = [
      { code : "USD" , name : "dollar" , change : 1.1 },
      { code : "EUR" , name : "euro" , change : 1 },
      { code : "GBP" , name : "livre" , change : 0.9 }
  ];

  //public rechercherToutesDevises() : Promise<Devise[]>{
  public rechercherToutesDevises() : Observable<Devise[]>{
    //return of(this.simuTabDevises);//simulation temporaire

    let wsUrl ="./devise-api/public/devise";
    //NB: cette url relative sera automatiquement préfixée
    // selon ng serve --proxy-config proxy.conf.json en développement
    // et selon une configuration équivalente en production 
    //(ex: reverse proxy nginx)

    //wsUrl="http://localhost:8282/devise-api/public/devise"; 
    //refusé car pas d'autorisation CORS coté serveur (v1)
    
    //wsUrl="http://localhost:8181/spring-boot-backend/rest/devise-api/public/devise";
    //autorisé car autorisation CORS coté serveur (v2)

    return this.http.get<Devise[]>(wsUrl);
  }

  //types de retour possible :
  // Observable<any> , Observable<object> , 
  // Observable<WithResult> , Observable<ResConv>
  public convertir(source : string,
                   target:string,
                   amount : number) : Observable<WithResult>{
    //devise-api/public/convert?source=EUR&target=USD&amount=200
    let wsUrl =`./devise-api/public/convert`+ 
               `?source=${source}&target=${target}&amount=${amount}`;
    return this.http.get<WithResult>(wsUrl);
    /*
    //code temporaire (simulation):                     
    return of({ source : source , 
             target : target , 
             amount : amount ,
             result : amount * 1.1 });
    */
  }

}
