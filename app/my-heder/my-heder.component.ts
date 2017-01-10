import { Component, Input } from '@angular/core';
import { MyHederLink } from './my-heder-link.component';
import { MYHEDERLINKS } from './my-heder.mocks';


//import { SelectedTabComponent } from '../Tabs/selected-tab.component';
import { MyProfileComponent } from '../Tabs/my-profile.component';
import { AddFriendComponent } from '../Tabs/add-friend.component';
import { AboutComponent } from '../Tabs/about.component';
import { LoginService } from '../login/login.service'
import { Router } from '@angular/router';
import {Subscription} from "rxjs";
import {SharedContactsService} from "../contacts/shared-contacts.service";

@Component({
  selector: 'my-heder',
  templateUrl: `app/my-heder/my-heder.component.html`,
  styleUrls: [`app/my-heder/my-heder.component.css`]
})

export class MyHederComponent {
  myHederLinks: MyHederLink[];
  selected: string;
  subscription: Subscription;
  username: String
  constructor(private loginService: LoginService,private router: Router, private sharedContactsService: SharedContactsService) {
    this.subscription = this.sharedContactsService.getEmittedValue()
        .subscribe(item => {this.username=item; this.selected='Chat'});
  }

  ngOnInit(){
    this.myHederLinks=MYHEDERLINKS;
    MYHEDERLINKS[0].active="active";
    this.selected='My profile';
  }

  changeActive(myHederLink){
    let j=0;
    for(let i of this.myHederLinks){
      MYHEDERLINKS[j].active="";
      j++;
    }
    MYHEDERLINKS[myHederLink.id].active="active";
    this.selected=myHederLink.text;
    if(myHederLink.text=='Logout'){
      this.loginService.logout();
      this.router.navigate([' ']);
    }
  }
}
