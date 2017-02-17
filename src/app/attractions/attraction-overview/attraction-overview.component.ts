import {Component, OnInit, Input} from '@angular/core';

//Classes
import {Attraction} from "../attraction";

//Services
import {AttractionService} from "../attraction.service";
import {Observable} from "rxjs";

@Component({
  selector: 'attraction-overview',
  templateUrl: './attraction-overview.component.html',
  styleUrls: ['./attraction-overview.component.scss']
})
export class AttractionOverviewComponent implements OnInit {

  @Input() countryId: number;

  attractions: Observable<Attraction[]>;
  lat: number = 51.678418;
  lng: number = 7.809007;

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularMapDistribution = (100 / 3) * 2;

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularListDistribution = 100 / 3;

  constructor(
    private attractionService: AttractionService) {
  }

  ngOnInit() {
    this.getAttractions();
  }

  getAttractions(): void {
    console.log(this.countryId);
    this.attractions = this.attractionService.getAttractionsByCountry(this.countryId);
  }

}
