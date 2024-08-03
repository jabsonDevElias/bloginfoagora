import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuverticalComponent } from './menuvertical/menuvertical.component';
import { MenuhorizontalComponent } from './menuhorizontal/menuhorizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuverticalComponent,
    MenuhorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
