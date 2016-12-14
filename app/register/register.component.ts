import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from './register.service';
import { Contact } from '../contacts/contact.component';

@Component({
  selector:'register',
  templateUrl: '/app/register/register.component.html',
  styleUrls: [`/app/register/register.component.css`]
})

export class RegisterComponent {
  returnUrl: string;
  response: string[];
  newContact: Contact;
  password: string;
  repeatPassword: string;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService, private registerService: RegisterService) { }

  ngOnInit() {
        // reset login status
        this.loginService.logout();
        this.newContact= new Contact();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    }

    onKey(event: any){
      switch(event.target.id){
        case 'username':
          this.newContact.username=event.target.value;
          break;
        case 'first_name':
        this.newContact.first_name=event.target.value;
          break;
        case 'last_name':
        this.newContact.last_name=event.target.value;
          break;
        case 'password':
          this.password=event.target.value;
         break;
        case 'repeat_password':
          this.repeatPassword=event.target.value;
          break;
        case 'email':
          this.newContact.email=event.target.value;
          break;
      }
      //event.target.value
    }

    probajRegister(){
      this.registerService.registerUser(this.newContact.username, this.newContact.first_name, this.newContact.last_name, this.newContact.email, this.password).
      subscribe((response: string[])=>{
        this.response=response;
        this.router.navigate(["/login"]);
      });
    }
}
