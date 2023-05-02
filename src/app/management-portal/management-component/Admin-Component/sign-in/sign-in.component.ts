import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  public LoginForm: any|FormGroup

  constructor(private formBuilder:FormBuilder,
    ) { 
    this.initializeMyLoginForm()
  }

  initializeMyLoginForm(){
    this.LoginForm = this.formBuilder.group({
      adminName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]) ,
      adminPassword:new FormControl('',[Validators.required])
    })
  }

  SubmitLoginForm(){
    const value = this.LoginForm.value
    console.log(value);
  }

}
