import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent} from "../country-list/country-list.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
  // {path: '', redirectTo: '/test', pathMatch: 'full'},
  {path: 'countries', component: CountryListComponent},
  {path: '', redirectTo: '/countries', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
