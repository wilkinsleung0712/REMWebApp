import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MriComponent } from './mri-component/mri.component';

const routes: Routes = [
    {
      path: '',
      component:MriComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MriRoutingModule { }
