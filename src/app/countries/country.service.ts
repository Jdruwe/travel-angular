import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

import {Country} from "./country";

@Injectable()
export class CountryService {

  private countriesUrl = 'api/countries';

  constructor(private http: Http) {
  }
  getCountries(): Observable<Country[]> {
    return this.http.get(this.countriesUrl)
      .map(response => response.json().data as Country[])
      .catch(CountryService.handleError);
  }

  getCountry(id: number): Observable<Country> {
    return this.http.get(`${this.countriesUrl}/${id}`)
      .map(response => response.json().data as Country)
      .catch(CountryService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
