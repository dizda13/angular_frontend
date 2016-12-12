import { Component } from '@angular/core';
import { Profile } from './profile.component';
import { MyProfileService } from './myprofile.service';

@Component({
  selector: 'myprofile',
  templateUrl: `./app/Tabs/my-profile.component.html`,
  styleUrls: [`./app/Tabs/my-profile.component.css`]
})

export class MyProfileComponent {
  name: string='myprofile';
  profile: Profile= new Profile();
  hiddenEditPassword: boolean=true;
  response: string[];

  oldPass: string;
  newPass: string;
  repetPass: string;

  constructor(private myProfileService: MyProfileService) { }

  ngOnInit(){
    this.myProfileService.getProfileInfo().subscribe(response=> this.profile=response );
  }

  editPasswordClick(){
    this.oldPass="";
    this.newPass="";
    this.repetPass="";

    this.hiddenEditPassword=!this.hiddenEditPassword;
  }

  changePasswordClick(){
    console.log(this.oldPass);
    console.log(this.newPass);
    this.myProfileService.putPassword(this.oldPass, this.newPass).subscribe(response=>this.response=response);
  }

  onKey(event:any, choice:string){
    switch(choice){
      case 'first_name':
        this.profile.first_name=event.target.value;
        break;
      case 'last_name':
        this.profile.last_name=event.target.value;
      break;
      case 'email':
        this.profile.email=event.target.value;
      break;
    }
  }

  onKeyPass(event:any, choice:string){
    switch(choice){
      case 'old':
        this.oldPass=event.target.value;
        break;
      case 'new':
        this.newPass=event.target.value;
      break;
      case 'repeat':
        this.repetPass=event.target.value;
      break;
    }
  }

  saveChangesClick(){
    this.myProfileService.putProfile(this.profile.first_name, this.profile.last_name, this.profile.email).subscribe(response=>this.response=response);
  }

  changePhotoClick(){
    console.log(this.oldPass);
    console.log(this.newPass);
    console.log(this.repetPass);

  }
}
