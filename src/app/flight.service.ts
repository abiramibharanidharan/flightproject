import {Injectable} from '@angular/core'
import {Http}from '@angular/http'
import { Observable }     from 'rxjs/Observable'
import {Flight} from './flightclass'
import {flightes} from './mock-flights'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class FlightService
{
    flightList:Flight[]=[]
    flights:Flight
    private flightsUrl='/flight'
    constructor(private http:Http){}
    getFlights():Promise<Flight[]>
    {
        return Promise.resolve(flightes)
    }
    addFlights(flightDetail:Flight)
    {
        this.flightList.unshift(flightDetail)
    }
    getFlight(FlightFrom: string): Promise<Flight> {
        const url=`${this.flightsUrl}/${FlightFrom}`
        return this.http.get(url)
             .toPromise()
             .then(Response=>Response.json() as Flight)
             .catch(this.handleError);
    }
    search(term:string):Promise<Flight>
    {
         return this.http.get('detail/?FlightFrom=${term}')
             .toPromise()
             .then(Response=>Response.json() as Flight)
             .catch(this.handleError); }

     
   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
