import {Component, OnInit} from '@angular/core';
import {AttractionService} from "../attraction.service";
import {Attraction} from "../attraction";

@Component({
  selector: 'attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.scss']
})
export class AttractionListComponent implements OnInit {

  attractions: Attraction[];

  constructor(private attractionService: AttractionService) {
  }

  ngOnInit() {
    this.getAttractions();
  }

  getAttractions(): void {
    this.attractionService.getAttractions().then(attractions => this.attractions = attractions);
  }

}
