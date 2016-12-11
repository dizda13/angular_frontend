import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { LoginResponse } from './loginResponse.component';

@Injectable()
export class LoginService{
  //loginResponse: LoginResponse;
  constructor(private http: Http) { }

  getRespons(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://realtimetalk.herokuapp.com/rest/prijava',{ username: username, password: password }, options)
                  .map(response=> {
                // login successful if there's a jwt token in the response
                let loginResponse=<LoginResponse>response.json();
                //loginResponse = response.json();
                if (loginResponse.prijava && loginResponse.token) {
                    loginResponse.username=username;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(loginResponse));
                    localStorage.setItem('currentUser', JSON.stringify(loginResponse));
                  }
                });
  }

  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
