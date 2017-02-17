import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

//Classes
import {Attraction} from "./attraction";

@Injectable()
export class AttractionService {

  private attractionsUrl = 'api/attractions';

  constructor(private http: Http) {
  }

  getAttractions(): Promise<Attraction[]> {
    return this.http.get(this.attractionsUrl)
      .toPromise()
      .then(response => response.json().data as Attraction[])
      .catch(AttractionService.handleError);
  }

  getAttractionsByCountry(countryId: number): Observable<Attraction[]> {
    return this.http.get(`${this.attractionsUrl}?countryId=${countryId}`)
      .map((r: Response) => r.json().data as Attraction[])
      .catch(AttractionService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
