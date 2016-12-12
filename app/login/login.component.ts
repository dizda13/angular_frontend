import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { LoginResponse } from './loginResponse.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: `./app/login/login.component.html`,
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
