import { NgModule } from '@angular/core';


import { MriRoutingModule } from './mri-routing.module';
import { MriComponent } from './mri-component/mri.component';
import { CommonWebAppModule } from "app/common/app.commond.module";

@NgModule({
  imports: [
    CommonWebAppModule,
    MriRoutingModule
  ],
  declarations: [MriComponent]
})
export class MriModule { }
