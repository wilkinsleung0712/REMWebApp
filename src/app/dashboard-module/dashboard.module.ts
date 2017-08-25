import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { QlikComponentComponent } from './qlik-component/qlik-component.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
  ],
  exports:[
    
  ],
  declarations: [
    QlikComponentComponent
  ]
})
export class DashboardModule { }
