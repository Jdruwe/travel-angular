import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Country} from "../country";
import {CountryService} from "../country.service";

@Component({
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[];

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularDistribution = 100 / 3;

  constructor(
    private router: Router,
    private countyService: CountryService) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countyService.getCountries().then(countries => this.countries = countries);
  }

  onSelect(country: Country): void {
    this.router.navigate(['/countries', country.id]);
  }

  trackById(index: number, attraction: any): number {
    return attraction.id;
  }

}
