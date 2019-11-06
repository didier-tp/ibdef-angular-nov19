import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { ResConv } from '../data/resconv';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor() { }

  private simuTabDevises = [
      { code : "USD" , name : "dollar" , change : 1.1 },
      { code : "EUR" , name : "euro" , change : 1 },
      { code : "GBP" , name : "livre" , change : 0.9 }
  ];

  //public rechercherToutesDevises() : Promise<Devise[]>{
  //public rechercherToutesDevises() : Observable<Devise[]>{
  public rechercherToutesDevises() : Devise[]{
    return this.simuTabDevises;//simulation temporaire
  }

  public convertir(source : string,
                   target:string,
                   amount : number) : ResConv{
    //code temporaire (simulation):                     
    return { source : source , 
             target : target , 
             amount : amount ,
             result : amount * 1.1 };
  }

}
