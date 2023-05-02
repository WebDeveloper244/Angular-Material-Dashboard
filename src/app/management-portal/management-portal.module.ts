import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPortalRoutingModule } from './management-portal-routing.module';
import { ManagementPortalComponent } from './management-portal.component';
import { SignInComponent } from './management-component/Admin-Component/sign-in/sign-in.component';
import { SignUpComponent } from './management-component/Admin-Component/sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementPortalComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ManagementPortalRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementPortalModule { }
