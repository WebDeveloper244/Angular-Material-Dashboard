import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPortalRoutingModule } from './main-portal-routing.module';
import { MainPortalComponent } from './main-portal.component';
import { HomeComponent } from './main-component/home/home.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { ServicesComponent } from './main-component/services/services.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';


@NgModule({
  declarations: [
    MainPortalComponent,
    HomeComponent,
    ContactUsComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainPortalRoutingModule
  ]
})
export class MainPortalModule { }
