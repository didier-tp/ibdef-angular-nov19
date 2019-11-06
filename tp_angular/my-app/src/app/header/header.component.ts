import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titre : string = "default title";

  constructor(public preferencesService : PreferencesService) {
    //NB: une unique instance de PreferencesService
    //sera gérée par angular au niveau du module courant
    //et sera ici automatiquement injectée dans 
    //this.preferencesService
   }

  ngOnInit() {
  }

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

  

}
