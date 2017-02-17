import {NgModule, ModuleWithProviders} from '@angular/core';

//Modules
import {CommonModule} from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';

//Components
import {AttractionComponent} from './attraction/attraction.component';
import {AttractionListComponent} from './attraction-list/attraction-list.component';

//Services
import {AttractionService} from "./attraction.service";
import {AttractionMapComponent} from './attraction-map/attraction-map.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXhLcrdXtt-OcHSorYuAYC6ZI_6lMOXpQ'
    }),
  ],
  declarations: [
    AttractionComponent,
    AttractionListComponent,
    AttractionMapComponent
  ],
  exports: [
    AttractionListComponent,
    AttractionMapComponent
  ]
})

export class AttractionsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AttractionsModule,
      providers: [AttractionService]
    }
  }
}
