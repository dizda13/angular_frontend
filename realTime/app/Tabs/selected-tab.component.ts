import { Component } from '@angular/core';
import { MyProfileComponent } from './my-profile.component';
import { AddFriendComponent } from './add-friend.component';
import { AboutComponent } from './about.component';

@Component({
  selector: 'selectedtab',
  template: `
  <div [ngSwitch]="this.selected" class='row'>
    <myprofile *ngSwitchCase="'myprofile'" class='col s9 push-s3'></myprofile>

  </div>`
})

export class SelectedTabComponent{
  selected: string;

  ngOnInit(){
    this.selected='myprofile';
  }

}
