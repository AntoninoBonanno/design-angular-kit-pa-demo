import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItTabModule} from "design-angular-kit";
import {ReportTabComponent} from "../report-tab/report-tab.component";
import {SearchTabComponent} from "../search-tab/search-tab.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItTabModule, ReportTabComponent, SearchTabComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
