import {Component, OnInit} from '@angular/core';

//Classes
import {Attraction} from "../attraction";

//Services
import {AttractionService} from "../attraction.service";

@Component({
  selector: 'attraction-overview',
  templateUrl: './attraction-overview.component.html',
  styleUrls: ['./attraction-overview.component.scss']
})
export class AttractionOverviewComponent implements OnInit {

  attractions: Attraction[];
  lat: number = 51.678418;
  lng: number = 7.809007;

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularDistribution = (100 / 3) * 2;

  constructor(private attractionService: AttractionService) {
  }

  ngOnInit() {
    this.getAttractions();
  }

  getAttractions(): void {
    this.attractionService.getAttractions().then(attractions => this.attractions = attractions);
  }

}
