"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        this.countriesUrl = 'api/countries';
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get(this.countriesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(CountryService.handleError);
    };
    CountryService.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CountryService = __decorate([
        core_1.Injectable()
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
