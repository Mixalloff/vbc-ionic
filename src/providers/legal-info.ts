import { Suggestion } from './../models/suggestion';
import { User } from '../models/users';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LegalInfo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LegalInfo {
    public static API_KEY: string = '760b23a7f3722dfa119a4e16d237c6919aeaa52e';
    public static API_URL: string = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest';
    headers: Headers;

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', `Token ${ LegalInfo.API_KEY }`);
  }

  getByFIO(fio): Observable<Suggestion[]> {
    return this.request(`${ LegalInfo.API_URL }/fio`, fio);
  }

  getByAddress(address): Observable<Suggestion[]> {
    return this.request(`${ LegalInfo.API_URL }/address`, address);
  }

  getByBank(bank): Observable<Suggestion[]> {
    return this.request(`${ LegalInfo.API_URL }/bank`, bank);
  }

  getByEmail(email): Observable<Suggestion[]> {
    return this.request(`${ LegalInfo.API_URL }/email`, email);
  }
    
  getByOrgName(name): Observable<Suggestion[]> {
    return this.request(`${ LegalInfo.API_URL }/party`, name);
  }

  private request(url, query) {
    const options = new RequestOptions({ headers: this.headers });
console.log(url, query)
    return this.http.post(url, { query }, options)
      .map(res => <Suggestion[]>res.json().suggestions);
  }

}
