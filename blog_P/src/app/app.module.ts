import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NovitaComponent } from './components/novita/novita.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CardNewsComponent } from './components/card-news/card-news.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NovitaComponent,
    GalleriaComponent,
    ChiSonoComponent,
    ContattiComponent,
    NavbarComponent,
    CardNewsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
