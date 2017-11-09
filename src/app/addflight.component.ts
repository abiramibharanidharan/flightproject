import {Component,OnInit,Input} from '@angular/core'
import {Flight} from './flightclass'
import {FlightService} from './flight.service'

@Component({
    selector:'add-flight',
    templateUrl:'./addflight.component.html',
    styleUrls:['./addflight.component.css'],
    providers:[FlightService]

})

export class AddFlightComponent implements OnInit
{
    tabelshow:boolean=false
    flightDetail:Flight
    flightArray:Flight[]=[]
     flights:Flight[]
     FlightFrom='';
    FlightTo='';
    Airlines='';
    Date='';
    Time='';
    constructor(private flightService:FlightService){}
    
    ngOnInit():void
    {
        this.getFlights()
    }
    getFlights():void
    {
         this.flightService.getFlights()
    .then(flights => this.flights = flights);
    }
    
    add(from:string,to:string,air:string,dat:string,tim:string,sta:string):void
    {
       from=from.trim();
       to=to.trim();
       air=air.trim();
       dat=dat.trim();
       tim=tim.trim();
       if (!from && !to && !air && !dat && !tim) { return; }
        this.flightDetail={
       FlightFrom:from,
       FlightTo:to,
       Airlines :air,
       Date:dat,
       Time:tim,
        Status:sta }
         this.flights.push(this.flightDetail)   
       this.flightService.addFlights(this.flightDetail)
       this.tabelshow=true
    }
     
}