import { Component } from '@angular/core';
import { Contact } from '../contacts/contact.component';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'addfriend',
  templateUrl: './app/Tabs/add-friend.component.html',
  styleUrls: ['./app/Tabs/add-friend.component.css']
})

export class AddFriendComponent {
  contacts: Contact[];

  constructor(private addFriendService: AddFriendService){}

  ngOnInit(){
    this.addFriendService.searchFriend("").subscribe(response=>this.contacts=response);
  }

  onEnter(search: string){
    this.addFriendService.searchFriend(search).subscribe(response=>this.contacts=response);
  }

  addFriend(username: string){

  }
}
