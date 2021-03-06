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
var MyProfileService = (function () {
    function MyProfileService(http) {
        this.http = http;
    }
    MyProfileService.prototype.getProfileInfo = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('https://realtimetalk.herokuapp.com/rest/profile', options).map(function (response) { return response.json().data; });
    };
    MyProfileService.prototype.putProfile = function (first_name, last_name, email) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('https://realtimetalk.herokuapp.com/rest/profile', { first_name: first_name, last_name: last_name, email: email }, options).map(function (response) { return response.json().data; });
    };
    MyProfileService.prototype.putPassword = function (oldPassword, newPassword) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", "Authorization": JSON.parse(localStorage.getItem('currentUser'))['token'] });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put('https://realtimetalk.herokuapp.com/rest/profile/password', { current_password: oldPassword, new_password: newPassword }, options).map(function (response) { return response.json().data; });
    };
    MyProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MyProfileService);
    return MyProfileService;
}());
exports.MyProfileService = MyProfileService;
//# sourceMappingURL=myprofile.service.js.map