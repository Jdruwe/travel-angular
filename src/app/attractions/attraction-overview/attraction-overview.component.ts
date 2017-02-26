import {Component, OnInit, Input} from '@angular/core';

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

  @Input() countryId: number;
  @Input() latitude: number;
  @Input() longitude: number;

  attractions: Attraction[];
  selectedAttraction: Attraction;

  //Map properties
  zoom: number = 7;

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularMapDistribution = (100 / 3) * 2;

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularDetailDistribution = 100 / 3;

  constructor(private attractionService: AttractionService) {
  }

  ngOnInit() {
    this.getAttractions();
  }

  getAttractions(): void {
    console.log(this.countryId);
    this.attractionService.getAttractionsByCountry(this.countryId).subscribe(
      attractions => this.attractions = attractions,
      err => {
        console.log(err);
      });
  }

  attractionClicked(attraction): void {
    this.selectedAttraction = attraction;
    this.latitude = attraction.latitude;
    this.longitude = attraction.longitude;
    this.zoom = 12;
  }

  resetZoom(): void {
    this.zoom = 7;
  }

  getLatitude(): number {
    if (this.selectedAttraction) {
      return this.selectedAttraction.latitude;
    } else {
      return this.latitude;
    }
  }

  getLongitude(): number {
    if (this.selectedAttraction) {
      return this.selectedAttraction.longitude;
    } else {
      return this.longitude;
    }
  }

  isSelectedAttraction(attraction: Attraction): boolean {
    if (this.selectedAttraction) {
      return attraction.id == this.selectedAttraction.id;
    } else {
      return false;
    }
  }

  hasAttractionSelected(): boolean {
    return !!this.selectedAttraction;
  }

  showAllAttractions(): void {
    this.selectedAttraction = null;
    this.resetZoom();
  }

}
