import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  DesignAngularKitModule,
  ItBackToTopComponent, ItBreadcrumbsModule,
  ItLanguageSwitcherComponent,
  ItNotificationsComponent
} from "design-angular-kit";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpBackend, HttpClientModule} from "@angular/common/http";
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpBackend) => new MultiTranslateHttpLoader(http, [
          './bootstrap-italia/i18n/', // Load library translations first, so you can edit the keys in your localization file
          './assets/i18n/' // Your i18n location (You can override bootstrap-italia i18n keys)
        ]),
        deps: [HttpBackend]
      },
      defaultLanguage: 'it'
    }),

    DesignAngularKitModule,
    BrowserAnimationsModule,
    ItLanguageSwitcherComponent,
    ItNotificationsComponent,
    ItBackToTopComponent,
    ItBreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
