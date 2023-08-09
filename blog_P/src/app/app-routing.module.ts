import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { NovitaComponent } from './components/novita/novita.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contatti', component:ContattiComponent},
  {path:'chi-sono', component:ChiSonoComponent},
  {path:'galleria', component:GalleriaComponent},
  {path:'novita', component:NovitaComponent},
  {path:'admin', component:AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
