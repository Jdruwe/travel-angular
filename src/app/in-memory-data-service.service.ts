import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb() {
    let countries = [
      {id: '0', iso: 'be', name: 'Belgium', capital: 'Brussels', description: 'Brussels is a region of Belgium comprising 19 municipalities, including the City of Brussels which is the capital of Belgium. The Brussels-Capital Region is a part of both the French Community of Belgium and the Flemish Community, but is separate from the region of Flanders (in which it forms an enclave) or Wallonia.[10] The region has a population of 1.2 million and a metropolitan area with a population of over 1.8 million, the largest in Belgium.'},
      {id: '1', iso: 'nl', name: 'Netherlands', capital: 'Amsterdam', description: 'Amsterdam is the capital and most populous municipality of the Kingdom of the Netherlands. Its status as the capital is mandated by the Constitution of the Netherlands, although it is not the seat of the government, which is The Hague. Amsterdam has a population of 847,176 within the city proper, 1,343,647 in the urban area, and 2,431,000 in the Amsterdam metropolitan area. The city is located in the province of North Holland in the west of the country. The metropolitan area comprises much of the northern part of the Randstad, one of the larger conurbations in Europe, with a population of approximately 7 million.'},
      {id: '3', iso: 'de', name: 'Germany', capital: 'Berlin', description: 'Germany, officially the Federal Republic of Germany is a federal parliamentary republic in central-western Europe. It includes 16 constituent states, covers an area of 357,021 square kilometres (137,847 sq mi), and has a largely temperate seasonal climate. With about 82 million inhabitants, Germany is the most populous member state of the European Union. After the United States, it is the second most popular immigration destination in the world. Germany\'s capital and largest metropolis is Berlin. Other major cities include Hamburg, Munich, Cologne, Frankfurt, Stuttgart and Düsseldorf.'},
      {id: '4', iso: 'de', name: 'Germany', capital: 'Berlin', description: 'Germany, officially the Federal Republic of Germany is a federal parliamentary republic in central-western Europe. It includes 16 constituent states, covers an area of 357,021 square kilometres (137,847 sq mi), and has a largely temperate seasonal climate. With about 82 million inhabitants, Germany is the most populous member state of the European Union. After the United States, it is the second most popular immigration destination in the world. Germany\'s capital and largest metropolis is Berlin. Other major cities include Hamburg, Munich, Cologne, Frankfurt, Stuttgart and Düsseldorf.'}
    ];
    return {countries};
  }

}
