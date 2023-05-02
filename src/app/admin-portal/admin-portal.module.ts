import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminPortalComponent } from './admin-portal.component';
import { SideBarComponent } from './admin-component/side-bar/side-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { AnalyticsComponent } from './admin-component/analytics/analytics.component';


@NgModule({
  declarations: [
    AdminPortalComponent,
    SideBarComponent,
    DashboardComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ]
})
export class AdminPortalModule { }
