import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public registerForm: any|FormGroup

  constructor(private formBuilder:FormBuilder,
    ) { 
    this.initializeMyLoginForm()
  }

  initializeMyLoginForm(){
    this.registerForm = this.formBuilder.group({
      adminName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]) ,
      adminEmail:new FormControl('', [Validators.required, Validators.email]),
      adminPassword:new FormControl('',[Validators.required])
    })
  }

  submitRegisterForm(){
    const value = this.registerForm.value
    console.log(value);
  }

}
