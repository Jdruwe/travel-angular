import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb() {
    let countries = [
      {id: '0', name: 'Belgium'},
      {id: '1', name: 'Netherlands'},
    ];
    return {countries};
  }

}
