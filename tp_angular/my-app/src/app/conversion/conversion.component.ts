import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';
import { ResConv, WithResult } from '../common/data/resconv';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  codeSource : string = "EUR";//select avec [(ngModel)]
  codeCible : string = "USD";//select avec [(ngModel)]
  montant : number = 0;//input avec [(ngModel)]
  resultat : number ; //à afficher via {{}}

  listeDevises : Devise[];//pour option de select

  

  constructor(private deviseService : DeviseService) { 
    //injection de dépendance (pour déléguer des appels)
    this.deviseService.rechercherToutesDevises()
        .subscribe(
          (tabDevises:Devise[])=>{this.listeDevises=tabDevises;} /*callback en cas de succès différé*/,
          (err)=>{console.log(err);} /*callback en cas d'erreur différée*/
        );
  }

  onConvertir(){
    this.deviseService.convertir(this.codeSource,
                              this.codeCible,
                              this.montant)
          .subscribe(
              (resConv : WithResult)=>{this.resultat = resConv.result;} /*callback en cas de succès différé*/,
              (err)=>{console.log(err);} /*callback en cas d'erreur différée*/
          );
   }

  ngOnInit() {
  }

}
