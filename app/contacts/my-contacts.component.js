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
var contacts_service_1 = require('./contacts.service');
var shared_service_1 = require('./shared.service');
var shared_contacts_service_1 = require("./shared-contacts.service");
var MyContactsComponent = (function () {
    function MyContactsComponent(contactService, sharedService, sharedContactsService) {
        var _this = this;
        this.contactService = contactService;
        this.sharedService = sharedService;
        this.sharedContactsService = sharedContactsService;
        this.search = "";
        this.subscription = this.sharedService.getEmittedValue()
            .subscribe(function (item) { return _this.contacts = item; });
    }
    MyContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts()
            .subscribe(function (contacts) { return _this.contacts = contacts; });
        //type this.contacts= Observable<array>;
    };
    MyContactsComponent.prototype.updateContacts = function () {
        var _this = this;
        this.contactService.getContacts().subscribe(function (contacts) { return _this.contacts = contacts; });
    };
    MyContactsComponent.prototype.choosen = function (username) {
        console.log(username);
        this.sharedContactsService.change(username);
    };
    MyContactsComponent.prototype.isSub = function (username) {
        //this.contacts.forEach(con=>console.log(con.username));
        //console.log();
        if (username.indexOf(this.search.toLowerCase()) >= 0)
            return false;
        return true;
    };
    MyContactsComponent = __decorate([
        core_1.Component({
            selector: "my-contacts",
            templateUrl: './app/contacts/my-contacts.component.html',
            styleUrls: ['./app/contacts/my-contacts.component.css']
        }), 
        __metadata('design:paramtypes', [contacts_service_1.ContactService, shared_service_1.SharedService, shared_contacts_service_1.SharedContactsService])
    ], MyContactsComponent);
    return MyContactsComponent;
}());
exports.MyContactsComponent = MyContactsComponent;
//# sourceMappingURL=my-contacts.component.js.map