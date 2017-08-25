import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home', loadChildren: 'app/home/home.module#HomeModule'
  }, {
    path: 'dashboard', loadChildren: 'app/dashboard-module/dashboard.module#DashboardModule'
  }, {
    path: 'mri', loadChildren: 'app/mri-module/mri.module#MriModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
