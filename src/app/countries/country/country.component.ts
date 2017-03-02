import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Country} from "../country";

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnDestroy {

  @Input() country: Country;

  constructor() {
  }

  getFlag(): string {
    //TODO: move into assets service because paths can change, I want them together in 1 place.
    return "assets/img/flags/" + this.country.iso + ".png";
  }

  getShortDescription(): string {
    return this.country.description.substring(0, 150) + '...';
  }

  ngOnInit() {
    console.log('component created', this.country)
  }

  ngOnDestroy() {
    console.log('destroying component', this.country)
  }

}
