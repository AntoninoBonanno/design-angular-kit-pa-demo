import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItErrorPageComponent} from "design-angular-kit";

const routes: Routes = [
  {path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
  { path: 'error/not-found', component: ItErrorPageComponent, data: { errorCode: 404 } },
  { path: 'error/forbidden', component: ItErrorPageComponent, data: { errorCode: 403 } },
  { path: 'error/server-error', component: ItErrorPageComponent, data: { errorCode: 500 } },
  { path: '**', redirectTo: 'error/not-found'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
