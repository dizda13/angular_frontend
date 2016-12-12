import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Profile } from './profile.component';

@Injectable()
export class MyProfileService{

  constructor(private http: Http) { }

  getProfileInfo(){
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('https://realtimetalk.herokuapp.com/rest/profile', options).map(response=><Profile>response.json().data);
  }

  putProfile(first_name: string, last_name: string, email: string){
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('https://realtimetalk.herokuapp.com/rest/profile',{first_name: first_name,last_name: last_name, email: email}, options).map(response=><string[]>response.json().data);
  }

  putPassword( oldPassword: string, newPassword: string){
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('https://realtimetalk.herokuapp.com/rest/profile/password',{ current_password: oldPassword, new_password: newPassword }, options).map(response=><string[]>response.json().data);
}
}
