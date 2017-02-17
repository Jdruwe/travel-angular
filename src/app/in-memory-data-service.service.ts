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
        description: 'Belgium, officially the Kingdom of Belgium, is a federal state in Western Europe. It is a founding member of the European Union. It has the headquarters of the European Union, NATO and some other famous organisations. The capital city of Belgium is Brussels. Belgium has an area of 30,528 square kilometres (11,787 sq mi). Around 11 million people live in Belgium.'
      },
      {
        id: 2,
        iso: 'nl',
        name: 'Netherlands',
        capital: 'Amsterdam',
        description: 'The Netherlands is a country that is part of (a constituent country) of the Kingdom of the Netherlands. Most of it is in Western Europe, but there are also some parts in the Caribbean. More than 17 million people live there. To the north and west of the European part of the Netherlands is the North Sea, and to the east is Germany and to the south is Belgium. The Netherlands is one of the countries that started the European Union.'
      },
      {
        id: 3,
        iso: 'de',
        name: 'Germany',
        capital: 'Berlin',
        description: 'The Federal Republic of Germany, also called Germany, is a country in Central Europe. The country\'s full name is sometimes shortened to the FRG. To the north of Germany are the North Sea, the Baltic Sea, and the country of Denmark. To the east of Germany are the countries of Poland and the Czech Republic. To the south of Germany are the countries of Austria and Switzerland. To the west of Germany are the countries of France, Luxembourg, Belgium, and the Netherlands. The total area of Germany is 357,021 square kilometres. The large majority of Germany has warm summers and cool or cold winters.'
      },
      {
        id: 4,
        iso: 'fr',
        name: 'France',
        capital: 'Paris',
        description: 'France, officially the French Republic, is a country in Western Europe. Its capital city is Paris. It is a member of the European Union. It is known for its culture, its many monuments and structures, and places such as the Louvre, the Eiffel Tower, the Arc de Triomphe, Giverny, Mont Saint Michel, Versailles, and Notre Dame de Paris. France is divided into 13 régions that are further subdivided départements.'
      }
    ];

    let attractions = [
      {
        id: 1,
        countryId: 1,
        name: 'Onze-Lieve-Vrouwekathedraal',
        latitude: 51.220268,
        longitude: 4.401516
      },
      {
        id: 2,
        countryId: 1,
        name: 'Manneken Pis',
        latitude: 50.844993,
        longitude: 4.349978
      },
      {
        id: 3,
        countryId: 1,
        name: 'Grotten van Han',
        latitude: 50.125236,
        longitude: 5.187286
      }
    ];

    return {countries, attractions};
  }
}
