import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPortalComponent } from './management-portal.component';
import { SignInComponent } from './management-component/Admin-Component/sign-in/sign-in.component';
import { SignUpComponent } from './management-component/Admin-Component/sign-up/sign-up.component';

const routes: Routes = [{ path: '', component: ManagementPortalComponent, children:[
  {
    path:"sign-in", component:SignInComponent
  },
  {
    path:"sign-up", component:SignUpComponent
  },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPortalRoutingModule { }
