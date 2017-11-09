import {Component,OnInit} from '@angular/core'
import {Flight} from './flightclass'
import {FlightService} from './flight.service'

import { Observable } from 'rxjs/Observable';
import { Subject }  from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
    selector:'search-flight',
    templateUrl:'./search-flight.component.html',
    styleUrls:['./search-flight.component.css'],
    providers:[FlightService]
})

export class SearchFlightComponent implements OnInit
{
    flights:Flight[]
    flights$:Observable<Flight>
     private searchTerms = new Subject<string>();
    constructor(private flightService:FlightService){}
    // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term)
  }
  ngOnInit(): void
  {
    this.flights$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.flightService.search(term)),
    );
  }
      

}