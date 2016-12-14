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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AddFriendService = (function () {
    function AddFriendService(http) {
        this.http = http;
    }
    AddFriendService.prototype.searchFriend = function (search) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('https://realtimetalk.herokuapp.com/rest/search', { search: search }, options).map(function (response) { return response.json().data; });
    };
    AddFriendService.prototype.addFriend = function (username) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('https://realtimetalk.herokuapp.com/rest/contacts', { username: username }, options).map(function (response) { return response.json().data; });
    };
    AddFriendService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddFriendService);
    return AddFriendService;
}());
exports.AddFriendService = AddFriendService;
//# sourceMappingURL=add-friend.service.js.map