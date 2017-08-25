import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QlikComponentComponent } from './qlik-component/qlik-component.component';

const routes: Routes = [
  {
    path: '',
    component:QlikComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
