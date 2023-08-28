import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
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
import { CardImgComponent } from './components/card-img/card-img.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FooterComponent } from './components/footer/footer.component';
import { PortbComponent } from './components/portb/portb.component';
import { PostImgComponent } from './components/post-img/post-img.component';
import {MatPaginatorModule} from '@angular/material/paginator'; 







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleriaComponent,
    ChiSonoComponent,
    ContattiComponent,
    NavbarComponent,
    CardImgComponent,
    AdminComponent,
    FooterComponent,
    PortbComponent,
    PostImgComponent,
    
    
    
    
    
    
    
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
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
  
    

    
    
    
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
