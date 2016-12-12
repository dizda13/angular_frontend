import { Component } from '@angular/core';
import { ProfileCardComponent } from './profile-card.component';
import { ContactService } from './contacts.service';
import { Contact } from './contact.component'


@Component({
  selector: "my-contacts",
  templateUrl: './app/contacts/my-contacts.component.html',
  styleUrls: [ './app/contacts/my-contacts.component.css' ]
})

export class MyContactsComponent {
  contacts: Contact[];
  search: string="";
  constructor(private contactService: ContactService) { }

    ngOnInit(){
      this.contactService.getContacts()
                            .subscribe(contacts=> this.contacts=contacts);
    }

    isSub(username){
      if(username.indexOf(this.search.toLowerCase())>=0)
        return false;
      return true;
    }

}
