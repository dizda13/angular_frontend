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
var login_service_1 = require('./login.service');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(route, router, loginService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.onKeyUser = function (event) {
        this.username = event.target.value;
    };
    LoginComponent.prototype.onKeyPass = function (event) {
        this.password = event.target.value;
        console.log(this.response);
    };
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.loginService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    };
    LoginComponent.prototype.probajLogin = function () {
        var _this = this;
        console.log(this.username);
        console.log(this.password);
        this.loginService.getRespons(this.username, this.password)
            .subscribe(function (data) {
            _this.router.navigate([" "]);
        }, function (error) {
            _this.loading = false;
        });
        //console.log(this.response.token);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n  <div class=\"row \">\n    <form class=\"col s12 centar\">\n      <div class=\"row\">\n        <div class=\"input-field col s4 push-s4\">\n          <input (keyup)=\"onKeyUser($event)\" id=\"username\" type=\"text\" class=\"validate\">\n          <label for=\"username\">Username</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s4 push-s4\">\n          <input (keyup)=\"onKeyPass($event)\" id=\"password\" type=\"password\" class=\"validate\">\n          <label for=\"password\">Password</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s2 push-s4\">\n          <a class=\"waves-effect waves-light btn\" (click)=\"probajLogin()\">Login</a>\n      </div>\n    </div>\n    </form>\n  </div>\n         ",
            styleUrls: ["./app/login/login.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map