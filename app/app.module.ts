import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
//import { HomeComponent } from './components/pages/home.component';
//import { AboutComponent } from './components/pages/about.component';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
