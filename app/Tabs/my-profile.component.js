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
var profile_component_1 = require('./profile.component');
var myprofile_service_1 = require('./myprofile.service');
var MyProfileComponent = (function () {
    function MyProfileComponent(myProfileService) {
        this.myProfileService = myProfileService;
        this.name = 'myprofile';
        this.profile = new profile_component_1.Profile();
        this.hiddenEditPassword = true;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myProfileService.getProfileInfo().subscribe(function (response) { return _this.profile = response; });
    };
    MyProfileComponent.prototype.editPasswordClick = function () {
        this.oldPass = "";
        this.newPass = "";
        this.repetPass = "";
        this.hiddenEditPassword = !this.hiddenEditPassword;
    };
    MyProfileComponent.prototype.changePasswordClick = function () {
        var _this = this;
        console.log(this.oldPass);
        console.log(this.newPass);
        this.myProfileService.putPassword(this.oldPass, this.newPass).subscribe(function (response) { return _this.response = response; });
    };
    MyProfileComponent.prototype.onKey = function (event, choice) {
        switch (choice) {
            case 'first_name':
                this.profile.first_name = event.target.value;
                break;
            case 'last_name':
                this.profile.last_name = event.target.value;
                break;
            case 'email':
                this.profile.email = event.target.value;
                break;
        }
    };
    MyProfileComponent.prototype.onKeyPass = function (event, choice) {
        switch (choice) {
            case 'old':
                this.oldPass = event.target.value;
                break;
            case 'new':
                this.newPass = event.target.value;
                break;
            case 'repeat':
                this.repetPass = event.target.value;
                break;
        }
    };
    MyProfileComponent.prototype.saveChangesClick = function () {
        var _this = this;
        this.myProfileService.putProfile(this.profile.first_name, this.profile.last_name, this.profile.email).subscribe(function (response) { return _this.response = response; });
    };
    MyProfileComponent.prototype.changePhotoClick = function () {
        console.log(this.oldPass);
        console.log(this.newPass);
        console.log(this.repetPass);
    };
    MyProfileComponent = __decorate([
        core_1.Component({
            selector: 'myprofile',
            templateUrl: "./app/Tabs/my-profile.component.html",
            styleUrls: ["./app/Tabs/my-profile.component.css"]
        }), 
        __metadata('design:paramtypes', [myprofile_service_1.MyProfileService])
    ], MyProfileComponent);
    return MyProfileComponent;
}());
exports.MyProfileComponent = MyProfileComponent;
//# sourceMappingURL=my-profile.component.js.map