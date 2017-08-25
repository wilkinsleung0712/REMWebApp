import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MriRoutingModule } from './mri-routing.module';
import { MriComponent } from './mri-component/mri.component';

@NgModule({
  imports: [
    CommonModule,
    MriRoutingModule
  ],
  declarations: [MriComponent]
})
export class MriModule { }
