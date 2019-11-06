import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titre : string = "default title";

  menuDefs : MenuDefinition[] = [
    { label : "Essentiel" , 
      children : [
        { label : "login" , path : "/login" } ,
        { label : "basic" , path : "/basic" },
        { divider : true },
        { label : "welcome" , path : "/welcome" }
      ]
    },
    { label : "welcome" , path : "/welcome" } , 
    { label : "basic" , path : "/basic" }
    ];

  constructor() { }

  ngOnInit() {
  }

}
