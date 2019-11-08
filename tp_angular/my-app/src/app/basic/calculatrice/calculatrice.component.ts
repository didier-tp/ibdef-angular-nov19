import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {
  
  x : number=3;
  y : number=2;
  res: number;
  modeChoisi : string;

  constructor(route : ActivatedRoute) {
    route.params.subscribe(
      (params: Params) => {
        this.modeChoisi = params["mode"];
      }
    )
    //NB:  { path: 'calculatrice/:mode', ... },
   }
  
  onAddition(){
    this.res= Number(this.x) + Number(this.y);
  }

  onMultiplication(){
    this.res= this.x * this.y;
  }

  

  ngOnInit() {
  }

}
