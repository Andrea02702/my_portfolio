import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NovitaComponent } from './components/novita/novita.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { ContattiComponent } from './components/contatti/contatti.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NovitaComponent,
    GalleriaComponent,
    ChiSonoComponent,
    ContattiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
