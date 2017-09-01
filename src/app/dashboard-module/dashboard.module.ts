import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { QlikComponentComponent } from './qlik-component/qlik-component.component';
import { CommonWebAppModule } from "app/common/app.commond.module";

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonWebAppModule
  ],
  exports:[

  ],
  declarations: [
    QlikComponentComponent
  ]
})
export class DashboardModule { }
