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
var login_service_1 = require("../login/login.service");
var router_1 = require("@angular/router");
var register_service_1 = require("./register.service");
var contact_component_1 = require("../contacts/contact.component");
var RegisterComponent = (function () {
    function RegisterComponent(route, router, loginService, registerService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.registerService = registerService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // reset login status
        this.loginService.logout();
        this.newContact = new contact_component_1.Contact();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    };
    RegisterComponent.prototype.onKey = function (event) {
        switch (event.target.id) {
            case 'username':
                this.newContact.username = event.target.value;
                break;
            case 'first_name':
                this.newContact.first_name = event.target.value;
                break;
            case 'last_name':
                this.newContact.last_name = event.target.value;
                break;
            case 'password':
                this.password = event.target.value;
                break;
            case 'repeat_password':
                this.repeatPassword = event.target.value;
                break;
            case 'email':
                this.newContact.email = event.target.value;
                break;
        }
        //event.target.value
    };
    RegisterComponent.prototype.probajRegister = function () {
        var _this = this;
        this.registerService.registerUser(this.newContact.username, this.newContact.first_name, this.newContact.last_name, this.newContact.email, this.password).
            subscribe(function (response) {
            _this.response = response;
            _this.router.navigate(["/login"]);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: '/app/register/register.component.html',
        styleUrls: ["/app/register/register.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, login_service_1.LoginService, register_service_1.RegisterService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map