import { Component } from '@angular/core';
import { Contact } from './contact.component'
import { ContactService } from './contacts.service';


@Component({
  selector: 'chat',
  templateUrl: './app/contact-chat/contacts-chat.component.html',
  styleUrls: ['./app/contact-chat/contacts-chat.component.css']
})

export class ContactChatComponent {
  contacts: Contact[];

constructor(private contactService: ContactService) { }

  ngOnInit(){
    this.contactService.getContacts()
                          .subscribe(contacts=> this.contacts=contacts);
    console.log(this.contacts);
  }
 }
