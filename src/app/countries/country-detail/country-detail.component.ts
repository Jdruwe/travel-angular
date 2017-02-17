import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CountryService} from "../country.service";

import 'rxjs/add/operator/switchMap';
import {Country} from "../country";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit{

  country: Country;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private countryService: CountryService) {
  }

  ngOnInit() {

    // (+) converts string 'id' to a number
    this.route.params
      .switchMap((params: Params) => this.countryService.getCountry(+params['id']))
      .subscribe((country: Country) => this.country = country);
  }

  goToCountries(): void {
    this.router.navigate(['/countries']);
  }

}
