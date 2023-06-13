import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IconName, ItErrorPageComponent} from "design-angular-kit";
import {BreadcrumbDefinition} from "xng-breadcrumb";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/home'},
      {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
        data: {
          breadcrumb: <BreadcrumbDefinition>{
            label: 'Home',
            info: <IconName> "pa"
          }
        }
      }
    ]
  },
  {
    path: 'error',
    data: {
      breadcrumb: <BreadcrumbDefinition>{
        label: 'Errors'
      }
    },
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/error/not-found'},
      {
        path: 'not-found', component: ItErrorPageComponent, data: {
          errorCode: 404,
          breadcrumb: <BreadcrumbDefinition>{
            label: 'Not Found'
          }
        }
      },
      {
        path: 'forbidden', component: ItErrorPageComponent, data: {
          errorCode: 403,
          breadcrumb: <BreadcrumbDefinition>{
            label: 'Forbidden'
          }
        }
      },
      {
        path: 'server-error', component: ItErrorPageComponent, data: {
          errorCode: 500,
          breadcrumb: <BreadcrumbDefinition>{
            label: 'Server error'
          }
        }
      },
    ]
  },
  {path: '**', redirectTo: 'error/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
