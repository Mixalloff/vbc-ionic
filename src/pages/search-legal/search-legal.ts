import { ToastController } from 'ionic-angular/components/toast/toast';
import { Observable } from 'rxjs/Rx';
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
  searchingObject: string;
  searchingQuery: string;

  constructor(public navCtrl: NavController, private legalInfo: LegalInfo, private toastCtrl: ToastController) {
    this.searchingQuery = '';
  }

  search(query, searchingObject) {
    if (!query) return;
    if (!searchingObject) {
      let toast = this.toastCtrl.create({
        message: 'Выберите тип для поиска',
        duration: 3000
      });
      
      toast.present();
      return;
    }

    this.requestedQuery = query;
    let method: Observable<Suggestion[]>;

    switch(searchingObject) {
      case 'FIO'     : { method = this.legalInfo.getByFIO(query); break; }
      case 'ADDRESS' : { method = this.legalInfo.getByAddress(query); break; }
      case 'ORG'     : { method = this.legalInfo.getByOrgName(query); break; }
      case 'BANK'    : { method = this.legalInfo.getByBank(query); break; }
      case 'EMAIL'   : { method = this.legalInfo.getByEmail(query); break; }
    }

    method.subscribe(suggestions => this.suggestions = suggestions);
  }

  toogleCard(suggestion) {
    suggestion._opened = !suggestion._opened;
  }

}
