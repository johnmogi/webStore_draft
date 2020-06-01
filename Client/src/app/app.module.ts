import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { MasterComponent } from './components/layouts/master/master.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { Sidebar1Component } from './components/layouts/sidebar1/sidebar1.component';
import { Sidebar2Component } from './components/layouts/sidebar2/sidebar2.component';
import { MainComponent } from './components/layouts/main/main.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { LogoutComponent } from './components/pages/auth/logout/logout.component';
import { AdminComponent } from './components/pages/auth/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    Sidebar1Component,
    Sidebar2Component,
    MainComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
