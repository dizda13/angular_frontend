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
var core_1 = require("@angular/core");
var add_friend_service_1 = require("./add-friend.service");
var AddFriendComponent = (function () {
    function AddFriendComponent(addFriendService) {
        this.addFriendService = addFriendService;
    }
    AddFriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addFriendService.searchFriend("").subscribe(function (response) { return _this.contacts = response; });
    };
    AddFriendComponent.prototype.onEnter = function (search) {
        var _this = this;
        this.addFriendService.searchFriend(search).subscribe(function (response) { return _this.contacts = response; });
    };
    return AddFriendComponent;
}());
AddFriendComponent = __decorate([
    core_1.Component({
        selector: 'addfriend',
        templateUrl: './app/Tabs/add-friend.component.html',
        styleUrls: ['./app/Tabs/add-friend.component.css']
    }),
    __metadata("design:paramtypes", [add_friend_service_1.AddFriendService])
], AddFriendComponent);
exports.AddFriendComponent = AddFriendComponent;
//# sourceMappingURL=add-friend.component.js.map