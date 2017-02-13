import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb() {
    let countries = [
      {id: '0', iso: 'be', name: 'Belgium', capital: 'Brussels'},
      {id: '1', iso: 'nl', name: 'Netherlands', capital: 'Amsterdam'},
      {id: '3', iso: 'de', name: 'Germany', capital: 'Berlin'}
    ];
    return {countries};
  }

}
