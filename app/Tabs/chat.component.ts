import { Component } from '@angular/core';
import {SharedService} from "../contacts/shared.service";
import {Subscription} from "rxjs";
import {SharedContactsService} from "../contacts/shared-contacts.service";

@Component({
    selector: 'chat',
    templateUrl: './app/Tabs/chat.component.html',
    styleUrls: ['./app/Tabs/chat.component.css']
})

export class ChatComponent {


    subscription: Subscription;
    search: string="";
    username: string="";
    constructor(private sharedContactsService: SharedContactsService) {
        this.subscription = this.sharedContactsService.getEmittedValue()
            .subscribe(item => this.username=item);
    }
}
