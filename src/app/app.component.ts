import { Component } from '@angular/core';
import {BreadcrumbDefinition, BreadcrumbService} from "xng-breadcrumb";
import {Observable} from "rxjs";
import {IconName} from "design-angular-kit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-angular-kit-pa-demo';

  protected breadcrumbs$: Observable<Array<BreadcrumbDefinition>>;

  constructor(
    private readonly breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }

  getCrumbIcon(crumb: BreadcrumbDefinition): IconName | undefined {
    return (crumb?.info as IconName) ?? undefined;
  }

}
