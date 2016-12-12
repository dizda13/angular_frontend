import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyHederComponent } from './my-heder/my-heder.component';
import { MyContactsComponent } from './contacts/my-contacts.component';
import { ProfileCardComponent } from './contacts/profile-card.component';
import { MyMessageBarComponent } from './message-bar/my-message-bar.component';
import { MyButtonsComponent } from './call-buttons/my-buttons.component';
//import { ContactChatComponent } from './contact-chat/contacts-chat.component';
import { ContactService } from './contacts/contacts.service';
//import { SelectedTabComponent } from './Tabs/selected-tab.component';
import { MyProfileComponent } from './Tabs/my-profile.component';
import { AddFriendComponent} from './Tabs/add-friend.component';
import { AboutComponent } from './Tabs/about.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { routing }        from './app.routing';
import { AuthGuard } from './auth.guard';
import { MainPageComponent } from './main-page.component'
import { MyProfileService } from './Tabs/myprofile.service';
import { AddFriendService } from './Tabs/add-friend.service';


@NgModule({
   imports:
   [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
    ],
   declarations:
   [
     MyHederComponent,
     MyContactsComponent,
     ProfileCardComponent,
     MyButtonsComponent,
     //ContactChatComponent,
     //SelectedTabComponent,
     MyProfileComponent,
     AddFriendComponent,
     AboutComponent,
     AppComponent,
     LoginComponent,
     MainPageComponent
   ],
   bootstrap:
   [
     AppComponent
   ],
   providers:
   [
     AuthGuard,
     ContactService,
     LoginService,
     MyProfileService,
     AddFriendService
   ]
})

export class AppModule { }
