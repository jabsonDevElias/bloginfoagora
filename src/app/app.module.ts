import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuverticalComponent } from './menuvertical/menuvertical.component';
import { MenuhorizontalComponent } from './menuhorizontal/menuhorizontal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NoticiaComponent } from './noticia/noticia.component';
import { HomeComponent } from './home/home.component';
import { ListadenoticiasComponent } from './listadenoticias/listadenoticias.component';
import { registerLocaleData } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuverticalComponent,
    MenuhorizontalComponent,
    NoticiaComponent,
    HomeComponent,
    ListadenoticiasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
