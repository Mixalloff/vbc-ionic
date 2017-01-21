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
  githubApiUrl = 'http://www.list-org.com/search.php?type=inn&val=';

  constructor(public http: Http) { }

  getByName(name): Observable<Suggestion[]> {
    // const requestedUrl = `${this.githubApiUrl}${name}`;
    const requestedUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party';
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Token 760b23a7f3722dfa119a4e16d237c6919aeaa52e');


    console.log(requestedUrl)
    // return this.http.get(requestedUrl)
    //   .map(res => <User[]>res.json());
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(requestedUrl, { query: name }, options)
      .map(res => <Suggestion[]>res.json().suggestions);
  }

}
