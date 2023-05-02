import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortalComponent } from './main-portal.component';
import { HomeComponent } from './main-component/home/home.component';
import { ServicesComponent } from './main-component/services/services.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: MainPortalComponent, children:[
    {
      path:'', component:HomeComponent
    },
    {
      path:'home', component:HomeComponent
    },
    {
      path:'service', component:ServicesComponent
    },
    {
      path:'contact', component:ContactUsComponent
    },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPortalRoutingModule { }
