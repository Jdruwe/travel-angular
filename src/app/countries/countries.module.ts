import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

//Routing
import {CountryRoutingModule} from './countries-routing.module';

//Components
import {CountryListComponent} from './country-list/country-list.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {CountryComponent} from './country/country.component';

//Services
import {CountryService} from "./country.service";


@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    CountryListComponent,
    CountryDetailComponent,
    CountryComponent
  ],
  providers: [CountryService]
})
export class CountriesModule {

}
