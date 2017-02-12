"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
//Routing
var countries_routing_module_1 = require('./countries-routing.module');
//Components
var country_list_component_1 = require('./country-list/country-list.component');
var country_detail_component_1 = require('./country-detail/country-detail.component');
var country_component_1 = require('./country/country.component');
//Services
var country_service_1 = require("./country.service");
var CountriesModule = (function () {
    function CountriesModule() {
    }
    CountriesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                countries_routing_module_1.CountryRoutingModule,
                material_1.MaterialModule.forRoot()
            ],
            declarations: [
                country_list_component_1.CountryListComponent,
                country_detail_component_1.CountryDetailComponent,
                country_component_1.CountryComponent
            ],
            providers: [country_service_1.CountryService]
        })
    ], CountriesModule);
    return CountriesModule;
}());
exports.CountriesModule = CountriesModule;
