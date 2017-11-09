import {Component,OnInit} from '@angular/core'


import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {Flight} from './flightclass'
import {FlightService} from './flight.service'

@Component({
    selector:'flight',
    templateUrl:'flight.component.html',
    providers:[FlightService]
})

export class FlightComponent
{
    flights:Flight[]
    
    constructor(private flightService:FlightService,private route: ActivatedRoute,){}
    ngOnInit():void
    {
        this.getFlights()
        
    }
    getFlights():void
    {
        this.flightService.getFlights()
    .then(flights => this.flights = flights);
    }
    
}