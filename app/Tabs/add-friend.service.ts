import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../contacts/contact.component'

@Injectable()
export class AddFriendService{

  constructor(private http: Http) { }

  searchFriend(search: string){
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://realtimetalk.herokuapp.com/rest/search',{ search: search}, options).map(response=><Contact[]>response.json().data);
  }

  addFriend(username: string){

  }

}
