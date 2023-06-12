import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DesignAngularKitModule, ItLanguageSwitcherComponent} from "design-angular-kit";
import {TranslateStore} from '@ngx-translate/core'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    DesignAngularKitModule,
    BrowserAnimationsModule,
    ItLanguageSwitcherComponent
  ],
  providers: [TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
