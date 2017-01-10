import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Profile } from './profile.component';
import {Chat} from "./chat";

@Injectable()
export class ChatService{

    constructor(private http: Http) { }

    getChat(username: string){
        let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://realtimetalk.herokuapp.com/rest/chat/'+username, options).map(response=><Chat[]>response.json().data);
    }

    sendMessage(message: string, username: string){
        let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('https://realtimetalk.herokuapp.com/rest/chat/'+username, { message: message } , options).map(response=><String[]>response.json().data);

    }
}
