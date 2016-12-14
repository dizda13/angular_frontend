import { Component } from '@angular/core';
import { Contact } from '../contacts/contact.component';
import { AddFriendService } from './add-friend.service';
import { MyContactsComponent } from '../contacts/my-contacts.component';
import { SharedService } from '../contacts/shared.service';
import { ContactService } from '../contacts/contacts.service';

@Component({
  selector: 'addfriend',
  templateUrl: './app/Tabs/add-friend.component.html',
  styleUrls: ['./app/Tabs/add-friend.component.css']
})

export class AddFriendComponent {

  contacts: Contact[];
  response: string[];
  constructor(private addFriendService: AddFriendService,private sharedService: SharedService,private contactService: ContactService){}


  ngOnInit(){
    this.addFriendService.searchFriend("").subscribe(response=>this.contacts=response);
  }

  onEnter(search: string){
    this.addFriendService.searchFriend(search).subscribe(response=>this.contacts=response);
  }

  addFriend(username: string){
    this.addFriendService.addFriend(username).subscribe((response: string[])=>{
      response=response;
      this.contactService.getContacts().subscribe((contacts: Contact[])=>this.sharedService.change(contacts));
    });

  }
}
