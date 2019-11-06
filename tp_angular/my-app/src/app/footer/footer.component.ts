import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  colors = [ "blank" , "yellow" , "lightgrey" , "cyan"];

  constructor(public preferencesService : PreferencesService) {
    //NB: une unique instance de PreferencesService
    //sera gérée par angular au niveau du module courant
    //et sera ici automatiquement injectée dans 
    //this.preferencesService
   }

  ngOnInit() {
  }

}
