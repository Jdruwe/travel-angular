import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Country} from "../country";
import {CountryService} from "../country.service";
import {Observable} from "rxjs";

@Component({
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Observable<Country[]>;

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularDistribution = 100 / 3;

  constructor(private router: Router,
              private countyService: CountryService) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countries = this.countyService.getCountries();
  }

  onSelect(country: Country): void {
    this.router.navigate(['/countries', country.id]);
  }

  trackById(index: number, country: any): number {
    return country.id;
  }

}
