import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';
import { ResConv } from '../common/data/resconv';

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

  onConvertir(){
    let resConv : ResConv = 
      this.deviseService.convertir(this.codeSource,
                                this.codeCible,
                                this.montant);
      this.resultat = resConv.result;
  }

  constructor(private deviseService : DeviseService) { 
    //injection de dépendance (pour déléguer des appels)
    this.listeDevises = this.deviseService.rechercherToutesDevises();
  }

  ngOnInit() {
  }

}
