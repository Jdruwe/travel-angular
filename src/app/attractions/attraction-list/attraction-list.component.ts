import {Component, OnInit, Input} from '@angular/core';
import {Attraction} from "../attraction";
import {Observable} from "rxjs";

@Component({
  selector: 'attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.scss']
})
export class AttractionListComponent implements OnInit {

  @Input() attractions: Attraction[];

  constructor() {
  }

  ngOnInit() {
  }

  trackById(index: number, attraction: any): number {
    return attraction.id;
  }

}
