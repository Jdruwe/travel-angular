import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb() {
    let countries = [
      {id: '0', iso: 'be', name: 'Belgium', continent: 'Europe'},
      {id: '1', iso: 'nl', name: 'Netherlands', continent: 'Europe'},
      {id: '3', iso: 'de', name: 'Germany', continent: 'Europe'}
    ];
    return {countries};
  }

}
