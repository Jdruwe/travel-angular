import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb() {
    let countries = [
      {id: '0', name: 'Belgium', continent: 'Europe'},
      {id: '1', name: 'Netherlands', continent: 'Europe'},
      {id: '3', name: 'Germany', continent: 'Europe'}
    ];
    return {countries};
  }

}
