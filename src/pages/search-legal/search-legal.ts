import { Suggestion } from './../../models/suggestion';
import { LegalInfo } from '../../providers/legal-info';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SearchLegal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-legal',
  templateUrl: 'search-legal.html'
})
export class SearchLegalPage {

  suggestions: Suggestion[];
  requestedQuery: any;

  constructor(public navCtrl: NavController, private legalInfo: LegalInfo) {
    // const inn = 7710140679;
    
  }

  search(query) {
    this.requestedQuery = query;

    this.legalInfo.getByName(query).subscribe(suggestions => {
      console.log(suggestions);
      this.suggestions = suggestions;
    })
  }

  cardTap(suggestion) {
    suggestion._opened = !suggestion._opened;
  }

}
