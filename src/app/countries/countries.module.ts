import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

//Modules
import {AttractionsModule} from "../attractions/attractions.module";

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
    AttractionsModule.forRoot(),
    FlexLayoutModule
  ],
  declarations: [
    CountryListComponent,
    CountryDetailComponent,
    CountryComponent
  ]
})

export class CountriesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountriesModule,
      providers: [CountryService]
    }
  }
}
