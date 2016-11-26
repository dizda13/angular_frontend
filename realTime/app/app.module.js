"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var my_heder_component_1 = require('./my-heder/my-heder.component');
var my_contacts_component_1 = require('./contacts/my-contacts.component');
var profile_card_component_1 = require('./contacts/profile-card.component');
var my_buttons_component_1 = require('./call-buttons/my-buttons.component');
//import { ContactChatComponent } from './contact-chat/contacts-chat.component';
var contacts_service_1 = require('./contacts/contacts.service');
var selected_tab_component_1 = require('./Tabs/selected-tab.component');
var my_profile_component_1 = require('./Tabs/my-profile.component');
//import { AppRace }   from './app.race';
//import { CarPartsComponent } from './car-parts.component';
//import { RacingDataService } from './racing-data.service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                my_heder_component_1.MyHederComponent,
                my_contacts_component_1.MyContactsComponent,
                profile_card_component_1.ProfileCardComponent,
                my_buttons_component_1.MyButtonsComponent,
                //ContactChatComponent,
                selected_tab_component_1.SelectedTabComponent,
                my_profile_component_1.MyProfileComponent
            ],
            bootstrap: [
                my_heder_component_1.MyHederComponent,
                my_contacts_component_1.MyContactsComponent,
                my_buttons_component_1.MyButtonsComponent,
                //ContactChatComponent,
                selected_tab_component_1.SelectedTabComponent
            ],
            providers: [
                contacts_service_1.ContactService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map