import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CountryListComponent} from "./country-list/country-list.component";
import {CountryDetailComponent} from "./country-detail/country-detail.component";

const routes: Routes = [
  {path: 'countries', component: CountryListComponent},
  {path: 'countries/:id', component: CountryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CountryRoutingModule {
}
