import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Contact } from './contact.component';

@Injectable()
export class ContactService{

  constructor(private http: Http) { }

  getContacts() {
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://realtimetalk.herokuapp.com/rest/search',{ search: "a"}, options).map(response=><Contact[]>response.json().data);
  }
}
