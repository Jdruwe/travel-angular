import {Component, OnInit, Input} from '@angular/core';
import {Attraction} from "../attraction";

//Services
import {AttractionService} from "../attraction.service";

@Component({
  selector: 'attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.scss']
})
export class AttractionListComponent implements OnInit {

  @Input() countryId: number;

  attractions: Attraction[];

  //I use this to show of expression bindings in flex-layout and because I don't want the calculated value in the HTML.
  regularDistribution = 100 / 3;

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

  trackById(index: number, attraction: any): number {
    return attraction.id;
  }

}
