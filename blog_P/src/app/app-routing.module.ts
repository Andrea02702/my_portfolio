import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { AdminComponent } from './components/admin/admin.component';
import { PortbComponent } from './components/portb/portb.component';
import { authGuard } from './auth.guard';
import { PostImgComponent } from './components/post-img/post-img.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contatti', component:ContattiComponent},
  {path:'chi-sono', component:ChiSonoComponent},
  {path:'galleria', component:GalleriaComponent},
  {path:'login', component:AdminComponent},
  {path:'adminpost',component:PortbComponent,loadChildren:()=> import('./components/portb/portb.module').then((m) =>m.PortbModule),canActivate:[authGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
