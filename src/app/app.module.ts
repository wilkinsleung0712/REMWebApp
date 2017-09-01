import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMaterialModule } from './common/google.material.module';

// material animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard-module/dashboard.module';
import { MriModule } from './mri-module/mri.module';
import { HomeModule } from './home/home.module';

// shared rxjs library
import './shared/rxjs-extension';
import { CommonWebAppModule } from './common/app.commond.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonWebAppModule,
    AppRoutingModule,
    DashboardModule,
    MriModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
