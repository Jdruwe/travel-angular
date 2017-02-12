import {Component, OnInit, Input} from '@angular/core';
import {Country} from "../country";

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  @Input() country: Country;

  constructor() {
  }

}
