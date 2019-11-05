import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {

  listeTaux : number [] = [ 5 , 10 , 20 ];
  ht : number ;
  taux: number = 20; //en %
  tva : number;
  ttc : number;

  onCalculTva(){
    this.tva = this.ht * this.taux / 100;
    this.ttc = Number(this.ht) + Number(this.tva);
  }

  constructor() { }

  ngOnInit() {
  }

}
