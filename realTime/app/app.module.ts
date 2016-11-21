import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyHederComponent } from './my-heder/my-heder.component';
import { MyContactsComponent } from './contacts/my-contacts.component';
import { ProfileCardComponent } from './contacts/profile-card.component';
import { MyMessageBarComponent } from './message-bar/my-message-bar.component';
import { MyButtonsComponent } from './call-buttons/my-buttons.component';
import { ContactChatComponent } from './contact-chat/contacts-chat.component';
import { ContactService } from './contact-chat/contacts.service';
//import { AppRace }   from './app.race';
//import { CarPartsComponent } from './car-parts.component';
//import { RacingDataService } from './racing-data.service';


@NgModule({
   imports:
   [
      BrowserModule,
      FormsModule,
      HttpModule
    ],
   declarations:
   [
     MyHederComponent,
     MyContactsComponent,
     ProfileCardComponent,
     MyButtonsComponent,
     ContactChatComponent
   ],
   bootstrap:
   [
     MyHederComponent,
     MyContactsComponent,
     MyButtonsComponent,
     ContactChatComponent
   ],
   providers:
   [
     ContactService
   ]
})

export class AppModule { }
