import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-component/home/home.component';
import { GoogleMaterialModule } from '../common/google.material.module';
import { DataDialogComponent } from './home-component/data-dialog/data-dialog.component';
import { ReportService } from '../shared/services/report.services';
import { SharedConfirmDialog } from '../shared/dialog/shared.confirm.dialog';
import { CommonWebAppModule } from '../common/app.commond.module';


@NgModule({
  imports: [
    CommonWebAppModule,
    HomeRoutingModule
  ],
  providers: [
    ReportService
  ],
  declarations: [HomeComponent, DataDialogComponent, SharedConfirmDialog],
  bootstrap: [DataDialogComponent, SharedConfirmDialog]
})
export class HomeModule { }
