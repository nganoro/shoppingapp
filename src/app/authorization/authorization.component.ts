import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  isLoginMode : boolean = true;
  signUpForm : FormGroup;
  isLoading: boolean = false;
  error : string = null;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'email': new FormControl(),
      'Password': new FormControl(),
    })
  }l

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if(!this.signUpForm.valid){
      return;
    }
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.Password;

    let authObser : Observable<AuthResponseData>;

    this.isLoading = true;

    if(this.isLoginMode){
      authObser = this.authService.login(email, password);
    } else {
      authObser = this.authService.signUp(email, password);
    }

      authObser.subscribe(
        responseData => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    )
    this.onClearItem();
  }

  onClearItem() {
    this.isLoginMode = false;
    this.signUpForm.reset();
  }

}
