import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-component/home/home.component';
import { GoogleMaterialModule } from '../common/google.material.module';
import { DataDialogComponent } from './home-component/data-dialog/data-dialog.component';
import { ReportService } from '../shared/services/report.services';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    GoogleMaterialModule
  ],
  providers: [
    ReportService
  ],
  declarations: [HomeComponent, DataDialogComponent],
  bootstrap: [DataDialogComponent]
})
export class HomeModule { }
