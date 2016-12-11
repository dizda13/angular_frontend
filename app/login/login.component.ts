import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { LoginResponse } from './loginResponse.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'login',
  template: `
  <div class="row ">
    <form class="col s12 centar">
      <div class="row">
        <div class="input-field col s4 push-s4">
          <input (keyup)="onKeyUser($event)" id="username" type="text" class="validate">
          <label for="username">Username</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s4 push-s4">
          <input (keyup)="onKeyPass($event)" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s2 push-s4">
          <a class="waves-effect waves-light btn" (click)="probajLogin()">Login</a>
      </div>
    </div>
    </form>
  </div>
         `,
  styleUrls: [`./app/login/login.component.css`]
})

export class LoginComponent {
  username: string="";
  password: string="";
  response: LoginResponse;
  returnUrl: string;
  loading: boolean;

constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) { }
  onKeyUser(event:any){
    this.username = event.target.value;
  }

  onKeyPass(event:any){
    this.password = event.target.value;
    console.log(this.response);
  }

  ngOnInit() {
        // reset login status
        this.loginService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    }

  probajLogin(){
    console.log(this.username);
    console.log(this.password);
    this.loginService.getRespons(this.username, this.password)
                .subscribe(data => {
                    this.router.navigate([" "]);
                },
                error => {
                    this.loading = false;
                });
    //console.log(this.response.token);
  }
}
