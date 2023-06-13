import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AutocompleteItem, ItAlertComponent,
  ItIconComponent,
  ItInputComponent,
  ItListModule,
  ItPaginationComponent, ItSpinnerComponent
} from "design-angular-kit";
import {map, Observable, of} from "rxjs";

interface PaginatedData {
  currentPage: number,
  pageNumbers: number,
  data: Array<string>
}

@Component({
  selector: 'app-search-tab',
  standalone: true,
  imports: [CommonModule, ItInputComponent, ItListModule, ItPaginationComponent, ItIconComponent, ItSpinnerComponent, ItAlertComponent],
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent {

  protected isLoading = false;

  private data: Array<AutocompleteItem<PaginatedData>> = [
    {
      value: 'Firenze',
      icon: 'pa',
      additionalData: {
        currentPage: 0,
        pageNumbers: 50,
        data: ['Antonino', 'Francesco', 'Giovanni']
      }
    },
    {value: 'Ferrara', icon: 'key'},
    {value: 'Catania', icon: 'check'},
    {value: 'Catanzaro', icon: 'ban'},
  ]

  protected selectedItem?: PaginatedData;

  protected search$ = (value?: string): Observable<Array<AutocompleteItem>> => {
    // Simulate retrieve data from API request
    return of(value).pipe(
      map(value => this.data)
    )
  }

  protected onSelected(item: AutocompleteItem<PaginatedData>): void {
    // Simulate API request which depends on `item.additionalData`
    this.isLoading = true;
    setTimeout(() => {
      this.selectedItem = item.additionalData;
      this.isLoading = false;
    }, 2000);
  }

  protected onPageChange(page: number, data: PaginatedData): void {
    // Simulate change page request
    this.isLoading = true;
    setTimeout(() => {
      this.selectedItem = {
        ...data,
        currentPage: page
      };
      this.isLoading = false;
    }, 2000);
  }
}
