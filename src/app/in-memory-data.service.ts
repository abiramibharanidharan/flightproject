import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flightes = [
        {FlightFrom:'Bangalore',FlightTo:'chennai',Airlines:'Emirate',Date:'10/12/2017',Time:'10 A.M',Status:'Available'},
    {FlightFrom:'Chennai',FlightTo:'Trichy',Airlines:'Emirate',Date:'10/12/2017',Time:'10 A.M',Status:'Booked'},
    {FlightFrom:'Trichy',FlightTo:'Bangalore',Airlines:'Emirate',Date:'10/12/2017',Time:'10 A.M',Status:'Available'},
    {FlightFrom:'Bangalore',FlightTo:'Delhi',Airlines:'Emirate',Date:'10/12/2017',Time:'10 A.M',Status:'Booked'}
    
];
return{flightes};
  }
}