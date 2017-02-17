import {NgModule, ModuleWithProviders} from '@angular/core';
import {MaterialModule} from "@angular/material";

//Modules
import {CommonModule} from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {FlexLayoutModule} from '@angular/flex-layout';

//Components
import {AttractionComponent} from './attraction/attraction.component';
import {AttractionListComponent} from './attraction-list/attraction-list.component';

//Services
import {AttractionService} from "./attraction.service";
import { AttractionOverviewComponent } from './attraction-overview/attraction-overview.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXhLcrdXtt-OcHSorYuAYC6ZI_6lMOXpQ'
    }),
    FlexLayoutModule
  ],
  declarations: [
    AttractionComponent,
    AttractionListComponent,
    AttractionOverviewComponent
  ],
  exports: [
    AttractionOverviewComponent
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
