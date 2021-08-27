import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path:'principal', component: PrincipalComponent },
  { path:'acercade', component: AcercaDeComponent },
  { path:'**', redirectTo:'principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
