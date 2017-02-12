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

  constructor(private countyService: CountryService) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countyService.getCountries().then(countries => this.countries = countries);
  }

}
