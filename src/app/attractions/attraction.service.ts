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

  getAttractionsByCountry(countryId: number): Observable<Attraction[]> {
    return this.http.get(`${this.attractionsUrl}?countryId=${countryId}`)
      .map((r: Response) => r.json().data as Attraction[])
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
