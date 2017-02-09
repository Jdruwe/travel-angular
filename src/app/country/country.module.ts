import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryRoutingModule} from './country-routing.module';
import {CountryListComponent} from './country-list/country-list.component';

@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  declarations: [
    CountryListComponent
  ]
})
export class CountryModule {
}
