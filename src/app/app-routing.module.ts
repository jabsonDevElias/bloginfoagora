import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NoticiaComponent} from "./noticia/noticia.component";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'noticia', component: NoticiaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
