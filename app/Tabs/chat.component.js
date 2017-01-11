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
var shared_contacts_service_1 = require("../contacts/shared-contacts.service");
var chat_service_1 = require("./chat.service");
var ChatComponent = (function () {
    function ChatComponent(sharedContactsService, chatService) {
        var _this = this;
        this.sharedContactsService = sharedContactsService;
        this.chatService = chatService;
        this.search = "";
        this.username = "";
        this.subscription = this.sharedContactsService.getEmittedValue()
            .subscribe(function (item) { _this.username = item; _this.chats = []; chatService.getChat(_this.username).subscribe(function (chats) { return _this.chats = chats; }); });
    }
    ChatComponent.prototype.onKeyPass = function (event) {
        this.message = event.target.value;
    };
    ChatComponent.prototype.send = function () {
        this.chatService.sendMessage(this.message, this.username).subscribe();
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat',
            templateUrl: './app/Tabs/chat.component.html',
            styleUrls: ['./app/Tabs/chat.component.css']
        }), 
        __metadata('design:paramtypes', [shared_contacts_service_1.SharedContactsService, chat_service_1.ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map