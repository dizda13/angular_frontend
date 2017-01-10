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
//import { SelectedTabComponent } from './Tabs/selected-tab.component';
var my_profile_component_1 = require('./Tabs/my-profile.component');
var add_friend_component_1 = require('./Tabs/add-friend.component');
var about_component_1 = require('./Tabs/about.component');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login/login.component');
var login_service_1 = require('./login/login.service');
var app_routing_1 = require('./app.routing');
var auth_guard_1 = require('./auth.guard');
var main_page_component_1 = require('./main-page.component');
var myprofile_service_1 = require('./Tabs/myprofile.service');
var add_friend_service_1 = require('./Tabs/add-friend.service');
var shared_service_1 = require('./contacts/shared.service');
var register_component_1 = require('./register/register.component');
var register_service_1 = require('./register/register.service');
var chat_component_1 = require('./Tabs/chat.component');
var shared_contacts_service_1 = require('./contacts/shared-contacts.service');
//import { Subscription } from 'rxjs/Subscription';
//import 'rxjs/';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                my_heder_component_1.MyHederComponent,
                add_friend_component_1.AddFriendComponent,
                my_contacts_component_1.MyContactsComponent,
                profile_card_component_1.ProfileCardComponent,
                my_buttons_component_1.MyButtonsComponent,
                //ContactChatComponent,
                //SelectedTabComponent,
                my_profile_component_1.MyProfileComponent,
                about_component_1.AboutComponent,
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                main_page_component_1.MainPageComponent,
                register_component_1.RegisterComponent,
                chat_component_1.ChatComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                //Subscription,
                auth_guard_1.AuthGuard,
                contacts_service_1.ContactService,
                login_service_1.LoginService,
                myprofile_service_1.MyProfileService,
                add_friend_service_1.AddFriendService,
                my_contacts_component_1.MyContactsComponent,
                shared_service_1.SharedService,
                register_service_1.RegisterService,
                shared_contacts_service_1.SharedContactsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map