import {Component, OnInit} from '@angular/core';
import {Attraction} from "../attraction";
import {AttractionService} from "../attraction.service";

@Component({
  selector: 'attraction-map',
  templateUrl: './attraction-map.component.html',
  styleUrls: ['./attraction-map.component.scss']
})
export class AttractionMapComponent implements OnInit {

  attractions: Attraction[];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private attractionService: AttractionService) {
  }

  ngOnInit() {
    this.getAttractions();
  }

  getAttractions(): void {
    this.attractionService.getAttractions().then(attractions => this.attractions = attractions);
  }

}
