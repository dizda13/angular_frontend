import { Component } from '@angular/core';
import {SharedService} from "../contacts/shared.service";
import {Subscription} from "rxjs";
import {SharedContactsService} from "../contacts/shared-contacts.service";
import {ChatService} from "./chat.service";
import {Chat} from "./chat";

@Component({
    selector: 'chat',
    templateUrl: './app/Tabs/chat.component.html',
    styleUrls: ['./app/Tabs/chat.component.css']
})

export class ChatComponent {


    subscription: Subscription;
    search: string="";
    username: string="";
    chats: Chat[];
    message: string;
    constructor(private sharedContactsService: SharedContactsService,private chatService: ChatService) {
        this.subscription = this.sharedContactsService.getEmittedValue()
            .subscribe(item => {this.username=item; this.chats=[];chatService.getChat(this.username).subscribe(chats=>this.chats=chats);});
    }

    send(){
        this.chatService.sendMessage("poruka",this.username).subscribe();
    }
}
