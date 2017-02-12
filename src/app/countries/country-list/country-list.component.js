"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CountryListComponent = (function () {
    function CountryListComponent(countyService) {
        this.countyService = countyService;
    }
    CountryListComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CountryListComponent.prototype.getCountries = function () {
        var _this = this;
        this.countyService.getCountries().then(function (countries) { return _this.countries = countries; });
    };
    CountryListComponent = __decorate([
        core_1.Component({
            selector: 'app-country-list',
            templateUrl: './country-list.component.html',
            styleUrls: ['./country-list.component.scss']
        })
    ], CountryListComponent);
    return CountryListComponent;
}());
exports.CountryListComponent = CountryListComponent;
