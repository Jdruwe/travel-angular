import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

//Components
import {AttractionComponent} from './attraction/attraction.component';
import {AttractionListComponent} from './attraction-list/attraction-list.component';

//Services
import {AttractionService} from "./attraction.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AttractionComponent,
    AttractionListComponent
  ],
  exports: [
    AttractionListComponent
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
