import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RegisterService{

  response: string[];

  constructor(private http: Http) { }

  registerUser(username: String, first_name: String, last_name: String, email: String, password: String){
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://realtimetalk.herokuapp.com/rest/dodaj',{
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
      email: email }, options).map(response=>this.response=response.json());
  }
}
