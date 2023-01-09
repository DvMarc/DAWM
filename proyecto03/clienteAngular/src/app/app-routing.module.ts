import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { MounstroComponent } from './mounstro/mounstro.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path: '', redirectTo: '/principal', pathMatch: 'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'monsters', component: MounstroComponent},
  {path: 'api', component: ApiComponent},
  { path: 'information/:uuid', component: MonsterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
