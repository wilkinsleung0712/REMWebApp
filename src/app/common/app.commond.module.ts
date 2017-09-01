
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GoogleMaterialModule } from 'app/common/google.material.module';
import { CommonModule } from '@angular/common';
import { ViewNotificationUtils } from '../shared/view-notification';



@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    GoogleMaterialModule,
    CommonModule,

  ],
  exports: [
    FormsModule,
    HttpModule,
    GoogleMaterialModule,
    CommonModule,
  ],
  providers:[
    ViewNotificationUtils
  ],
  declarations: []
})
export class CommonWebAppModule { }
