import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Attraction} from "../attraction";

@Component({
  selector: 'attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit, OnDestroy {

  @Input() attraction: Attraction;

  constructor() {
  }

  getAttractionImageName(){
    return this.attraction.name.replace(/\s+/g, '-').toLowerCase();
  }

  ngOnInit() {
    console.log('component created', this.attraction)
  }

  ngOnDestroy() {
    console.log('destroying component', this.attraction)
  }

}
