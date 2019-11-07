import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { ResConv } from '../data/resconv';
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
    return this.http.get<Devise[]>(wsUrl);
  }

  public convertir(source : string,
                   target:string,
                   amount : number) : Observable<ResConv>{
    //devise-api/public/convert?source=EUR&target=USD&amount=200
    let wsUrl =`./devise-api/public/convert`+ 
               `?source=${source}&target=${target}&amount=${amount}`;
    return this.http.get<ResConv>(wsUrl);
    /*
    //code temporaire (simulation):                     
    return of({ source : source , 
             target : target , 
             amount : amount ,
             result : amount * 1.1 });
    */
  }

}
