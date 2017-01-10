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
import { SharedService } from './contacts/shared.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';
import { ChatComponent } from './Tabs/chat.component';
import { SharedContactsService } from './contacts/shared-contacts.service';
import { ChatService } from './Tabs/chat.service';


//import { Subscription } from 'rxjs/Subscription';
//import 'rxjs/';


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
     AddFriendComponent,
     MyContactsComponent,
     ProfileCardComponent,
     MyButtonsComponent,
     //ContactChatComponent,
     //SelectedTabComponent,
     MyProfileComponent,
     AboutComponent,
     AppComponent,
     LoginComponent,
     MainPageComponent,
     RegisterComponent,
       ChatComponent
   ],
   bootstrap:
   [
     AppComponent
   ],
   providers:
   [
     //Subscription,
     AuthGuard,
     ContactService,
     LoginService,
     MyProfileService,
     AddFriendService,
     MyContactsComponent,
     SharedService,
     RegisterService,
     SharedContactsService,
     ChatService
     //Subscription
   ]
})

export class AppModule { }
