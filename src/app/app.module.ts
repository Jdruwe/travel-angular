import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataServiceService }  from './in-memory-data-service.service';

import 'hammerjs';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TestComponent} from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataServiceService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
