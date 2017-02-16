import {Component, OnInit, Input} from '@angular/core';
import {Attraction} from "../attraction";

@Component({
  selector: 'attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  @Input() attraction: Attraction;

  constructor() {
  }

  ngOnInit() {
  }

}
