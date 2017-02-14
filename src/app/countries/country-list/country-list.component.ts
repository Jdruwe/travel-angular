import {Component, OnInit} from '@angular/core';
import {Country} from "../country";
import {CountryService} from "../country.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[];

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularDistribution = 100 / 3;

  constructor(private countyService: CountryService) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countyService.getCountries().then(countries => this.countries = countries);
  }

}
