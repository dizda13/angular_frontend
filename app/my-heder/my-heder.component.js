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
var my_heder_mocks_1 = require('./my-heder.mocks');
var login_service_1 = require('../login/login.service');
var router_1 = require('@angular/router');
var shared_contacts_service_1 = require("../contacts/shared-contacts.service");
var MyHederComponent = (function () {
    function MyHederComponent(loginService, router, sharedContactsService) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.sharedContactsService = sharedContactsService;
        this.subscription = this.sharedContactsService.getEmittedValue()
            .subscribe(function (item) { _this.username = item; _this.selected = 'Chat'; });
    }
    MyHederComponent.prototype.ngOnInit = function () {
        this.myHederLinks = my_heder_mocks_1.MYHEDERLINKS;
        my_heder_mocks_1.MYHEDERLINKS[0].active = "active";
        this.selected = 'My profile';
    };
    MyHederComponent.prototype.changeActive = function (myHederLink) {
        var j = 0;
        for (var _i = 0, _a = this.myHederLinks; _i < _a.length; _i++) {
            var i = _a[_i];
            my_heder_mocks_1.MYHEDERLINKS[j].active = "";
            j++;
        }
        my_heder_mocks_1.MYHEDERLINKS[myHederLink.id].active = "active";
        this.selected = myHederLink.text;
        if (myHederLink.text == 'Logout') {
            this.loginService.logout();
            this.router.navigate([' ']);
        }
    };
    MyHederComponent = __decorate([
        core_1.Component({
            selector: 'my-heder',
            templateUrl: "app/my-heder/my-heder.component.html",
            styleUrls: ["app/my-heder/my-heder.component.css"]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, shared_contacts_service_1.SharedContactsService])
    ], MyHederComponent);
    return MyHederComponent;
}());
exports.MyHederComponent = MyHederComponent;
//# sourceMappingURL=my-heder.component.js.map