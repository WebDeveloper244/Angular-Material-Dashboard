import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { AnalyticsComponent } from './admin-component/analytics/analytics.component';

const routes: Routes = [{ path: '', component: AdminPortalComponent, children:
[
  {
    path:"", component:DashboardComponent
  },
  {
    path:"dashboard", component:DashboardComponent
  },
  {
    path:"analytics", component:AnalyticsComponent
  },
] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
