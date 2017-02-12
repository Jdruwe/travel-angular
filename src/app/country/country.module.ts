import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryRoutingModule} from './country-routing.module';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {CountryService} from "./country.service";

@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  declarations: [
    CountryListComponent,
    CountryDetailComponent
  ],
  providers: [CountryService]
})
export class CountryModule {
}
