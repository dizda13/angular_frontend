import { Component, Injectable, NgZone, Input } from '@angular/core';
import { ProfileCardComponent } from './profile-card.component';
import { ContactService } from './contacts.service';
import { Contact } from './contact.component';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { SharedService } from './shared.service';
//import 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: "my-contacts",
  templateUrl: './app/contacts/my-contacts.component.html',
  styleUrls: [ './app/contacts/my-contacts.component.css' ]
  //providers: [ Subscription ]
})

export class MyContactsComponent {

  contacts: Contact[];
  subscription: Subscription;
  search: string="";

  constructor(private contactService: ContactService, private sharedService: SharedService) {
    this.subscription = this.sharedService.getEmittedValue()
      .subscribe(item => this.contacts=item);
  }

    ngOnInit(){
      this.contactService.getContacts()
                            .subscribe(contacts=> this.contacts=contacts);
      //type this.contacts= Observable<array>;
    }

    updateContacts(){
      this.contactService.getContacts().subscribe(contacts=>this.contacts=contacts);

    }


    isSub(username){
      //this.contacts.forEach(con=>console.log(con.username));
      //console.log();
      if(username.indexOf(this.search.toLowerCase())>=0)
        return false;
      return true;
    }

}
