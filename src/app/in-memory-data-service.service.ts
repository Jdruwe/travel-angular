import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb() {
    let countries = [
      {
        id: 1,
        iso: 'be',
        name: 'Belgium',
        capital: 'Brussels',
        description: 'Belgium, officially the Kingdom of Belgium, is a federal state in Western Europe. It is a founding member of the European Union.',
        latitude: 51.168090,
        longitude: 4.455604
      },
      {
        id: 2,
        iso: 'nl',
        name: 'Netherlands',
        capital: 'Amsterdam',
        description: 'The Netherlands is a country that is part of (a constituent country) of the Kingdom of the Netherlands. Most of it is in Western Europe, but there are also some parts in the Caribbean.',
        latitude: 51.168090,
        longitude: 4.455604
      },
      {
        id: 3,
        iso: 'de',
        name: 'Germany',
        capital: 'Berlin',
        description: 'The Federal Republic of Germany, also called Germany, is a country in Central Europe. The country\'s full name is sometimes shortened to the FRG.',
        latitude: 51.168090,
        longitude: 4.455604
      },
      {
        id: 4,
        iso: 'fr',
        name: 'France',
        capital: 'Paris',
        description: 'France, officially the French Republic, is a country in Western Europe. Its capital city is Paris. It is a member of the European Union.',
        latitude: 51.168090,
        longitude: 4.455604
      }
    ];

    let attractions = [
      {
        id: 1,
        countryId: 1,
        name: 'Onze-Lieve-Vrouwekathedraal',
        location: 'Antwerp',
        latitude: 51.220268,
        longitude: 4.401516
      },
      {
        id: 2,
        countryId: 1,
        name: 'Manneken Pis',
        location: 'Brussels',
        latitude: 50.844993,
        longitude: 4.349978
      },
      {
        id: 3,
        countryId: 1,
        name: 'Grotten van Han',
        location: 'Rochefort',
        latitude: 50.125236,
        longitude: 5.187286
      }
    ];

    return {countries, attractions};
  }
}
